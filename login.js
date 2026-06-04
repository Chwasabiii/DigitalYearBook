// =============================================
//  login.js — Authentication / Sign In Page
// =============================================

let loginInProgress = false;

function renderLogin() {
  console.log('Rendering login page');
  return `
    <div id="page-login" class="page active">
      <!-- Navbar -->
      <nav class="navbar">
        <span class="navbar-brand" onclick="Router.go('landing'); return false;" style="cursor:pointer;">Login</span>
      </nav>

      <!-- Login area -->
      <div class="login-wrapper">
        <!-- Background image: replace with your image -->
        <div class="login-bg-placeholder">
          <!--
            TO ADD YOUR IMAGE:
            Remove the div above and use:
            <img src="images/login-bg.jpg" class="hero-bg" alt="Login background" />
          -->
        </div>

        <div class="login-overlay">
          <div class="login-card fade-up">
            <h2>Sign In</h2>
            <p>Enter your student credentials.</p>

            <!-- Email field -->
            <div class="input-group">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <input
                type="email"
                id="login-email"
                placeholder="Email"
                autocomplete="email"
              />
            </div>

            <!-- Password field -->
            <div class="input-group">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <input
                type="password"
                id="login-password"
                placeholder="Password"
                autocomplete="current-password"
              />
            </div>

            <!-- Login button -->
            <button class="btn-login" id="login-submit" onclick="LoginPage.handleLogin()">
              LOGIN
            </button>

            <a href="#" class="forgot-link" onclick="return false;">
              Forgot password?
            </a>

            <p class="signup-redirect">
              Don't have an account?
              <a href="#" onclick="Router.go('signup'); return false;">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

async function handleLogin() {
  if (loginInProgress) return;

  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();
  const submitButton = document.getElementById('login-submit');

  if (!email || !password) {
    [
      document.getElementById('login-email'),
      document.getElementById('login-password'),
    ].forEach(input => {
      input?.closest('.input-group')?.classList.toggle('is-invalid', !input.value.trim());
    });
    return;
  }

  document.querySelectorAll('.input-group.is-invalid').forEach(el => {
    el.classList.remove('is-invalid');
  });

  if (window.SupabaseApp && SupabaseApp.signInUser) {
    loginInProgress = true;
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'SIGNING IN...';
    }

    try {
      const result = await SupabaseApp.signInUser(email, password);
      if (result.error) {
        alert(result.error.message || 'Sign in failed.');
        return;
      }

      const session = result.data?.session;
      window.YearbookUser = session?.user || null;
      if (window.SupabaseApp?.initializeAuth) {
        await window.SupabaseApp.initializeAuth();
      }

      Router.go('home');
    } catch (error) {
      console.error('Sign in failed:', error);
      alert(error?.message || 'Unable to sign in. Please check your credentials.');
    } finally {
      loginInProgress = false;
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'LOGIN';
      }
    }
  } else {
    Router.go('home');
  }
}

// Register page
window.LoginPage = { render: renderLogin, handleLogin };
