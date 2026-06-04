// =============================================
//  landing.js — Landing / Hero Page
// =============================================

function renderLanding() {
  return `
    <div id="page-landing" class="page active">
      <!-- Navbar -->
      <nav class="navbar">
        <span class="navbar-brand">Yearbook 2026</span>
        <div class="navbar-right">
          <a href="#" class="contact-link" onclick="Router.go('home'); return false;">GET STARTED</a>
        </div>
      </nav>

      <!-- Hero -->
      <div class="hero-wrapper">
        <div class="hero-bg-placeholder">
        </div>

        <div class="hero-overlay">
          <!-- Book Icon -->
          <div class="book-icon">
            <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Left page -->
              <path d="M10 10 C10 10 45 8 48 10 L48 68 C48 68 14 65 10 68 Z"
                fill="rgba(255,255,255,0.85)" stroke="rgba(26,35,50,0.3)" stroke-width="1.5"/>
              <!-- Right page -->
              <path d="M90 10 C90 10 55 8 52 10 L52 68 C52 68 86 65 90 68 Z"
                fill="rgba(255,255,255,0.85)" stroke="rgba(26,35,50,0.3)" stroke-width="1.5"/>
              <!-- Spine -->
              <rect x="47" y="8" width="6" height="62" rx="1"
                fill="rgba(200,220,235,0.9)"/>
              <!-- Bookmark ribbon -->
              <path d="M74 6 L82 6 L82 26 L78 22 L74 26 Z"
                fill="#4a9edd"/>
              <!-- Left lines -->
              <line x1="16" y1="22" x2="44" y2="21" stroke="rgba(100,130,160,0.4)" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="16" y1="30" x2="44" y2="29" stroke="rgba(100,130,160,0.4)" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="16" y1="38" x2="44" y2="37" stroke="rgba(100,130,160,0.4)" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="16" y1="46" x2="44" y2="45" stroke="rgba(100,130,160,0.4)" stroke-width="1.5" stroke-linecap="round"/>
              <!-- Right lines -->
              <line x1="56" y1="22" x2="84" y2="21" stroke="rgba(100,130,160,0.4)" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="56" y1="30" x2="84" y2="29" stroke="rgba(100,130,160,0.4)" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="56" y1="38" x2="84" y2="37" stroke="rgba(100,130,160,0.4)" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>

          <p class="hero-title fade-up" style="animation-delay:0.1s">STUDENT YEARBOOK</p>
          <h1 class="hero-heading fade-up" style="animation-delay:0.2s">WELCOME!</h1>
          <button class="btn-explore fade-up" style="animation-delay:0.35s"
            onclick="Router.go('login')">
            Explore
          </button>
        </div>
      </div>

      <footer class="page-footer">
        <div class="footer-inner">
          <div class="footer-brand">
            <strong>Yearbook 2026</strong>
            <span>Built for students, styled for IT.</span>
          </div>
          <div class="footer-links">
            <a href="#" onclick="Router.go('home'); return false;">Dashboard</a>
            <a href="#" onclick="Router.go('login'); return false;">Sign In</a>
            <a href="#" onclick="Router.go('about'); return false;">About</a>
          </div>
        </div>
      </footer>
    </div>
  `;
}

// Register page
window.LandingPage = { render: renderLanding };
