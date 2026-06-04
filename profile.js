// =============================================
//  profile.js - Profile Page
// =============================================

function renderProfileNavTabs() {
  return NAV_TABS.map(tab => `
    <a href="#" data-tab="${tab.id}" class="${tab.id === 'profile' ? 'active' : ''}"
      onclick="ProfilePage.setTab('${tab.id}'); return false;">
      ${tab.label}
    </a>
  `).join('');
}

function renderProfileAvatar(student) {
  if (student.avatar) {
    return `<img src="${student.avatar}" alt="${student.name}" />`;
  }

  return student.initials;
}

function renderProfilePhoto(student) {
  if (student.avatar) {
    return `<img src="${student.avatar}" alt="${student.name}" />`;
  }

  return `<span>${student.initials}</span>`;
}

function renderProfileCard(student) {
  return `
    <article class="profile-card ${student.highlighted ? 'profile-highlight' : ''}"
      onclick="ProfilePage.openStudent(${student.id})">
      <div class="profile-card-inner">
        <div class="profile-card-face profile-card-front">
          <span class="profile-badge ${student.profileBadgeClass}">${student.badge}</span>
          <div class="profile-avatar">${renderProfileAvatar(student)}</div>
          <h3>${student.name}</h3>
          <p>${student.course} &middot; Batch ${student.batch}</p>
          <div class="profile-card-actions">
            <button type="button" class="profile-view-btn" onclick="ProfilePage.openStudent(${student.id}); event.stopPropagation();">View Profile</button>
            ${student.portfolio ? `<a href="${student.portfolio}" target="_blank" rel="noopener noreferrer" class="profile-view-btn profile-portfolio-btn" title="Open digital portfolio" aria-label="Open ${student.name}'s digital portfolio" onclick="event.stopPropagation();">${renderPortfolioIcon()}</a>` : ''}
            ${student.github ? `<a href="${student.github}" target="_blank" rel="noopener noreferrer" class="profile-view-btn profile-github-btn" title="Open GitHub profile" aria-label="Open ${student.name}'s GitHub profile" onclick="event.stopPropagation();">${renderGithubIcon()}</a>` : ''}
          </div>
        </div>
        <div class="profile-card-face profile-card-back">
          <div class="profile-photo-preview">${renderProfilePhoto(student)}</div>
          <h3>${student.name}</h3>
          <p>${student.quote}</p>
        </div>
      </div>
    </article>
  `;
}

function renderDetailList(items) {
  return items.map(item => `<li>${item}</li>`).join('');
}

function renderPortfolioIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7"></path>
      <path d="M8 7h9v9"></path>
      <path d="M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"></path>
    </svg>
  `;
}

function renderGithubIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true" class="github-icon">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56v-2.01c-3.2.7-3.88-1.38-3.88-1.38-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18.92-.26 1.91-.38 2.89-.39.98.01 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.42-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.79.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"></path>
    </svg>
  `;
}

function getPortfolioHost(portfolioUrl) {
  try {
    return new URL(portfolioUrl).hostname;
  } catch (error) {
    return portfolioUrl;
  }
}

function renderPortfolioAction(student) {
  if (!student.portfolio) {
    return `
      <span class="portfolio-link portfolio-icon-link portfolio-link-disabled" title="Portfolio coming soon" aria-label="Portfolio coming soon">
        ${renderPortfolioIcon()}
      </span>
      <span>Portfolio link will be added here.</span>
    `;
  }

  return `
    <a href="${student.portfolio}" target="_blank" rel="noopener noreferrer" class="portfolio-link portfolio-icon-link" title="Open digital portfolio" aria-label="Open ${student.name}'s digital portfolio">
      ${renderPortfolioIcon()}
    </a>
    <span>${getPortfolioHost(student.portfolio)}</span>
  `;
}

function renderGithubAction(student) {
  if (!student.github) {
    return `
      <span class="profile-social-link profile-social-link-disabled" title="GitHub coming soon" aria-label="GitHub coming soon">
        ${renderGithubIcon()}
      </span>
    `;
  }

  return `
    <a href="${student.github}" target="_blank" rel="noopener noreferrer" class="profile-social-link" title="Open GitHub profile" aria-label="Open ${student.name}'s GitHub profile">
      ${renderGithubIcon()}
    </a>
  `;
}

function renderSocialHandle(student) {
  if (!student.facebook) {
    return `<span>${student.socials}</span>`;
  }

  return `
    <a href="${student.facebook}" target="_blank" rel="noopener noreferrer" class="student-social-handle" title="Open Facebook profile" aria-label="Open ${student.name}'s Facebook profile">
      ${student.socials}
    </a>
  `;
}

function getStudentById(studentId) {
  const id = Number(studentId);
  return STUDENTS.find(student => student.id === id) || STUDENTS[0];
}

function setProfileTab(tabId) {
  NAV_TABS.forEach(t => t.active = (t.id === tabId));

  if (tabId === 'profile') {
    return;
  }

  if (tabId === 'home' || tabId === 'organizations' || INFO_PAGES[tabId]) {
    Router.go(tabId);
    return;
  }

  const app = document.getElementById('app');
  app.innerHTML = `
    <div style="padding:20px;">
      <h2>${tabId}</h2>
      <p>Page not implemented yet.</p>
    </div>
  `;
}

function renderProfile() {
  NAV_TABS.forEach(t => t.active = (t.id === 'profile'));

  return `
    <div id="page-profile" class="page profile-page active">
      <nav class="navbar">
        ${renderUserMenu()}
        <ul class="navbar-links" id="home-nav-tabs">
          ${renderProfileNavTabs()}
        </ul>
        <div class="navbar-spacer" aria-hidden="true"></div>
      </nav>

      <main class="profile-main">
        <header class="profile-header">
          <p class="profile-kicker">Yearbook Profiles</p>
          <h1>Student Directory</h1>
        </header>

        <div class="profile-search-box">
          <input
            type="text"
            placeholder="Search profiles..."
            oninput="ProfilePage.filterProfiles(this.value)"
          />
        </div>

        <section class="profile-grid" id="profile-student-grid">
          ${STUDENTS.map(renderProfileCard).join('')}
        </section>
      </main>
    </div>
  `;
}

function renderStudentDetail(studentId) {
  const student = getStudentById(studentId);
  NAV_TABS.forEach(t => t.active = (t.id === 'profile'));

  return `
    <div id="page-student-profile" class="page profile-page active">
      <nav class="navbar">
        ${renderUserMenu()}
        <ul class="navbar-links" id="home-nav-tabs">
          ${renderProfileNavTabs()}
        </ul>
        <div class="navbar-spacer" aria-hidden="true"></div>
      </nav>

      <main class="student-detail-main">
        <button type="button" class="student-back-btn" onclick="Router.go('profile')">Back to Profiles</button>

        <section class="student-detail-hero">
          <div class="student-detail-avatar">${renderProfileAvatar(student)}</div>
          <div>
            <span class="profile-badge ${student.profileBadgeClass}">${student.badge}</span>
            <h1>${student.name}</h1>
            <p>${student.course} &middot; Batch ${student.batch}</p>
            <blockquote>${student.quote}</blockquote>
          </div>
        </section>

        <section class="student-detail-grid">
          <article class="student-detail-panel">
            <h2>Hobbies</h2>
            <ul>${renderDetailList(student.hobbies)}</ul>
          </article>
          <article class="student-detail-panel">
            <h2>Achievements</h2>
            <ul>${renderDetailList(student.achievements)}</ul>
          </article>
          <article class="student-detail-panel">
            <h2>Favorite Memories</h2>
            <ul>${renderDetailList(student.memories)}</ul>
          </article>
          <article class="student-detail-panel student-detail-portfolio">
            <h2>Digital Portfolio</h2>
            <p>${renderPortfolioAction(student)}</p>
          </article>
          <article class="student-detail-panel student-detail-message">
            <h2>Message From Classmates</h2>
            <p>${student.message}</p>
            <div class="student-social-row">
              ${renderSocialHandle(student)}
              ${renderGithubAction(student)}
            </div>
          </article>
        </section>
      </main>
    </div>
  `;
}

function filterProfiles(query) {
  const q = query.toLowerCase();
  const filtered = STUDENTS.filter(student =>
    student.name.toLowerCase().includes(q) ||
    student.course.toLowerCase().includes(q) ||
    student.batch.includes(q)
  );

  const grid = document.getElementById('profile-student-grid');
  if (!grid) return;

  grid.innerHTML = filtered.length
    ? filtered.map(renderProfileCard).join('')
    : `<div class="profile-empty">No profiles found.</div>`;
}

function openStudent(studentId) {
  Router.go('student', studentId);
}

window.ProfilePage = {
  render: renderProfile,
  renderStudentDetail,
  setTab: setProfileTab,
  filterProfiles,
  openStudent,
};
