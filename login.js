// =============================================
//  login.js — Authentication / Sign In Page
// =============================================

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

            <!-- Username field -->
            <div class="input-group">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <input
                type="text"
                id="login-username"
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
                id="login-password"
                placeholder="Password"
                autocomplete="current-password"
              />
            </div>

            <!-- Login button -->
            <button class="btn-login" onclick="LoginPage.handleLogin()">
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

function handleLogin() {
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();

  if (!username || !password) {
    // Simple shake animation on empty fields
    document.querySelectorAll('.input-group').forEach(el => {
      el.style.animation = 'none';
      requestAnimationFrame(() => {
        el.style.animation = 'shake 0.3s ease';
      });
    });
    return;
  }

  // Navigate to home
  Router.go('home');
}

// Register page
window.LoginPage = { render: renderLogin, handleLogin };

// Shake keyframe (injected once)
(function injectShakeStyle() {
  if (document.getElementById('shake-style')) return;
  const style = document.createElement('style');
  style.id = 'shake-style';
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%       { transform: translateX(-6px); }
      40%       { transform: translateX(6px); }
      60%       { transform: translateX(-4px); }
      80%       { transform: translateX(4px); }
    }
  `;
  document.head.appendChild(style);
})();
