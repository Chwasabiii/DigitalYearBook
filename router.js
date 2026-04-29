// =============================================
//  router.js — Simple SPA Router
// =============================================

const PAGES = {
  landing: window.LandingPage,
  login:   window.LoginPage,
  signup:  window.SignupPage,
  home:    window.HomePage,
};

const Router = {
  current: null,

  init() {
    const app = document.getElementById('app');
    // Render all pages into the DOM
    app.innerHTML =
      LandingPage.render() +
      LoginPage.render() +
      SignupPage.render() +
      HomePage.render();

    // Start on landing
    this.go('landing');
  },

  go(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));

    // Show target page
    const target = document.getElementById(`page-${page}`);
    if (target) {
      target.classList.add('active');
      this.current = page;
    }
  },
};

// Boot
window.Router = Router;
document.addEventListener('DOMContentLoaded', () => Router.init());
