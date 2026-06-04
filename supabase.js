// =============================================
//  supabase.js — Supabase client helper
// =============================================

const SUPABASE_URL = window.SUPABASE_CONFIG?.url || 'https://your-project-id.supabase.co';
const SUPABASE_ANON_KEY = window.SUPABASE_CONFIG?.anonKey || 'YOUR_ANON_KEY';

if (!window.supabase) {
  console.warn('Supabase JS not loaded. Make sure the CDN script is included in index.html.');
}

const supabaseClient = window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

function getFriendlyAuthError(error) {
  const message = error?.message || '';
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes('rate limit') || lowerMessage.includes('limit exceeded')) {
    return 'Signup limit reached. Wait a while, or turn off email confirmation in Supabase Authentication > Providers > Email while testing.';
  }

  if (lowerMessage.includes('already registered') || lowerMessage.includes('already exists')) {
    return 'An account with this email already exists. Try signing in instead.';
  }

  if (lowerMessage.includes('invalid login credentials')) {
    return 'Invalid email or password.';
  }

  if (lowerMessage.includes('email not confirmed')) {
    return 'Please confirm your email before signing in.';
  }

  return message || 'Something went wrong. Please try again.';
}

async function saveSignupProfile(user, { name, username, email, course = 'Undeclared' } = {}) {
  if (!supabaseClient) {
    return { error: { message: 'Supabase client not initialized.' } };
  }

  if (!user?.id) {
    return { error: { message: 'No signed-in user found.' } };
  }

  const metadata = user.user_metadata || {};
  const fullName = name || metadata.full_name || user.email || 'New User';
  const profileEmail = email || user.email || null;
  const profileUsername = username || metadata.username || null;

  const { data, error } = await supabaseClient
    .from('signup_profiles')
    .upsert([{
      user_id: user.id,
      full_name: fullName,
      username: profileUsername,
      email: profileEmail,
      course,
    }], {
      onConflict: 'user_id',
      returning: 'minimal',
    });

  return { data, error };
}

async function signUpUser({ name, username, email, password }) {
  if (!supabaseClient) {
    return { error: { message: 'Supabase client not initialized.' } };
  }

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
        username,
      },
    },
  });

  if (error) {
    return { data, error: { ...error, message: getFriendlyAuthError(error) } };
  }

  if (data?.session?.user) {
    const profileResult = await saveSignupProfile(data.session.user, { name, username, email });
    if (profileResult.error) {
      console.warn('Could not save signup profile row:', profileResult.error.message || profileResult.error);
    }
    return { data, error, profile: profileResult };
  }

  return { data, error };
}

async function signInUser(email, password) {
  if (!supabaseClient) {
    return { error: { message: 'Supabase client not initialized.' } };
  }

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { data, error: { ...error, message: getFriendlyAuthError(error) } };
  }

  if (data?.session?.user) {
    const profileResult = await saveSignupProfile(data.session.user, { email });
    if (profileResult.error) {
      console.warn('Could not save login profile row:', profileResult.error.message || profileResult.error);
    }
  }

  return { data, error };
}

async function signOutUser() {
  if (!supabaseClient) {
    return { error: { message: 'Supabase client not initialized.' } };
  }

  const result = await supabaseClient.auth.signOut();
  window.YearbookSession = null;
  window.YearbookUser = null;
  return result;
}

async function getCurrentUser() {
  if (!supabaseClient) return null;
  const { data, error } = await supabaseClient.auth.getUser();
  if (error) return null;
  return data?.user || null;
}

async function getSession() {
  if (!supabaseClient) return null;
  const { data, error } = await supabaseClient.auth.getSession();
  if (error) return null;
  return data?.session || null;
}

async function initializeAuth() {
  const session = await getSession();
  window.YearbookSession = session;
  window.YearbookUser = session?.user || null;
  return window.YearbookUser;
}

function onAuthStateChanged(callback) {
  if (!supabaseClient || typeof callback !== 'function') return () => {};
  const { data: { subscription } } = supabaseClient.auth.onAuthStateChange((_event, session) => {
    window.YearbookSession = session;
    window.YearbookUser = session?.user || null;
    callback(session);
  });
  return () => supabaseClient.auth.removeSubscription(subscription);
}

window.SupabaseApp = {
  signUpUser,
  signInUser,
  signOutUser,
  getCurrentUser,
  getSession,
  initializeAuth,
  onAuthStateChanged,
  saveSignupProfile,
  client: supabaseClient,
};

