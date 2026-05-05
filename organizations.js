// =============================================
// organizations.js — Organizations Page
// =============================================

function renderOrganizationsNavTabs() {
  return NAV_TABS.map(tab => `
    <a href="#" data-tab="${tab.id}" class="${tab.active ? 'active' : ''}"
      onclick="OrganizationsPage.setTab('${tab.id}'); return false;">
      ${tab.label}
    </a>
  `).join('');
}

function setTab(tabId) {
  NAV_TABS.forEach(t => t.active = (t.id === tabId));
  const tabEls = document.querySelectorAll('#home-nav-tabs a');
  tabEls.forEach(el => {
    el.classList.toggle('active', el.dataset.tab === tabId);
  });

  // Use Router for page switching
  if (tabId === 'home') {
    Router.go('home');
  }
  else if (tabId === 'profile') {
    Router.go('profile');
  }
  else if (tabId === 'organizations') {
    // Already on organizations page, just update active states
    return;
  }
  else if (INFO_PAGES[tabId]) {
    Router.go(tabId);
  }
  else {
    // For unimplemented pages, show placeholder
    const app = document.getElementById('app');
    app.innerHTML = `
      <div style="padding:20px;">
        <h2>${tabId}</h2>
        <p>Page not implemented yet.</p>
      </div>
    `;
  }
}

function renderOrganizations() {
  return `
    <div class="page-shell">
      <!-- Navbar with tabs -->
      <nav class="navbar">
        ${renderUserMenu()}
        <ul class="navbar-links" id="home-nav-tabs">
          ${renderOrganizationsNavTabs()}
        </ul>
        <div class="navbar-spacer" aria-hidden="true"></div>
      </nav>

      <header class="hero" style="position:relative; min-height:320px;">
        <img src="bits.jpg" alt="BITS Banner" class="hero-banner-img" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;z-index:0;opacity:0.92;" />
        <div class="hero-overlay"></div>
        <div class="hero-content" style="position:relative;z-index:1;">
          <p class="eyebrow">CVSU Imus Branch</p>
          <h1>Builders of Innovative Technologist Society</h1>
          <p class="tagline">Empowering students through technology, innovation, and community impact.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#about">Learn More</a>
          </div>
        </div>
      </header>

      <main>
        <section id="about" class="section section-light">
          <h2>About BITS</h2>
          <div class="section-grid">
            <div>
              <p>The Builders of Innovative Technologist Society (BITS) – CvSU Imus is a prominent student organization at Cavite State University Imus Campus focused on technology, innovation, and computing. BITS represents students in technology-related fields, especially those in the Bachelor of Science in Computer Science and Information Technology programs.</p>
              <p>BITS empowers learners through collaboration, research, and technical leadership while promoting innovation and community impact across the CvSU Imus campus.</p>
            </div>
            <div class="section-info">
              <ul class="info-list">
                <li><span class="info-icon">⦿</span><strong>Type:</strong> Student organization</li>
                <li><span class="info-icon">⦿</span><strong>Members:</strong> IT and CS students</li>
                <li><span class="info-icon">⦿</span><strong>Location:</strong> Cavite State University - Imus</li>
                <li><span class="info-icon">⦿</span><strong>Focus:</strong> Technology, innovation, professional growth</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="section section-light">
          <h2>History & Recognition</h2>
          <div class="section-grid">
            <div>
              <p>CvSU Imus began in 2003 as the College of Business and Entrepreneurship and later became a satellite campus in 2012. The campus was established on land originally intended for the Cavite Convention and Trade Center.</p>
              <p>In March 2026, BITS was officially recognized by the City Government of Imus under the Local Youth Development Office, marking its growth from a campus organization to a recognized city-level youth organization.</p>
            </div>
            <div class="section-info">
              <ul class="info-list">
                <li><span class="info-icon">⦿</span><strong>Established:</strong> 2003, satellite campus since 2012</li>
                <li><span class="info-icon">⦿</span><strong>Recognition:</strong> March 2026 city-level youth organization</li>
                <li><span class="info-icon">⦿</span><strong>Programs:</strong> BS Computer Science, IT, teacher education</li>
                <li><span class="info-icon">⦿</span><strong>Campus:</strong> 5-storey building with gymnasium</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="section section-dark">
          <div class="section-grid reverse">
            <div>
              <h2>Mission</h2>
              <p>To cultivate a community of proactive technologists who build solutions, lead projects, and inspire others through innovation, creativity, and academic excellence.</p>
            </div>
            <div>
              <h2>Vision</h2>
              <p>To become the premier student society in CVSU Imus for technology-driven learning, partnerships, competitions, and social impact.</p>
            </div>
          </div>
        </section>

        <section class="section section-light">
          <h2>Programs & Activities</h2>
          <div class="cards-row">
            <article class="card">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h10M4 18h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </div>
              <h3>Workshops & Trainings</h3>
              <p>Hands-on sessions for programming, web development, robotics, and emerging technologies.</p>
            </article>
            <article class="card">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 22V12l8-8v18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <h3>Competitions</h3>
              <p>Technical challenges in coding, system design, game dev, and innovation fairs.</p>
            </article>
            <article class="card">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16M4 16h8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </div>
              <h3>Community Projects</h3>
              <p>Service initiatives and campus outreach that apply IT skills for real-world benefit.</p>
            </article>
          </div>
        </section>

        <section class="section section-gradient" id="events">
          <div class="section-center">
            <h2>Signature Events</h2>
            <ul class="event-list">
              <li><span>Tech Expo:</span> Showcase student-built systems and software solutions.</li>
              <li><span>Innovation Hackathon:</span> Team challenges to solve campus and community problems.</li>
              <li><span>Leadership Summit:</span> Talks on career readiness, entrepreneurship, and IT trends.</li>
            </ul>
          </div>
        </section>

        <section class="section section-light" id="contact">
          <div class="section-grid">
            <div>
              <h2>Learn More</h2>
              <p>Find the details about BITS CVSU Imus, its activities, mission, and how it supports IT students across campus.</p>
              <p class="contact-note">For membership questions or organization details, contact the group email or your IT department adviser.</p>
            </div>
            <div class="contact-card">
              <p><strong>Email:</strong> bits.cvsumail@example.com</p>
              <p><strong>Facebook:</strong> facebook.com/groups/bits.cvsumus</p>
              <p><strong>Branch:</strong> CVSU Imus</p>
            </div>
          </div>
        </section>
      </main>

      <footer class="footer">
        <p>Builders of Innovative Technologist Society • CVSU Imus</p>
      </footer>
    </div>
  `;
}

// Register page
window.OrganizationsPage = {
  render: renderOrganizations,
  setTab,
};
