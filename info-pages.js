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
    intro: 'A quick look at the tools, systems, and ideas shaping the IT world our batch is stepping into.',
    heroImage: 'images/bits.jpg',
    cards: [
      {
        title: 'Artificial Intelligence',
        tag: 'Build',
        signal: 'High impact',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Circuit board close-up representing artificial intelligence systems',
        text: 'Smarter tools for coding, analysis, content generation, and automating routine tasks across domains.',
        detail: 'AI turns data, language, images, and behavior patterns into systems that can assist, predict, classify, generate, and automate. For IT students, it is one of the fastest ways to prototype useful software, but the best results still come from clear problem framing, good data, and careful evaluation.',
        uses: ['Coding assistants and debugging support', 'Chatbots for school or business services', 'Data analysis, summaries, and recommendations'],
        skills: ['Python basics', 'Prompt design', 'Data quality', 'Model evaluation'],
        watch: 'Do not treat AI output as automatically correct. Check sources, test edge cases, and protect private data.',
        starter: 'Build a small chatbot that answers questions from a controlled class FAQ or yearbook dataset.'
      },
      {
        title: 'Autonomous Vehicles',
        tag: 'Mobility',
        signal: 'Systems heavy',
        image: 'https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Modern vehicle interior and dashboard technology',
        text: 'Self-driving cars, delivery drones, and autonomous robots combining sensors, ML, and safety systems for real-world mobility.',
        detail: 'Autonomous mobility is not just cars. It includes drones, warehouse robots, mapping systems, route planning, driver assistance, and traffic intelligence. The hard part is making software understand messy real-world conditions quickly and safely.',
        uses: ['Driver-assistance and collision alerts', 'Delivery drones and warehouse robots', 'Smart traffic and fleet monitoring'],
        skills: ['Computer vision', 'Sensor data', 'Embedded systems', 'Safety testing'],
        watch: 'A demo can look impressive while still failing in rare conditions. Safety, regulation, and accountability matter as much as code.',
        starter: 'Prototype a browser-based object detection demo or a route-planning simulation.'
      },
      {
        title: 'Renewable Energy Tech',
        tag: 'Sustainability',
        signal: 'Infrastructure',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Solar panels under a clear sky',
        text: 'Advances in solar, battery storage, green hydrogen, and smart grid tech that make power cleaner and more reliable.',
        detail: 'Clean energy needs software to forecast demand, monitor hardware, balance batteries, detect faults, and visualize usage. IT skills help turn solar panels, sensors, meters, and grid data into decisions people can actually use.',
        uses: ['Energy dashboards for homes or campuses', 'Battery and solar panel monitoring', 'Forecasting tools for demand and generation'],
        skills: ['IoT monitoring', 'Analytics dashboards', 'Forecasting', 'Infrastructure security'],
        watch: 'Energy data can affect safety and cost. Systems need reliable alerts, clear charts, and secure device access.',
        starter: 'Create a dashboard that tracks simulated electricity use and recommends peak-hour savings.'
      },
      {
        title: 'Blockchain & Web3',
        tag: 'Trust',
        signal: 'Experimental',
        image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Digital crypto and blockchain visualization',
        text: 'Decentralized ledgers, smart contracts, and token-based systems reshaping ownership, identity, and marketplaces.',
        detail: 'Blockchain is a shared record system where many computers agree on transactions without a single central owner. It can support smart contracts, digital ownership, traceability, and identity experiments, but it is not the answer to every database problem.',
        uses: ['Smart contracts for automated agreements', 'Supply-chain traceability records', 'Digital identity or ownership proofs'],
        skills: ['Cryptography basics', 'Smart contracts', 'Wallet UX', 'Security review'],
        watch: 'Use it only when decentralization is truly needed. Poor wallet design and insecure contracts can create serious user harm.',
        starter: 'Map a simple smart-contract flow on paper, then compare it with a normal database design.'
      },
      {
        title: 'Robotics & Automation',
        tag: 'Industry',
        signal: 'Hands-on',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'White robot standing in a technology lab',
        text: 'Collaborative robots, process automation, and smart factories accelerating manufacturing and logistics.',
        detail: 'Automation connects software decisions to real actions: moving items, testing parts, processing files, routing requests, or coordinating machines. Good automation removes repetitive work while keeping humans in control of exceptions.',
        uses: ['Office workflow automation', 'Warehouse and factory task routing', 'Testing scripts and quality checks'],
        skills: ['Control logic', 'Scripting', 'Sensors', 'Process mapping'],
        watch: 'Automating a bad process can make mistakes faster. Document the workflow first, then automate the stable parts.',
        starter: 'Automate a repeated school task, such as sorting submissions or generating status reports.'
      },
      {
        title: 'Biotechnology & Gene Editing',
        tag: 'Science',
        signal: 'Data-rich',
        image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Scientist working in a biotechnology laboratory',
        text: 'CRISPR, gene therapies, and bioinformatics enabling precise medicine and synthetic biology breakthroughs.',
        detail: 'Modern biotechnology runs on data: lab records, genetic sequences, medical images, simulations, and research pipelines. IT students can support this field through databases, visualization, privacy-aware systems, and tools that help researchers make sense of complex results.',
        uses: ['Bioinformatics dashboards', 'Lab sample tracking systems', 'Medical data visualization'],
        skills: ['Databases', 'Data visualization', 'Privacy basics', 'Research software'],
        watch: 'Health and genetic data are sensitive. Accuracy, consent, and privacy protection are non-negotiable.',
        starter: 'Design a mock dashboard that visualizes anonymized lab sample status and trends.'
      },
      {
        title: 'Extended Reality (XR)',
        tag: 'Interface',
        signal: 'Immersive',
        image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Person wearing a virtual reality headset',
        text: 'AR/VR/MR platforms blending physical and digital worlds for immersive learning, design, and collaboration.',
        detail: 'XR changes the interface from flat screens to spaces people can move through. It can make training, product previews, campus tours, games, and design reviews more memorable when the experience has a clear purpose.',
        uses: ['Virtual classrooms and simulations', 'AR product or campus previews', '3D collaboration and design review'],
        skills: ['3D interfaces', 'Interaction design', 'Performance tuning', 'Accessibility'],
        watch: 'Immersion is not automatically better. Comfort, navigation, motion sickness, and device limits shape the experience.',
        starter: 'Build a simple 3D scene that labels rooms, objects, or yearbook memories in space.'
      },
      {
        title: 'Cybersecurity',
        tag: 'Defense',
        signal: 'Always needed',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Computer security code and digital lock concept',
        text: 'Defensive engineering, threat detection, and secure-by-design practices that protect users and services.',
        detail: 'Cybersecurity protects accounts, networks, applications, and data from misuse. It is not only about hackers; it is also about secure defaults, backups, monitoring, permissions, and helping users avoid preventable mistakes.',
        uses: ['Login and account protection', 'Network monitoring and alerts', 'Secure coding and vulnerability testing'],
        skills: ['Authentication', 'Secure coding', 'Network basics', 'Threat modeling'],
        watch: 'Security cannot be an afterthought. Every feature that stores data or accepts input needs a basic threat check.',
        starter: 'Review a login page and list the risks: weak passwords, missing validation, exposed data, and session handling.'
      },
      {
        title: 'Cloud & Automation',
        tag: 'Delivery',
        signal: 'Production core',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Earth and network lights representing cloud infrastructure',
        text: 'Scalable cloud platforms, infrastructure-as-code, and CI/CD pipelines that speed delivery and reduce ops friction.',
        detail: 'Cloud platforms help teams ship apps, store data, run APIs, schedule jobs, and scale services without managing every server manually. Automation makes deployment repeatable, which means fewer surprises when a project goes live.',
        uses: ['Web app hosting and databases', 'CI/CD deployment pipelines', 'Backups, logs, and monitoring'],
        skills: ['Cloud hosting', 'Containers', 'CI/CD', 'Observability'],
        watch: 'Cloud makes starting easy, but costs and misconfigured permissions can grow quietly. Track usage and access rules.',
        starter: 'Deploy a small static site or API, then add a basic uptime check and deployment checklist.'
      },
      {
        title: 'Human-Centered Design',
        tag: 'People',
        signal: 'Ethical lens',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Team planning a user experience design workflow',
        text: 'Designing products that prioritize accessibility, ethics, and real human needs throughout development.',
        detail: 'Human-centered design keeps technology useful, understandable, and respectful. It asks who the system serves, what they need, what might confuse or exclude them, and how to test assumptions before building too much.',
        uses: ['Accessible interfaces', 'Usability testing and prototypes', 'Ethical product decisions'],
        skills: ['User research', 'Accessibility', 'Prototyping', 'Usability testing'],
        watch: 'A feature can work technically and still fail people. Observe real users, listen to friction, and revise.',
        starter: 'Test one page with three classmates and note where they hesitate, misread, or get stuck.'
      },
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

function renderInfoCards(cards, pageId) {
  return cards.map((card, idx) => {
    const isEmerging = pageId === 'emerging';
    // Use the provided image only for the second card (index 1)
    const useImageBadge = isEmerging && idx === 1;
    const badgeContent = useImageBadge
      ? `<img src="images/emerging-2.jpg" alt="${card.title} badge" class="card-badge-img"/>`
      : String(idx + 1).padStart(2, '0');

    return `
    <article class="info-page-card">
      <div class="card-badge">${badgeContent}</div>
      <div class="card-body">
        <h2>${card.title}</h2>
        <p>${card.text}</p>
      </div>
    </article>
  `;
  }).join('');
}

function renderEmergingTechPage(page) {
  const spotlightCards = page.cards.slice(0, 3).map((card, idx) => `
    <article class="emerging-spotlight-card" role="button" tabindex="0" onclick="showEmergingTechModal(${idx})" onkeydown="handleEmergingCardKey(event, ${idx})">
      <span>${String(idx + 1).padStart(2, '0')}</span>
      <h2>${card.title}</h2>
      <p>${card.text}</p>
    </article>
  `).join('');

  const techCards = page.cards.map((card, idx) => `
    <article class="emerging-tech-card" role="button" tabindex="0" onclick="showEmergingTechModal(${idx})" onkeydown="handleEmergingCardKey(event, ${idx})">
      <div class="emerging-card-topline">
        <span class="emerging-card-number">${String(idx + 1).padStart(2, '0')}</span>
        <span class="emerging-card-tag">${card.tag}</span>
      </div>
      <h2>${card.title}</h2>
      <p>${card.text}</p>
      <div class="emerging-signal">${card.signal}</div>
    </article>
  `).join('');

  return `
    <section class="emerging-hero" style="background-image: url('${page.heroImage}')">
      <div class="emerging-hero-shade" aria-hidden="true"></div>
      <div class="emerging-hero-copy">
        <p class="home-kicker">${page.kicker}</p>
        <h1>${page.title}</h1>
        <p>${page.intro}</p>
        <div class="emerging-pill-row" aria-label="Emerging technology themes">
          <span>AI</span>
          <span>Security</span>
          <span>Cloud</span>
          <span>Automation</span>
        </div>
      </div>
      <aside class="emerging-hero-panel">
        <span>Batch Readiness</span>
        <strong>10</strong>
        <p>Fields to watch, discuss, prototype, and build around.</p>
      </aside>
    </section>

    <section class="emerging-dashboard">
      <div class="emerging-stat">
        <strong>04</strong>
        <span>Core tracks</span>
      </div>
      <div class="emerging-stat">
        <strong>10</strong>
        <span>Tech signals</span>
      </div>
      <div class="emerging-stat">
        <strong>2026</strong>
        <span>Career horizon</span>
      </div>
    </section>

    <section class="emerging-spotlight">
      <div class="emerging-section-heading">
        <p class="home-kicker">Priority Watchlist</p>
        <h2>Where IT students can start building now</h2>
      </div>
      <div class="emerging-spotlight-grid">
        ${spotlightCards}
      </div>
    </section>

    <section class="emerging-tech-grid">
      ${techCards}
    </section>

    <div class="emerging-modal" id="emerging-modal" aria-hidden="true" onclick="handleEmergingModalBackdrop(event)">
      <div class="emerging-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="emerging-modal-title">
        <button type="button" class="emerging-modal-close" aria-label="Close" onclick="closeEmergingTechModal()">x</button>
        <div class="emerging-modal-visual">
          <img id="emerging-modal-image" src="" alt="">
          <div class="emerging-modal-image-shade" aria-hidden="true"></div>
          <div class="emerging-modal-topline">
            <span id="emerging-modal-number">01</span>
            <span id="emerging-modal-tag">Build</span>
          </div>
          <div class="emerging-modal-caption">
            <span>Technology Signal</span>
            <strong id="emerging-modal-signal">High impact</strong>
          </div>
        </div>
        <div class="emerging-modal-content">
          <div class="emerging-modal-head">
            <p class="home-kicker">Emerging Tech Brief</p>
            <h2 id="emerging-modal-title"></h2>
            <p id="emerging-modal-summary"></p>
          </div>

          <div class="emerging-modal-stats" aria-label="Brief facts">
            <div>
              <strong id="emerging-modal-use-count">3</strong>
              <span>Use cases</span>
            </div>
            <div>
              <strong id="emerging-modal-skill-count">4</strong>
              <span>Skills</span>
            </div>
            <div>
              <strong id="emerging-modal-track">Build</strong>
              <span>Track</span>
            </div>
          </div>

          <section class="emerging-modal-brief">
            <div class="emerging-modal-section-mark">01</div>
            <div>
              <h3>Why It Matters</h3>
              <p id="emerging-modal-detail-text"></p>
            </div>
          </section>

          <div class="emerging-modal-grid">
            <section class="emerging-modal-panel">
              <div class="emerging-modal-section-mark">02</div>
              <div>
                <h3>Where It Shows Up</h3>
                <ul id="emerging-modal-uses"></ul>
              </div>
            </section>
            <section class="emerging-modal-panel">
              <div class="emerging-modal-section-mark">03</div>
              <div>
                <h3>Skills To Try</h3>
                <div class="emerging-modal-chip-list" id="emerging-modal-skills"></div>
              </div>
            </section>
          </div>

          <div class="emerging-modal-actions">
            <section>
              <h3>Watch Out</h3>
              <p id="emerging-modal-watch"></p>
            </section>
            <section class="emerging-modal-starter">
              <h3>Starter Project</h3>
              <p id="emerging-modal-starter"></p>
            </section>
          </div>

          <footer class="emerging-modal-footer">
            <button type="button" onclick="showAdjacentEmergingTech(-1)" aria-label="Previous technology">Previous</button>
            <span id="emerging-modal-progress">01 / 10</span>
            <button type="button" onclick="showAdjacentEmergingTech(1)" aria-label="Next technology">Next</button>
          </footer>
        </div>
      </div>
    </div>
  `;
}

let activeEmergingTechIndex = 0;

function getEmergingCards() {
  return INFO_PAGES.emerging.cards;
}

function renderEmergingList(items) {
  return (items || []).map(item => `<li>${item}</li>`).join('');
}

function renderEmergingChips(items) {
  return (items || []).map(item => `<span>${item}</span>`).join('');
}

function showAdjacentEmergingTech(direction) {
  const cards = getEmergingCards();
  const nextIndex = (activeEmergingTechIndex + direction + cards.length) % cards.length;
  showEmergingTechModal(nextIndex);
}

function showEmergingTechModal(index) {
  const cards = getEmergingCards();
  const card = cards[index];
  const modal = document.getElementById('emerging-modal');
  if (!card || !modal) return;

  activeEmergingTechIndex = index;
  const dialog = modal.querySelector('.emerging-modal-dialog');
  const content = modal.querySelector('.emerging-modal-content');

  document.getElementById('emerging-modal-number').textContent = String(index + 1).padStart(2, '0');
  document.getElementById('emerging-modal-tag').textContent = card.tag;
  document.getElementById('emerging-modal-title').textContent = card.title;
  document.getElementById('emerging-modal-summary').textContent = card.text;
  document.getElementById('emerging-modal-detail-text').textContent = card.detail;
  document.getElementById('emerging-modal-signal').textContent = card.signal;
  document.getElementById('emerging-modal-uses').innerHTML = renderEmergingList(card.uses);
  document.getElementById('emerging-modal-skills').innerHTML = renderEmergingChips(card.skills);
  document.getElementById('emerging-modal-watch').textContent = card.watch;
  document.getElementById('emerging-modal-starter').textContent = card.starter;
  document.getElementById('emerging-modal-use-count').textContent = String(card.uses?.length || 0).padStart(2, '0');
  document.getElementById('emerging-modal-skill-count').textContent = String(card.skills?.length || 0).padStart(2, '0');
  document.getElementById('emerging-modal-track').textContent = card.tag;
  document.getElementById('emerging-modal-progress').textContent = `${String(index + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
  document.getElementById('emerging-modal-image').src = card.image;
  document.getElementById('emerging-modal-image').alt = card.imageAlt;
  if (content) content.scrollTop = 0;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  if (dialog) {
    dialog.classList.remove('is-refreshing');
    void dialog.offsetWidth;
    dialog.classList.add('is-refreshing');
  }
}

function closeEmergingTechModal() {
  const modal = document.getElementById('emerging-modal');
  if (!modal) return;

  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function handleEmergingModalBackdrop(event) {
  if (event.target?.id === 'emerging-modal') {
    closeEmergingTechModal();
  }
}

function handleEmergingCardKey(event, index) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    showEmergingTechModal(index);
  }
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeEmergingTechModal();
  }

  const modal = document.getElementById('emerging-modal');
  if (!modal?.classList.contains('open')) return;

  if (event.key === 'ArrowLeft') {
    showAdjacentEmergingTech(-1);
  }

  if (event.key === 'ArrowRight') {
    showAdjacentEmergingTech(1);
  }
});

function renderInfoPage(pageId) {
  const page = INFO_PAGES[pageId] || INFO_PAGES.about;
  NAV_TABS.forEach(tab => tab.active = (tab.id === pageId));
  const theatreClass = pageId === 'gallery' ? ' gallery-theatre-page' : '';
  const emergingClass = pageId === 'emerging' ? ' emerging-tech-page' : '';
  const theatreCurtains = pageId === 'gallery'
    ? `
      <div class="gallery-curtain-stage" aria-hidden="true">
        <div class="gallery-curtain gallery-curtain-left"></div>
        <div class="gallery-curtain gallery-curtain-right"></div>
      </div>
    `
    : '';

  return `
    <div class="page info-page${theatreClass}${emergingClass} active">
      <nav class="navbar">
        ${renderUserMenu()}
        <ul class="navbar-links" id="home-nav-tabs">
          ${renderInfoNavTabs(pageId)}
        </ul>
        <div class="navbar-spacer" aria-hidden="true"></div>
      </nav>

      ${theatreCurtains}

      <main class="info-page-main">
        ${pageId === 'emerging'
          ? renderEmergingTechPage(page)
          : `
            <section class="info-page-hero ${page.heroImage ? 'hero-image' : ''}" ${page.heroImage ? `style="background-image: url('${page.heroImage}')"` : ''}>
              <div class="hero-overlay" aria-hidden="true"></div>
              <div class="hero-copy">
                <p class="home-kicker">${page.kicker}</p>
                <h1>${page.title}</h1>
                <p>${page.intro}</p>
              </div>
            </section>

            <section class="info-page-grid">
              ${renderInfoCards(page.cards, pageId)}
            </section>
          `}
      </main>
    </div>
  `;
}

window.InfoPages = {
  render: renderInfoPage,
};

window.showEmergingTechModal = showEmergingTechModal;
window.closeEmergingTechModal = closeEmergingTechModal;
window.handleEmergingModalBackdrop = handleEmergingModalBackdrop;
window.handleEmergingCardKey = handleEmergingCardKey;
window.showAdjacentEmergingTech = showAdjacentEmergingTech;
