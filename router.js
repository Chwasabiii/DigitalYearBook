// =============================================
// router.js — SINGLE SOURCE OF TRUTH
// =============================================

const Router = {
  init() {
    this.go('landing');
  },

  go(page, data) {
    const app = document.getElementById('app');
    if (!app) return;

    let html = '';

    // Update body class for theme
    document.body.classList.remove('theme-dark');
    if (page === 'organizations') {
      document.body.classList.add('theme-dark');
    }

    switch (page) {
      case 'landing':
        html = LandingPage.render();
        break;

      case 'login':
        html = LoginPage.render();
        break;

      case 'signup':
        html = SignupPage.render();
        break;

      case 'home':
        html = HomePage.render();
        break;

      case 'profile':
        html = ProfilePage.render();
        break;

      case 'student':
        html = ProfilePage.renderStudentDetail(data);
        break;

      case 'organizations':
        html = OrganizationsPage.render();
        break;

      case 'mygroup':
      case 'emerging':
      case 'memories':
      case 'gallery':
      case 'about':
        html = InfoPages.render(page);
        break;

      default:
        html = `<div style="padding:20px;">Page not found</div>`;
    }

    app.innerHTML = html;
  }
};

// Register globally
window.Router = Router;

document.addEventListener('DOMContentLoaded', () => {
  Router.init();
});

// helper for onclick usage
function navigate(page) {
  Router.go(page);
}

// Make navigate globally available
window.navigate = navigate;

function renderUserMenu() {
  return `
    <div class="navbar-menu-wrap">
      <button type="button" class="hamburger" aria-label="Open menu" onclick="toggleUserMenu(event)">
        <span></span><span></span><span></span>
      </button>
      <div class="user-menu" id="user-menu">
        <div class="user-menu-header">
          <div class="navbar-avatar" title="Profile"></div>
          <div>
            <strong>My Account</strong>
            <span>Information Technology</span>
          </div>
        </div>
        <button type="button" onclick="Router.go('profile')">Profile</button>
        <button type="button" onclick="showSettingsPlaceholder()">Settings</button>
        <button type="button" onclick="logoutUser()">Logout</button>
      </div>
    </div>
  `;
}

function toggleUserMenu(event) {
  event.stopPropagation();
  const menu = document.getElementById('user-menu');
  if (menu) {
    menu.classList.toggle('open');
  }
}

function closeUserMenu() {
  const menu = document.getElementById('user-menu');
  if (menu) {
    menu.classList.remove('open');
  }
}

function showSettingsPlaceholder() {
  closeUserMenu();
  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = `
    <div style="padding:20px;">
      <h2>Settings</h2>
      <p>Settings page not implemented yet.</p>
    </div>
  `;
}

function logoutUser() {
  closeUserMenu();
  Router.go('landing');
}

window.renderUserMenu = renderUserMenu;
window.toggleUserMenu = toggleUserMenu;
window.showSettingsPlaceholder = showSettingsPlaceholder;
window.logoutUser = logoutUser;

document.addEventListener('click', closeUserMenu);
