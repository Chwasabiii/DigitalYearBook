// =============================================
//  home.js — Main Dashboard / Home Page
// =============================================

// Render navigation tabs for the navbar
function renderNavTabs() {
  return NAV_TABS.map(tab => `
    <a href="#" data-tab="${tab.id}" class="${tab.active ? 'active' : ''}"
      onclick="HomePage.setTab('${tab.id}'); return false;">
      ${tab.label}
    </a>
  `).join('');
}

// Student data — replace avatar paths with your images
const STUDENTS = [
  {
    id: 1,
    name: 'Julesjen Samonte',
    course: 'Computer Science',
    batch: '2025',
    badge: 'CS',
    badgeClass: 'badge-cs',
    code: 'PS · 2026',
    avatar: null,          // Replace: 'images/julesjen.jpg'
    initials: 'JS',
  },
  {
    id: 2,
    name: 'Christian Arganillo',
    course: 'Information Technology',
    batch: '2025',
    badge: 'IT',
    badgeClass: 'badge-it',
    code: 'IT · 3026',
    avatar: null,          // Replace: 'images/christian.jpg'
    initials: 'CA',
  },
  {
    id: 3,
    name: 'Carl Christian Batalla',
    course: 'Computer Engineering',
    batch: '2025',
    badge: 'ENG',
    badgeClass: 'badge-ce',
    code: 'ENG · 2026',
    avatar: null,
    initials: 'CB',
  },
  {
    id: 4,
    name: 'Charles Delfin',
    course: 'Data Science',
    batch: '2025',
    badge: 'DS',
    badgeClass: 'badge-ds',
    code: 'DS · 2026',
    avatar: null,
    initials: 'CD',
  },
  {
    id: 5,
    name: 'Prince Christian Basor',
    course: 'Network Technology',
    batch: '2025',
    badge: 'NT',
    badgeClass: 'badge-nt',
    code: 'NT · 2026',
    avatar: null,
    initials: 'PB',
  },
  {
    id: 6,
    name: 'Professor',
    course: 'Computer Science',
    batch: '2026',
    badge: 'SALUTATORIAN',
    badgeClass: 'badge-gold',
    code: '★',
    avatar: null,
    initials: 'PR',
    highlighted: true,
  },
];

const NAV_TABS = [
  { label: 'Home',           id: 'home',          active: true },
  { label: 'Profile',        id: 'profile',       active: false },
  { label: 'My Group',       id: 'mygroup',       active: false },
  { label: 'Organizations',  id: 'organizations', active: true },
  { label: 'Emerging Tech',  id: 'emerging',      active: false },
  { label: 'Memories',       id: 'memories',      active: false },
  { label: 'Gallery',        id: 'gallery',       active: false },
  { label: 'About',          id: 'about',         active: false },
];

function renderAvatar(student) {
  if (student.avatar) {
    return `<img src="${student.avatar}" alt="${student.name}" />`;
  }
  // Gradient colors per badge type for visual variety
  const colorMap = {
    'badge-cs': 'linear-gradient(135deg,#93c5fd,#3b82f6)',
    'badge-it': 'linear-gradient(135deg,#6ee7b7,#10b981)',
    'badge-ce': 'linear-gradient(135deg,#fcd34d,#f59e0b)',
    'badge-ds': 'linear-gradient(135deg,#c4b5fd,#8b5cf6)',
    'badge-nt': 'linear-gradient(135deg,#fbcfe8,#ec4899)',
    'badge-gold': 'linear-gradient(135deg,#fde68a,#f59e0b)',
  };
  const bg = colorMap[student.badgeClass] || 'linear-gradient(135deg,#93c5fd,#3b82f6)';
  return `<div class="student-avatar-placeholder" style="background:${bg}">${student.initials}</div>`;
}

function renderStudentCard(student) {
  return `
    <div class="student-card ${student.highlighted ? 'highlighted' : ''}">
      <span class="card-badge ${student.badgeClass}">${student.badge}</span>
      <div class="student-avatar">
        ${renderAvatar(student)}
      </div>
      <div class="student-name">${student.name}</div>
      <div class="student-info">${student.course} · Batch ${student.batch}</div>
    </div>
  `;
}

function setTab(tabId) {
  NAV_TABS.forEach(t => t.active = (t.id === tabId));
  const tabEls = document.querySelectorAll('#home-nav-tabs a');
  tabEls.forEach(el => {
    el.classList.toggle('active', el.dataset.tab === tabId);
  });

  const app = document.getElementById('app');

  // 🔥 SWITCH PAGES HERE
  if (tabId === 'home') {
    app.innerHTML = HomePage.render();
  }

  else if (tabId === 'organizations') {
    app.innerHTML = OrganizationsPage.render();
  }

  else {
    app.innerHTML = `
      <div style="padding:20px;">
        <h2>${tabId}</h2>
        <p>Page not implemented yet.</p>
      </div>
    `;
  }
}

function renderHome() {
  return `
    <div id="page-home" class="page home-page active">
      <!-- Navbar with tabs -->
      <nav class="navbar">
        <div class="hamburger" onclick="navigate('home')">
          <span></span><span></span><span></span>
        </div>
        <ul class="navbar-links" id="home-nav-tabs">
          ${renderNavTabs()}
        </ul>
        <div class="navbar-right">
          <button class="navbar-search" title="Search">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5"
              stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
          <div class="navbar-avatar" title="Profile">
            <!--
              TO ADD YOUR AVATAR:
              <img src="images/my-avatar.jpg" alt="My Profile" />
            -->
          </div>
        </div>
      </nav>

      <!-- Search bar -->
      <div class="search-bar-wrapper">
        <div class="search-bar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Search students..."
            id="student-search"
            oninput="HomePage.filterStudents(this.value)"
          />
        </div>
      </div>

      <!-- Student grid -->
      <div class="students-grid" id="students-grid">
        ${STUDENTS.map(renderStudentCard).join('')}
      </div>
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
  if (grid) {
    grid.innerHTML = filtered.length
      ? filtered.map(renderStudentCard).join('')
      : `<div style="grid-column:1/-1;text-align:center;color:var(--text-light);padding:40px;font-size:13px;">
           No students found.
         </div>`;
  }
}

function toggleMenu() {
  // Placeholder for mobile menu toggle
  console.log('Menu toggled');
}

// Register page
window.HomePage = {
  render: renderHome,
  setTab,
  filterStudents,
  toggleMenu,
};
