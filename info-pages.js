// =============================================
//  info-pages.js - Secondary Yearbook Pages
// =============================================

const INFO_PAGES = {
  mygroup: {
    kicker: 'IT Circle',
    title: 'My Group',
    intro: 'A small space for the people you built projects with, studied beside, and survived deadlines with.',
    cards: [
      { title: 'Group Identity', text: 'Information Technology students with different strengths, one shared yearbook story.' },
      { title: 'Shared Work', text: 'Systems, reports, prototypes, documentation, and the little fixes nobody sees.' },
      { title: 'Class Bond', text: 'A group shaped by teamwork, patience, humor, and pressure.' },
    ],
  },
  emerging: {
    kicker: 'Technology Watch',
    title: 'Emerging Tech',
    intro: 'A quick look at the tools and ideas shaping the IT world our batch is stepping into.',
    cards: [
      { title: 'Artificial Intelligence', text: 'Smarter tools for coding, design, research, support, and everyday problem solving.' },
      { title: 'Cybersecurity', text: 'Protecting systems, accounts, networks, and data as digital life keeps expanding.' },
      { title: 'Cloud & Automation', text: 'Deploying faster, scaling cleaner, and reducing repetitive work through modern platforms.' },
      { title: 'Human-Centered Design', text: 'Building technology that people can actually understand, trust, and enjoy using.' },
    ],
  },
  memories: {
    kicker: 'Memory Lane',
    title: 'Memories',
    intro: 'The moments that made the school year feel real: stressful, funny, tiring, and worth remembering.',
    cards: [
      { title: 'Project Defense', text: 'Last-minute edits, nervous rehearsals, and the relief after answering the final question.' },
      { title: 'BITS Activities', text: 'Workshops and events that made technology feel like a community, not just a subject.' },
      { title: 'Class Photo Day', text: 'The day everyone paused long enough to become part of the same frame.' },
      { title: 'Quiet Wins', text: 'Fixed bugs, submitted files, passed activities, and classmates who helped without making noise about it.' },
    ],
  },
  gallery: {
    kicker: 'Class Gallery',
    title: 'Gallery',
    intro: 'A simple gallery wall for future photos. Add images later and this page can become the visual heart of the yearbook.',
    cards: [
      { title: 'Portraits', text: 'Individual student photos for each profile and card.' },
      { title: 'Group Photos', text: 'Class pictures, organization events, and team memories.' },
      { title: 'Project Moments', text: 'Screenshots, prototypes, booths, defenses, and behind-the-scenes work.' },
    ],
  },
  about: {
    kicker: 'About This Site',
    title: 'About',
    intro: 'This digital yearbook preserves the people, projects, organizations, and memories of the IT batch in one shared space.',
    cards: [
      { title: 'Purpose', text: 'To make the yearbook easy to explore, update, and remember beyond printed pages.' },
      { title: 'Built For IT', text: 'The content, profiles, memories, and tech sections are centered on Information Technology students.' },
      { title: 'Next Step', text: 'Add real photos, quotes, awards, and gallery images to make it feel fully personal.' },
    ],
  },
};

function renderInfoNavTabs(activeId) {
  return NAV_TABS.map(tab => `
    <a href="#" data-tab="${tab.id}" class="${tab.id === activeId ? 'active' : ''}"
      onclick="Router.go('${tab.id}'); return false;">
      ${tab.label}
    </a>
  `).join('');
}

function renderInfoCards(cards) {
  return cards.map(card => `
    <article class="info-page-card">
      <h2>${card.title}</h2>
      <p>${card.text}</p>
    </article>
  `).join('');
}

function renderInfoPage(pageId) {
  const page = INFO_PAGES[pageId] || INFO_PAGES.about;
  NAV_TABS.forEach(tab => tab.active = (tab.id === pageId));
  const theatreClass = pageId === 'gallery' ? ' gallery-theatre-page' : '';
  const theatreCurtains = pageId === 'gallery'
    ? `
      <div class="gallery-curtain-stage" aria-hidden="true">
        <div class="gallery-curtain gallery-curtain-left"></div>
        <div class="gallery-curtain gallery-curtain-right"></div>
      </div>
    `
    : '';

  return `
    <div class="page info-page${theatreClass} active">
      <nav class="navbar">
        ${renderUserMenu()}
        <ul class="navbar-links" id="home-nav-tabs">
          ${renderInfoNavTabs(pageId)}
        </ul>
        <div class="navbar-spacer" aria-hidden="true"></div>
      </nav>

      ${theatreCurtains}

      <main class="info-page-main">
        <section class="info-page-hero">
          <p class="home-kicker">${page.kicker}</p>
          <h1>${page.title}</h1>
          <p>${page.intro}</p>
        </section>

        <section class="info-page-grid">
          ${renderInfoCards(page.cards)}
        </section>
      </main>
    </div>
  `;
}

window.InfoPages = {
  render: renderInfoPage,
};
