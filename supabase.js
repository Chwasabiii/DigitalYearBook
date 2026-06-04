// =============================================
//  supabase.js — Supabase client helper
// =============================================

const SUPABASE_URL = window.SUPABASE_CONFIG?.url || '';
const SUPABASE_ANON_KEY = window.SUPABASE_CONFIG?.anonKey || '';

if (!window.supabase) {
  console.warn('Supabase JS not loaded. Make sure the CDN script is included in index.html.');
}

const supabaseClient = window.supabase && SUPABASE_URL && SUPABASE_ANON_KEY
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

if (!window.SUPABASE_CONFIG) {
  console.warn('Supabase config not loaded. Make sure supabase-config.js is deployed before supabase.js.');
}

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

  if (lowerMessage.includes('failed to fetch') || lowerMessage.includes('networkerror')) {
    return 'Could not reach Supabase from the browser. Check your internet connection, browser extensions, and that you are opening the site through the local server URL instead of the file directly.';
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

function hasRealSupabaseConfig() {
  return Boolean(
    supabaseClient &&
    SUPABASE_URL &&
    SUPABASE_ANON_KEY &&
    !SUPABASE_URL.includes('your-project-id') &&
    SUPABASE_ANON_KEY !== 'YOUR_ANON_KEY'
  );
}

async function signUpUser({ name, username, email, password }) {
  if (!supabaseClient) {
    return { error: { message: 'Supabase client not initialized.' } };
  }

  if (!hasRealSupabaseConfig()) {
    return {
      error: {
        message: 'Supabase is not configured. Generate supabase-config.js from your .env first.',
      },
    };
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
      return {
        data,
        error: {
          ...profileResult.error,
          message: `Account was created, but the signup profile could not be saved: ${profileResult.error.message || 'Unknown profile error.'}`,
        },
      };
    }
    return { data, error, profile: profileResult };
  }

  return { data, error };
}

async function signInUser(email, password) {
  if (!supabaseClient) {
    return { error: { message: 'Supabase client not initialized.' } };
  }

  if (!hasRealSupabaseConfig()) {
    return {
      error: {
        message: 'Supabase is not configured. Generate supabase-config.js from your .env first.',
      },
    };
  }

  let data;
  let error;

  try {
    const result = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });
    data = result.data;
    error = result.error;
  } catch (networkError) {
    return {
      data: null,
      error: {
        message: getFriendlyAuthError(networkError),
        originalError: networkError,
      },
    };
  }

  if (error) {
    return { data, error: { ...error, message: getFriendlyAuthError(error) } };
  }

  if (data?.session?.user) {
    const profileResult = await saveSignupProfile(data.session.user, { email });
    if (profileResult.error) {
      console.warn('Signed in, but the signup profile could not be saved:', profileResult.error);
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

