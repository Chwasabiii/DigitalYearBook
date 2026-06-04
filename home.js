// =============================================
//  home.js - Main Dashboard / Home Page
// =============================================

function renderHomeNavTabs() {
  return NAV_TABS.map(tab => `
    <a href="#" data-tab="${tab.id}" class="${tab.active ? 'active' : ''}"
      onclick="HomePage.setTab('${tab.id}'); return false;">
      ${tab.label}
    </a>
  `).join('');
}

const NAV_TABS = [
  { label: 'Home',           id: 'home',          active: true },
  { label: 'Profile',        id: 'profile',       active: false },
  { label: 'My Group',       id: 'mygroup',       active: false },
  { label: 'Organizations',  id: 'organizations', active: false },
  { label: 'Emerging Tech',  id: 'emerging',      active: false },
  { label: 'Gallery',        id: 'gallery',       active: false },
  { label: 'About',          id: 'about',         active: false },
];

function renderAvatar(student) {
  if (student.avatar) {
    return `<img src="${student.avatar}" alt="${student.name}" />`;
  }

  const colorMap = {
    'badge-cs': 'linear-gradient(135deg,#b9c8a8,#5f7f55)',
    'badge-it': 'linear-gradient(135deg,#dfe7d2,#476b3f)',
    'badge-ce': 'linear-gradient(135deg,#ecd9a8,#c59a46)',
    'badge-ds': 'linear-gradient(135deg,#c8d0c7,#44584d)',
    'badge-nt': 'linear-gradient(135deg,#cbd8b8,#536c43)',
    'badge-gold': 'linear-gradient(135deg,#f0d98f,#c59a46)',
  };
  const bg = colorMap[student.badgeClass] || 'linear-gradient(135deg,#b9c8a8,#5f7f55)';
  return `<div class="student-avatar-placeholder" style="background:${bg}">${student.initials}</div>`;
}

function renderStudentCard(student) {
  return `
    <button type="button" class="student-card ${student.highlighted ? 'highlighted' : ''}"
      onclick="HomePage.openStudentProfile(${student.id})">
      <span class="card-badge ${student.badgeClass}">${student.badge}</span>
      <div class="student-avatar">
        ${renderAvatar(student)}
      </div>
      <div class="student-name">${student.name}</div>
      <div class="student-info">${student.course} &middot; Batch ${student.batch}</div>
    </button>
  `;
}

const HOME_MEMORIES = [
  {
    title: 'First project defense',
    text: 'The day ideas became working systems and every team learned what pressure can teach.',
  },
  {
    title: 'BITS workshop',
    text: 'A shared room of questions, code, notes, and classmates helping classmates.',
  },
  {
    title: 'Class photo day',
    text: 'One pause in the semester to keep the faces, fits, and friendships in frame.',
  },
  {
    title: 'Graduation prep',
    text: 'The slow realization that the ordinary days were becoming the memories.',
  },
];

const HOME_GALLERY_PREVIEW = [
  { label: 'Class Portraits', detail: 'Profile-ready photos' },
  { label: 'Project Days', detail: 'Builds, demos, and defenses' },
  { label: 'BITS Moments', detail: 'Workshops and org events' },
  { label: 'Candid Frames', detail: 'The in-between memories' },
];

function getHomeGalleryPreviewItems() {
  if (typeof INFO_PAGES !== 'undefined' && INFO_PAGES.gallery) {
    const galleryPhotos = INFO_PAGES.gallery.cards.flatMap(card =>
      (card.photos || []).map(photo => ({
        label: photo.caption || card.title,
        detail: card.text || card.label,
        src: photo.src,
      }))
    );
    if (galleryPhotos.length) {
      return galleryPhotos.slice(0, 4);
    }
  }
  return HOME_GALLERY_PREVIEW;
}

function getCourseGroups() {
  return [...new Set(STUDENTS.map(student => student.course))];
}

function getFeaturedStudent() {
  return STUDENTS.find(student => student.highlighted) || STUDENTS[0];
}

function renderStatCards() {
  const courses = getCourseGroups();
  const highlighted = getFeaturedStudent();

  return [
    { value: '2026', label: 'Yearbook Batch' },
    { value: STUDENTS.length, label: 'Profiles' },
    { value: courses.length, label: 'Course Groups' },
    { value: highlighted.badge, label: 'Featured Honor' },
  ].map(stat => `
    <div class="home-stat">
      <strong>${stat.value}</strong>
      <span>${stat.label}</span>
    </div>
  `).join('');
}

function renderMemoryItems() {
  return HOME_MEMORIES.map(memory => `
    <article class="home-memory">
      <span></span>
      <div>
        <h3>${memory.title}</h3>
        <p>${memory.text}</p>
      </div>
    </article>
  `).join('');
}

function renderGalleryPreview() {
  const previewItems = getHomeGalleryPreviewItems();
  return previewItems.map((item, index) => {
    const hasImage = item.src;
    const tileStyle = hasImage
      ? `style="background-image: url('${item.src}'); background-size: cover; background-position: center;"`
      : '';
    return `
    <button type="button" class="home-gallery-tile home-gallery-tile-${index + 1}" ${tileStyle} onclick="Router.go('gallery')">
      <span>${item.label}</span>
      <strong>${item.detail}</strong>
    </button>
  `;
  }).join('');
}

function renderCourseGroups() {
  return getCourseGroups().map(course => {
    const count = STUDENTS.filter(student => student.course === course).length;
    return `
      <button type="button" class="home-course" onclick="Router.go('profile')">
        <strong>${course}</strong>
        <span>${count} ${count === 1 ? 'profile' : 'profiles'}</span>
      </button>
    `;
  }).join('');
}

function setTab(tabId) {
  NAV_TABS.forEach(t => t.active = (t.id === tabId));
  const tabEls = document.querySelectorAll('#home-nav-tabs a');
  tabEls.forEach(el => {
    el.classList.toggle('active', el.dataset.tab === tabId);
  });

  if (tabId === 'home') {
    return;
  }
  if (tabId === 'profile' || tabId === 'organizations' || INFO_PAGES[tabId]) {
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

function renderHome() {
  const featuredStudent = getFeaturedStudent();
  const previewStudents = STUDENTS.slice(0, 3);

  return `
    <div id="page-home" class="page home-page active">
      <nav class="navbar">
        ${renderUserMenu()}
        <ul class="navbar-links" id="home-nav-tabs">
          ${renderHomeNavTabs()}
        </ul>
        <div class="navbar-spacer" aria-hidden="true"></div>
      </nav>

      <main class="home-main">
        <section class="home-hero">
          <div class="home-hero-copy">
            <p class="home-kicker">Digital Yearbook</p>
            <h1>People, projects, and moments worth keeping.</h1>
            <p>A living keepsake for the classmates, mentors, organizations, and small victories that shaped the year.</p>
            <div class="home-actions">
              <button type="button" class="home-primary-btn" onclick="Router.go('profile')">View Profiles</button>
              <button type="button" class="home-secondary-btn" onclick="Router.go('organizations')">Explore BITS</button>
            </div>
          </div>
          <div class="home-feature-card">
            <span class="card-badge ${featuredStudent.badgeClass}">${featuredStudent.badge}</span>
            <div class="student-avatar home-feature-avatar">
              ${renderAvatar(featuredStudent)}
            </div>
            <h2>${featuredStudent.name}</h2>
            <p>${featuredStudent.quote}</p>
            <button type="button" class="profile-view-btn" onclick="HomePage.openStudentProfile(${featuredStudent.id})">View Profile</button>
          </div>
        </section>

        <section class="home-stats" aria-label="Class snapshot">
          ${renderStatCards()}
        </section>

        <section class="home-section">
          <div class="home-section-heading">
            <div>
              <p class="home-kicker">Memory Lane</p>
              <h2>Recent memories</h2>
            </div>
            <button type="button" class="home-secondary-btn" onclick="Router.go('gallery')">View Memories</button>
          </div>
          <div class="home-memory-list">
            ${renderMemoryItems()}
          </div>
        </section>

        <section class="home-section">
          <div class="home-section-heading">
            <div>
              <p class="home-kicker">Gallery Preview</p>
              <h2>Frames from the year</h2>
            </div>
            <button type="button" class="home-secondary-btn" onclick="Router.go('gallery')">Open Gallery</button>
          </div>
          <div class="home-gallery-preview">
            ${renderGalleryPreview()}
          </div>
        </section>

        <section class="home-section home-split">
          <div>
            <p class="home-kicker">Course Groups</p>
            <h2>Find classmates by program</h2>
          </div>
          <div class="home-course-grid">
            ${renderCourseGroups()}
          </div>
        </section>

        <section class="home-section">
          <div class="home-section-heading">
            <div>
              <p class="home-kicker">Profile Preview</p>
              <h2>Meet the class</h2>
            </div>
            <button type="button" class="home-secondary-btn" onclick="Router.go('profile')">View All</button>
          </div>
          <div class="students-grid home-preview-grid">
            ${previewStudents.map(renderStudentCard).join('')}
          </div>
        </section>
      </main>
    </div>
  `;
}

function filterStudents(query) {
  const q = query.toLowerCase();
  const filtered = STUDENTS.filter(s =>
    s.name.toLowerCase().includes(q) ||
    s.course.toLowerCase().includes(q) ||
    s.batch.includes(q)
  );
  const grid = document.getElementById('students-grid');
  if (!grid) return;

  grid.innerHTML = filtered.length
    ? filtered.map(renderStudentCard).join('')
    : `<div style="grid-column:1/-1;text-align:center;color:var(--text-light);padding:40px;font-size:13px;">
         No students found.
       </div>`;
}

function toggleMenu() {
  console.log('Menu toggled');
}

function openStudentProfile(studentId) {
  Router.go('student', studentId);
}

window.HomePage = {
  render: renderHome,
  setTab,
  filterStudents,
  toggleMenu,
  openStudentProfile,
};
