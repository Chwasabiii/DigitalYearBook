// =============================================
// router.js — SINGLE SOURCE OF TRUTH
// =============================================

const Router = {
  async init() {
    let user = window.YearbookUser || null;

    if (window.SupabaseApp?.initializeAuth) {
      user = await window.SupabaseApp.initializeAuth();
    }

    this.go(user ? 'home' : 'landing');

    if (window.SupabaseApp?.onAuthStateChanged) {
      window.SupabaseApp.onAuthStateChanged(session => {
        const nextUser = session?.user || null;
        const isAuthPage = Router.currentPage === 'landing' || Router.currentPage === 'login' || Router.currentPage === 'signup';

        if (nextUser && isAuthPage) {
          Router.go('home');
        }

        if (!nextUser && !isAuthPage) {
          Router.go('landing');
        }
      });
    }
  },

  go(page, data) {
    const app = document.getElementById('app');
    if (!app) return;

    let html = '';
    Router.currentPage = page;

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

      case 'settings':
        html = renderSettingsPage();
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
    applyAppSettings();
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

// App settings state and persistence
const AppSettings = {
  showProfileCards: true,
  notificationsEnabled: false,
};

function loadAppSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem('yearbookSettings') || '{}');
    AppSettings.showProfileCards = saved.showProfileCards !== false;
    AppSettings.notificationsEnabled = Boolean(saved.notificationsEnabled);
  } catch (error) {
    console.warn('Failed to load settings:', error);
  }
}

function saveAppSettings() {
  localStorage.setItem('yearbookSettings', JSON.stringify(AppSettings));
}

function applyAppSettings() {
  document.body.classList.toggle('hide-profile-cards', !AppSettings.showProfileCards);

  const notificationBadge = document.querySelector('.notification-status');
  if (notificationBadge) {
    notificationBadge.textContent = AppSettings.notificationsEnabled ? 'Notifications enabled' : 'Notifications disabled';
  }
}

function toggleSetting(name, value) {
  if (!(name in AppSettings)) return;
  AppSettings[name] = value;
  saveAppSettings();
  applyAppSettings();
}

// Make navigate globally available
window.navigate = navigate;

function renderUserMenu() {
  const user = window.YearbookUser || {};
  const displayName = user.user_metadata?.full_name || user.email || 'Student';
  const subText = user.email ? user.email : 'Logged in user';

  return `
    <div class="navbar-menu-wrap">
      <button type="button" class="hamburger" aria-label="Open menu" onclick="toggleUserMenu(event)">
        <span></span><span></span><span></span>
      </button>
      <div class="user-menu" id="user-menu">
        <div class="user-menu-header">
          <div class="navbar-avatar" title="Profile"></div>
          <div>
            <strong>${displayName}</strong>
            <span>${subText}</span>
          </div>
        </div>
        <button type="button" onclick="Router.go('profile')">Profile</button>
        <button type="button" onclick="Router.go('settings')">Settings</button>
        <button type="button" onclick="logoutUser()">Logout</button>
      </div>
    </div>
  `;
}

function renderSettingsPage() {
  const user = window.YearbookUser || {};
  const displayName = user.user_metadata?.full_name || 'Digital Yearbook';
  const displayEmail = user.email || 'hello@digitalyearbook.dev';

  return `
    <div id="page-settings" class="page settings-page active">
      <div class="settings-inner">
        <div class="settings-header">
          <div>
            <p class="settings-kicker">SYSTEM SETTINGS</p>
            <h1>Make your yearbook workspace feel premium</h1>
            <p class="settings-intro">Customize account details, interface preferences, and security controls in one clean panel.</p>
          </div>
          <button type="button" class="settings-back-btn" onclick="Router.go('home')">Back to dashboard</button>
        </div>
        <div class="settings-grid">
        <aside class="settings-sidebar">
          <div class="settings-profile-card">
            <div class="settings-avatar"></div>
            <div>
              <strong>${displayName}</strong>
              <span>Student dashboard</span>
            </div>
          </div>
          <nav class="settings-menu">
            <button type="button" class="settings-tab active" data-section="account" onclick="switchSettingsTab('account')">Account</button>
            <button type="button" class="settings-tab" data-section="preferences" onclick="switchSettingsTab('preferences')">Preferences</button>
            <button type="button" class="settings-tab" data-section="security" onclick="switchSettingsTab('security')">Security</button>
          </nav>
        </aside>
        <div class="settings-content">
          <section id="settings-account" class="settings-panel active">
            <div class="settings-card">
              <h2>Account details</h2>
              <p>Manage your profile, campus identity, and display settings.</p>
              <div class="settings-field">
                <label>Name</label>
                <input type="text" value="${displayName}" readonly>
              </div>
              <div class="settings-field">
                <label>Email</label>
                <input type="text" value="${displayEmail}" readonly>
              </div>
              <div class="settings-field">
                <label>Current role</label>
                <input type="text" value="Yearbook Admin" readonly>
              </div>
            </div>
            <div class="settings-card settings-card-secondary">
              <h3>Connected workspace</h3>
              <p>Your student portal is linked to the yearbook experience and profile library.</p>
              <div class="settings-pill">IT Department</div>
              <div class="settings-pill">2026 Graduates</div>
            </div>
          </section>

          <section id="settings-preferences" class="settings-panel">
            <div class="settings-card">
              <h2>Interface preferences</h2>
              <p>Choose the look and behavior of the dashboard and login screens.</p>
              <div class="settings-toggle-row">
                <label>Show profile cards</label>
                <label class="toggle-switch">
                  <input type="checkbox" onchange="toggleSetting('showProfileCards', this.checked)" ${AppSettings.showProfileCards ? 'checked' : ''}>
                  <span class="slider"></span>
                </label>
              </div>
              <div class="settings-toggle-row">
                <label>Enable student notifications</label>
                <label class="toggle-switch">
                  <input type="checkbox" onchange="toggleSetting('notificationsEnabled', this.checked)" ${AppSettings.notificationsEnabled ? 'checked' : ''}>
                  <span class="slider"></span>
                </label>
              </div>
              <div class="notification-status">${AppSettings.notificationsEnabled ? 'Notifications enabled' : 'Notifications disabled'}</div>
            </div>
            <div class="settings-card settings-card-secondary">
              <h3>Theme accent</h3>
              <p>Keep everything aligned with the green yearbook dashboard palette.</p>
              <div class="theme-palette">
                <span class="palette-swatch active"></span>
                <span class="palette-swatch"></span>
                <span class="palette-swatch"></span>
              </div>
            </div>
          </section>

          <section id="settings-security" class="settings-panel">
            <div class="settings-card">
              <h2>Security options</h2>
              <p>Protect your account and secure the dashboard access.</p>
              <div class="settings-field">
                <label>Password</label>
                <input type="password" value="••••••••••••" readonly>
              </div>
              <div class="settings-toggle-row">
                <label>Two-factor authentication</label>
                <label class="toggle-switch">
                  <input type="checkbox">
                  <span class="slider"></span>
                </label>
              </div>
              <button type="button" class="settings-action-btn secondary">Update security</button>
            </div>
            <div class="settings-card settings-card-secondary">
              <h3>Privacy</h3>
              <p>Review what profile data is visible to other students.</p>
              <div class="settings-note">Only approved yearbook admins can edit student information.</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `;
}

function switchSettingsTab(sectionId) {
  document.querySelectorAll('.settings-tab').forEach(button => {
    button.classList.toggle('active', button.dataset.section === sectionId);
  });
  document.querySelectorAll('.settings-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `settings-${sectionId}`);
  });
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
  if (window.SupabaseApp?.signOutUser) {
    window.SupabaseApp.signOutUser().then(() => {
      Router.go('landing');
    });
    return;
  }
  Router.go('landing');
}

window.renderUserMenu = renderUserMenu;
window.toggleUserMenu = toggleUserMenu;
window.showSettingsPlaceholder = showSettingsPlaceholder;
window.logoutUser = logoutUser;

loadAppSettings();
document.addEventListener('click', closeUserMenu);
