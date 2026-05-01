// =============================================
// router.js — SINGLE SOURCE OF TRUTH
// =============================================

const Router = {
  init() {
    this.go('landing');
  },

  go(page) {
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

      case 'organizations':
        html = OrganizationsPage.render();
        break;

      default:
        html = `<div style="padding:20px;">Page not found</div>`;
    }

    app.innerHTML = html;
  }
};

window.Router = Router;

document.addEventListener('DOMContentLoaded', () => {
  Router.init();
});

// helper for onclick usage
function navigate(page) {
  Router.go(page);
}