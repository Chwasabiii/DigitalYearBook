// =============================================
//  signup.js — Registration / Sign Up Page
// =============================================

let signupInProgress = false;

function renderSignup() {
  return `
    <div id="page-signup" class="page active">
      <!-- Navbar -->
      <nav class="navbar">
        <span class="navbar-brand" onclick="Router.go('landing'); return false;" style="cursor:pointer;">Sign Up</span>
      </nav>

      <!-- Signup area -->
      <div class="signup-wrapper">
        <!-- Background image: replace with your image -->
        <div class="signup-bg-placeholder">
          <!--
            TO ADD YOUR IMAGE:
            Remove the div above and use:
            <img src="images/signup-bg.jpg" class="hero-bg" alt="Signup background" />
          -->
        </div>

        <div class="signup-overlay">
          <div class="signup-card fade-up">
            <h2>Create Account</h2>
            <p>Join the Yearbook 2026 community.</p>

            <!-- Full Name field -->
            <div class="input-group">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <input
                type="text"
                id="signup-name"
                placeholder="Full Name"
                autocomplete="name"
              />
            </div>

            <!-- Email field -->
            <div class="input-group">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <input
                type="email"
                id="signup-email"
                placeholder="Email"
                autocomplete="email"
              />
            </div>

            <!-- Username field -->
            <div class="input-group">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <input
                type="text"
                id="signup-username"
                placeholder="Username"
                autocomplete="username"
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
                id="signup-password"
                placeholder="Password"
                autocomplete="new-password"
              />
            </div>

            <!-- Confirm Password field -->
            <div class="input-group">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <input
                type="password"
                id="signup-confirm-password"
                placeholder="Confirm Password"
                autocomplete="new-password"
              />
            </div>

            <!-- Signup button -->
            <button class="btn-signup" id="signup-submit" onclick="SignupPage.handleSignup()">
              SIGN UP
            </button>

            <p class="login-redirect">
              Already have an account?
              <a href="#" onclick="Router.go('login'); return false;">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

async function handleSignup() {
  if (signupInProgress) return;

  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const username = document.getElementById('signup-username').value.trim();
  const password = document.getElementById('signup-password').value.trim();
  const confirmPassword = document.getElementById('signup-confirm-password').value.trim();
  const submitButton = document.getElementById('signup-submit');

  // Validation
  if (!name || !email || !username || !password || !confirmPassword) {
    [
      document.getElementById('signup-name'),
      document.getElementById('signup-email'),
      document.getElementById('signup-username'),
      document.getElementById('signup-password'),
      document.getElementById('signup-confirm-password'),
    ].forEach(input => {
      input?.closest('.input-group')?.classList.toggle('is-invalid', !input.value.trim());
    });
    return;
  }

  document.querySelectorAll('.input-group.is-invalid').forEach(el => {
    el.classList.remove('is-invalid');
  });

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters!');
    return;
  }

  if (window.SupabaseApp && SupabaseApp.signUpUser) {
    signupInProgress = true;
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'CREATING...';
    }

    try {
      const result = await SupabaseApp.signUpUser({ name, username, email, password });
      if (result.error) {
        alert(result.error.message || 'Account creation failed.');
        return;
      }

      if (result.data?.session?.user) {
        window.YearbookUser = result.data.session.user;
        if (window.SupabaseApp?.initializeAuth) {
          await window.SupabaseApp.initializeAuth();
        }
        Router.go('home');
        return;
      }

      if (result.data?.user) {
        alert('Account created. Check your email to confirm your address, then sign in.');
        Router.go('login');
        return;
      }

      alert('Account created. Please sign in.');
      Router.go('login');
      return;
    } finally {
      signupInProgress = false;
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'SIGN UP';
      }
    }
  }

  Router.go('home');
}

// Register page
window.SignupPage = { render: renderSignup, handleSignup };
