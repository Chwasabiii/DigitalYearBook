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
          <button type="button" class="profile-view-btn" onclick="ProfilePage.openStudent(${student.id}); event.stopPropagation();">View Profile</button>
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
          <article class="student-detail-panel student-detail-message">
            <h2>Message From Classmates</h2>
            <p>${student.message}</p>
            <span>${student.socials}</span>
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
