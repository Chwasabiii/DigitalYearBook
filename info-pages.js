// =============================================
//  info-pages.js - Secondary Yearbook Pages
// =============================================

const INFO_PAGES = {
  mygroup: {
    kicker: 'IT Circle',
    title: 'My Group',
    intro: 'A dedicated space for the classmates, collaborators, and project partners who made this yearbook possible.',
    highlight: 'More than a page — a shared story of teamwork, late-night problem solving, and the energy that kept the batch moving forward.',
    stats: [
      { value: '8', label: 'Core teammates' },
      { value: '5', label: 'Projects launched' },
      { value: '40+', label: 'Study sessions' },
      { value: '1', label: 'Shared mission' },
    ],
    cards: [
      { title: 'Team Identity', text: 'A group built on curiosity, patience, and the confidence to tackle every challenge together.' },
      { title: 'Group Roles', text: 'Design, coding, documentation, research, and presentation — every contribution helped the yearbook shine.' },
      { title: 'Collaborative Culture', text: 'Peer review, shared notes, and honest feedback made work stronger and kept the momentum alive.' },
      { title: 'Outcome', text: 'A living yearbook experience that reflects both the project and the people behind it.' },
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
      { title: 'Project Defense', label: 'Project', mood: 'Prototype showcase', image: 'images/project-defense.jpg', imageAlt: 'Students presenting a project display with a laptop and a store model', text: 'A project showcase moment with the team, prototype model, and system demo ready on the table.' },
      { title: 'BITS Activities', label: 'Community', mood: 'Shared momentum', image: 'images/Group2.jpg', imageAlt: 'Students celebrating after a BITS workshop at night', text: 'Workshops and events that made technology feel like a community, not just a subject.' },
      { title: 'Class Photo Day', label: 'Snapshot', mood: 'Everyone together', image: 'images/group4.jpg', imageAlt: 'Class photo taken inside the campus building', text: 'The day everyone paused long enough to become part of the same frame.' },
      { title: 'Quiet Wins', label: 'Everyday', mood: 'Small victories', image: 'images/memories.jpg', imageAlt: 'A quiet classroom moment with students working on computers', text: 'Fixed bugs, submitted files, passed activities, and classmates who helped without making noise about it.' },
    ],
  },
  gallery: {
    kicker: 'Class Gallery',
    title: 'Gallery',
    intro: 'A collection of moments from the year: team outings, class gatherings, projects, and memories that shaped the batch.',
    cards: [
      { title: 'Portraits', label: 'Profiles', slots: 12, text: 'Individual student photos for each profile and card.' },
      {
        title: 'Group Photos',
        label: 'Class',
        slots: 6,
        text: 'Class pictures, organization events, and team memories.',
        photos: [
          {
            src: 'images/Group1.jpg',
            alt: 'Group photo outdoors with students in a grassy area',
            caption: 'Group 1',
          },
          {
            src: 'images/Group2.jpg',
            alt: 'Night group photo with students at a sports facility',
            caption: 'Group 2',
          },
          {
            src: 'images/group3.jpg',
            alt: 'Street candid group photo with students posing together',
            caption: 'Group 3',
          },
          {
            src: 'images/group4.jpg',
            alt: 'Indoor class group photo with students in a hallway',
            caption: 'Group 4',
          },
        ],
      },
      {
        title: 'Project Moments',
        label: 'Work',
        slots: 8,
        text: 'Screenshots, prototypes, booths, defenses, and behind-the-scenes work.',
        photos: [
          {
            src: 'images/project-defense.jpg',
            alt: 'Students presenting a project display with a laptop and a store model',
            caption: 'Project Defense',
          },
        ],
      },
      {
        title: 'Memories',
        label: 'Memories',
        slots: 4,
        text: 'Favorite memories from campus and the year together.',
        photos: [
          {
            src: 'images/memories.jpg',
            alt: 'A memory photo from the yearbook collection',
            caption: 'Memories',
          },
          {
            src: 'images/memories2.jpg',
            alt: 'Another memory photo from the yearbook collection',
            caption: 'Memories 2',
          },
        ],
      },
    ],
  },
  about: {
    kicker: 'About This Site',
    title: 'Digital Yearbook for IT',
    intro: 'A living archive for our batch: people, projects, clubs, memories, and the skills that shaped our year together.',
    highlight: 'Designed to feel active, easy to update, and ready for future students who want to explore what we built and why it mattered.',
    metrics: [
      { value: '4', label: 'Core sections' },
      { value: '30+', label: 'Story cards' },
      { value: '100%', label: 'Responsive design' },
      { value: 'One', label: 'Shared experience' },
    ],
    cards: [
      { title: 'Purpose', text: 'Keep the yearbook alive beyond print by making memories searchable, sharable, and simple to revisit.' },
      { title: 'Built for IT', text: 'From profiles to projects, the content is centered on what matters to the Information Technology batch.' },
      { title: 'How it works', text: 'A modular page layout with smart sections, animated entry, and a focus on moments that tell your story.' },
      { title: 'Keep it growing', text: 'Add photos, quotes, club highlights, awards, and gallery details so the page stays fresh.' },
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
    const isAbout = pageId === 'about';
    const useImageBadge = isEmerging && idx === 1;
    const badgeContent = useImageBadge
      ? `<img src="images/emerging-2.jpg" alt="${card.title} badge" class="card-badge-img"/>`
      : String(idx + 1).padStart(2, '0');
    const revealStyle = isAbout ? `style="animation: fadeUp 0.65s var(--ease-out) both; animation-delay: ${idx * 90}ms;"` : '';

    return `
    <article class="info-page-card" ${revealStyle}>
      <div class="card-badge">${badgeContent}</div>
      <div class="card-body">
        <h2>${card.title}</h2>
        <p>${card.text}</p>
      </div>
    </article>
  `;
  }).join('');
}

function renderAboutPage(page) {
  const metrics = page.metrics.map(item => `
    <div class="about-metric-card">
      <strong>${item.value}</strong>
      <span>${item.label}</span>
    </div>
  `).join('');

  return `
    <section class="about-hero">
      <div class="about-hero-glow" aria-hidden="true"></div>
      <div class="about-hero-copy">
        <p class="home-kicker">${page.kicker}</p>
        <h1>${page.title}</h1>
        <p>${page.intro}</p>
        <p class="about-highlight">${page.highlight}</p>
        <div class="about-pill-row" aria-label="Yearbook values">
          <span>Interactive</span>
          <span>Readable</span>
          <span>Memorable</span>
          <span>Future-ready</span>
        </div>
      </div>
      <div class="about-hero-panel">
        <h2>Why this page matters</h2>
        <p>It turns the yearbook into a living story, not a flat snapshot. Every section is built so your batch can keep adding memories and see what shaped your IT journey.</p>
      </div>
    </section>

    <section class="about-metrics">
      ${metrics}
    </section>

    <section class="info-page-grid about-grid">
      ${renderInfoCards(page.cards, 'about')}
    </section>
  `;
}

function renderMyGroupPage(page) {
  const stats = page.stats.map(item => `
    <article class="team-stat-card">
      <strong>${item.value}</strong>
      <span>${item.label}</span>
    </article>
  `).join('');

  return `
    <section class="team-hero">
      <div class="team-hero-glow" aria-hidden="true"></div>
      <div class="team-hero-copy">
        <p class="home-kicker">${page.kicker}</p>
        <h1>${page.title}</h1>
        <p>${page.intro}</p>
        <p class="team-highlight">${page.highlight}</p>
        <div class="team-pill-row" aria-label="Team values">
          <span>Curiosity</span>
          <span>Collaboration</span>
          <span>Resilience</span>
          <span>Growth</span>
        </div>
      </div>
      <aside class="team-hero-panel">
        <h2>What powered us</h2>
        <p>We leaned on strong communication, shared goals, and the willingness to solve hard problems together. This page honors how the group made the yearbook more than just a website.</p>
      </aside>
    </section>

    <section class="team-stats">
      ${stats}
    </section>

    <section class="info-page-grid about-grid">
      ${renderInfoCards(page.cards, 'mygroup')}
    </section>
  `;
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

function renderMemoriesPage(page) {
  const memoryCards = page.cards.map((card, idx) => `
    <article class="memory-card ${card.image ? 'has-photo' : ''}" role="button" tabindex="0" onclick="showMemoryModal(${idx})" onkeydown="handleMemoryCardKey(event, ${idx})">
      ${card.image ? `<div class="memory-card-photo"><img src="${card.image}" alt="${card.imageAlt}"></div>` : ''}
      <div class="memory-card-index">${String(idx + 1).padStart(2, '0')}</div>
      <div class="card-body">
        <span class="memory-card-label">${card.label}</span>
        <h2>${card.title}</h2>
        <p>${card.text}</p>
        <div class="memory-card-footer">
          <span>${card.mood}</span>
          <span class="memory-card-action">Open note</span>
        </div>
      </div>
    </article>
  `).join('');

  return `
    <section class="memory-hero">
      <div class="memory-hero-copy">
        <p class="home-kicker">${page.kicker}</p>
        <h1>${page.title}</h1>
        <p>${page.intro}</p>
      </div>
      <aside class="memory-hero-panel ${page.cards[0].image ? 'has-photo' : ''}">
        ${page.cards[0].image ? `<img src="${page.cards[0].image}" alt="${page.cards[0].imageAlt}">` : ''}
        <span>Memory Board</span>
        <strong>${String(page.cards.length).padStart(2, '0')}</strong>
        <p>Project photo added. More memories can follow when you send them.</p>
      </aside>
    </section>

    <section class="memory-stats" aria-label="Memory summary">
      <div>
        <strong>${String(page.cards.length).padStart(2, '0')}</strong>
        <span>Stories saved</span>
      </div>
      <div>
        <strong>${page.cards.filter(card => card.image).length}</strong>
        <span>Photos added</span>
      </div>
      <div>
        <strong>2026</strong>
        <span>Batch archive</span>
      </div>
    </section>

    <section class="memory-feature">
      ${page.cards[0].image ? `<div class="memory-feature-photo"><img src="${page.cards[0].image}" alt="${page.cards[0].imageAlt}"></div>` : ''}
      <div>
        <p class="home-kicker">Featured Project</p>
        <h2>${page.cards[0].title}</h2>
        <p>${page.cards[0].text}</p>
      </div>
      <button type="button" onclick="showMemoryModal(0)">Open project</button>
    </section>

    <section class="memory-grid">
      ${memoryCards}
    </section>

    <div class="memory-modal" id="memory-modal" aria-hidden="true" onclick="handleMemoryModalBackdrop(event)">
      <div class="memory-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="memory-modal-title">
        <button type="button" class="memory-modal-close" aria-label="Close" onclick="closeMemoryModal()">x</button>
        <div class="memory-modal-topline">
          <span id="memory-modal-number">01</span>
          <span id="memory-modal-label">Memory Note</span>
        </div>
        <h2 id="memory-modal-title"></h2>
        <span class="memory-modal-mood" id="memory-modal-mood"></span>
        <div class="memory-modal-photo" id="memory-modal-photo-wrap">
          <img id="memory-modal-photo" src="" alt="">
        </div>
        <p id="memory-modal-text"></p>
        <footer class="memory-modal-footer">
          <button type="button" onclick="showAdjacentMemory(-1)" aria-label="Previous memory">Previous</button>
          <span id="memory-modal-progress">01 / 04</span>
          <button type="button" onclick="showAdjacentMemory(1)" aria-label="Next memory">Next</button>
        </footer>
      </div>
    </div>
  `;
}

function renderGalleryPage(page) {
  const cards = getGalleryCards();
  const totalPhotos = cards.reduce((total, card) => total + (card.photos?.length || 0), 0);
  const openSlots = cards.reduce((total, card) => total + Math.max(card.slots - (card.photos?.length || 0), 0), 0);
  const galleryWallPhotos = cards.flatMap(card => card.photos || []).slice(0, 9);
  const galleryCards = cards.map((card, idx) => {
    const previewPhoto = card.photos?.[0]?.src || null;
    return `
    <article class="gallery-album-card ${card.photos?.length ? 'has-photo' : ''}" role="button" tabindex="0" onclick="showGalleryModal(${idx})" onkeydown="handleGalleryCardKey(event, ${idx})">
      ${previewPhoto ? `<div class="gallery-album-photo"><img src="${previewPhoto}" alt="${card.title} preview"></div>` : ''}
      <div class="gallery-album-top">
        <span>${card.label}</span>
        <strong>${String(card.photos?.length || card.slots).padStart(2, '0')}</strong>
      </div>
      <h2>${card.title}</h2>
      <p>${card.text}</p>
      <div class="gallery-slot-strip" aria-hidden="true">
        ${Array.from({ length: 4 }).map((_, slotIndex) => `<span>${String(slotIndex + 1).padStart(2, '0')}</span>`).join('')}
      </div>
    </article>
  `;
  }).join('');
  const portraitProfiles = STUDENTS.map(renderProfileCard).join('');
  const memoryPage = INFO_PAGES.memories;
  const memoryCards = memoryPage.cards.map((card, idx) => `
    <article class="memory-card ${card.image ? 'has-photo' : ''}" role="button" tabindex="0" onclick="showMemoryModal(${idx})" onkeydown="handleMemoryCardKey(event, ${idx})">
      ${card.image ? `<div class="memory-card-photo"><img src="${card.image}" alt="${card.imageAlt}"></div>` : ''}
      <div class="memory-card-index">${String(idx + 1).padStart(2, '0')}</div>
      <div class="card-body">
        <span class="memory-card-label">${card.label}</span>
        <h2>${card.title}</h2>
        <p>${card.text}</p>
        <div class="memory-card-footer">
          <span>${card.mood}</span>
          <span class="memory-card-action">Open memory</span>
        </div>
      </div>
    </article>
  `).join('');

  return `
    <section class="gallery-board-hero">
      <div class="gallery-board-copy">
        <p class="home-kicker">${page.kicker}</p>
        <h1>${page.title}</h1>
        <p>${page.intro}</p>
      </div>
      <aside class="gallery-board-panel">
        <span>Photo Intake</span>
        <strong>${totalPhotos}</strong>
        <p>${totalPhotos ? 'Project defense photo added. More gallery slots are ready for the next batch of images.' : 'No photos added yet. The layout is ready for the images you will send later.'}</p>
      </aside>
    </section>

    <section class="gallery-dashboard" aria-label="Gallery summary">
      <div>
        <strong>${String(page.cards.length).padStart(2, '0')}</strong>
        <span>Albums planned</span>
      </div>
      <div>
        <strong>${totalPhotos}</strong>
        <span>Photos added</span>
      </div>
      <div>
        <strong>${String(openSlots).padStart(2, '0')}</strong>
        <span>Open slots</span>
      </div>
    </section>

    <section class="gallery-empty-wall" aria-label="Gallery wall">
      ${galleryWallPhotos.map((photo, idx) => {
        const cardIndex = page.cards.findIndex(card => card.photos?.some(p => p.src === photo.src));
        const card = page.cards[cardIndex] || {};
        const photoIndex = cardIndex >= 0 ? card.photos.findIndex(p => p.src === photo.src) : 0;
        return `
          <button type="button" class="gallery-empty-slot has-photo" onclick="showGalleryModal(${cardIndex}, ${photoIndex})">
            <div class="gallery-card-inner">
              <div class="gallery-card-face gallery-card-front">
                <img src="${photo.src}" alt="${photo.alt}">
                <span>${String(idx + 1).padStart(2, '0')}</span>
              </div>
              <div class="gallery-card-face gallery-card-back">
                <div class="gallery-card-back-copy">
                  <strong>${photo.caption || card.title || 'Gallery Image'}</strong>
                  <p>${card.text || 'Hover to see more information about this photo.'}</p>
                  <span>${card.label || 'Gallery'}</span>
                </div>
              </div>
            </div>
          </button>
        `;
      }).join('')}
    </section>

    <section class="gallery-album-grid">
      ${galleryCards}
    </section>

    <section class="gallery-portrait-profiles" aria-label="Student portrait profiles">
      <div class="gallery-portrait-heading">
        <div>
          <p class="home-kicker">Portraits</p>
          <h2>Student Profile Portraits</h2>
          <p>Browse the students behind the portraits with profile cards linked directly to each student.</p>
        </div>
      </div>
      <div class="profile-grid gallery-portrait-grid">
        ${portraitProfiles}
      </div>
    </section>

    <section class="gallery-memory-section" aria-label="Gallery memories">
      <div class="gallery-memory-heading">
        <div>
          <p class="home-kicker">${memoryPage.kicker}</p>
          <h2>${memoryPage.title}</h2>
          <p>${memoryPage.intro}</p>
        </div>
        <div class="gallery-memory-count">
          <strong>${String(memoryPage.cards.length).padStart(2, '0')}</strong>
          <span>Stories</span>
        </div>
      </div>
      <div class="memory-grid">
        ${memoryCards}
      </div>
    </section>

    <div class="gallery-modal" id="gallery-modal" aria-hidden="true" onclick="handleGalleryModalBackdrop(event)">
      <div class="gallery-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="gallery-modal-title">
        <button type="button" class="gallery-modal-close" aria-label="Close" onclick="closeGalleryModal()">x</button>
        <div class="gallery-modal-topline">
          <span id="gallery-modal-number">01</span>
          <span id="gallery-modal-label">Album</span>
        </div>
        <h2 id="gallery-modal-title"></h2>
        <p id="gallery-modal-text"></p>
        <div class="gallery-modal-photo" id="gallery-modal-photo-wrap" hidden>
          <img id="gallery-modal-photo" src="" alt="">
          <span id="gallery-modal-photo-caption"></span>
        </div>
        <div class="gallery-modal-slots" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        <footer class="gallery-modal-footer">
          <button type="button" onclick="showAdjacentGallery(-1)" aria-label="Previous album">Previous</button>
          <span id="gallery-modal-progress">01 / 03</span>
          <button type="button" onclick="showAdjacentGallery(1)" aria-label="Next album">Next</button>
        </footer>
      </div>
    </div>

    <div class="memory-modal" id="memory-modal" aria-hidden="true" onclick="handleMemoryModalBackdrop(event)">
      <div class="memory-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="memory-modal-title">
        <button type="button" class="memory-modal-close" aria-label="Close" onclick="closeMemoryModal()">x</button>
        <div class="memory-modal-topline">
          <span id="memory-modal-number">01</span>
          <span id="memory-modal-label">Memory Note</span>
        </div>
        <h2 id="memory-modal-title"></h2>
        <span class="memory-modal-mood" id="memory-modal-mood"></span>
        <div class="memory-modal-photo" id="memory-modal-photo-wrap">
          <img id="memory-modal-photo" src="" alt="">
        </div>
        <p id="memory-modal-text"></p>
        <footer class="memory-modal-footer">
          <button type="button" onclick="showAdjacentMemory(-1)" aria-label="Previous memory">Previous</button>
          <span id="memory-modal-progress">01 / ${String(memoryPage.cards.length).padStart(2, '0')}</span>
          <button type="button" onclick="showAdjacentMemory(1)" aria-label="Next memory">Next</button>
        </footer>
      </div>
    </div>
  `;
}

let activeEmergingTechIndex = 0;
let activeMemoryIndex = 0;
let activeGalleryIndex = 0;

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
  const modal = document.querySelector('.emerging-tech-page #emerging-modal') || document.getElementById('emerging-modal');
  if (!card || !modal) return;
  document.querySelectorAll('#emerging-modal').forEach(existingModal => {
    if (existingModal !== modal) existingModal.remove();
  });
  if (modal.parentElement !== document.body) {
    document.body.appendChild(modal);
  }

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

function getMemoryCards() {
  return INFO_PAGES.memories.cards;
}

function showAdjacentMemory(direction) {
  const cards = getMemoryCards();
  const nextIndex = (activeMemoryIndex + direction + cards.length) % cards.length;
  showMemoryModal(nextIndex);
}

function showMemoryModal(index) {
  const cards = getMemoryCards();
  const card = cards[index];
  const modal = document.querySelector('.memories-page #memory-modal') || document.getElementById('memory-modal');
  if (!card || !modal) return;
  document.querySelectorAll('#memory-modal').forEach(existingModal => {
    if (existingModal !== modal) existingModal.remove();
  });
  if (modal.parentElement !== document.body) {
    document.body.appendChild(modal);
  }

  activeMemoryIndex = index;
  const dialog = modal.querySelector('.memory-modal-dialog');

  document.getElementById('memory-modal-number').textContent = String(index + 1).padStart(2, '0');
  document.getElementById('memory-modal-label').textContent = card.label;
  document.getElementById('memory-modal-title').textContent = card.title;
  document.getElementById('memory-modal-mood').textContent = card.mood;
  document.getElementById('memory-modal-text').textContent = card.text;
  document.getElementById('memory-modal-progress').textContent = `${String(index + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
  const photoWrap = document.getElementById('memory-modal-photo-wrap');
  const photo = document.getElementById('memory-modal-photo');
  if (photoWrap && photo) {
    if (card.image) {
      photo.src = card.image;
      photo.alt = card.imageAlt || card.title;
      photoWrap.hidden = false;
    } else {
      photo.removeAttribute('src');
      photo.alt = '';
      photoWrap.hidden = true;
    }
  }
  if (dialog) dialog.scrollTop = 0;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  if (dialog) {
    dialog.classList.remove('is-refreshing');
    void dialog.offsetWidth;
    dialog.classList.add('is-refreshing');
  }
}

function closeMemoryModal() {
  const modal = document.getElementById('memory-modal');
  if (!modal) return;

  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function handleMemoryModalBackdrop(event) {
  if (event.target?.id === 'memory-modal') {
    closeMemoryModal();
  }
}

function handleMemoryCardKey(event, index) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    showMemoryModal(index);
  }
}

function getGalleryCards() {
  const portraitPhotos = STUDENTS.map(student => ({
    src: student.avatar,
    alt: student.name,
    caption: student.name,
  }));

  return INFO_PAGES.gallery.cards.map(card =>
    card.title === 'Portraits'
      ? { ...card, photos: portraitPhotos }
      : card
  );
}

function showAdjacentGallery(direction) {
  const cards = getGalleryCards();
  const nextIndex = (activeGalleryIndex + direction + cards.length) % cards.length;
  showGalleryModal(nextIndex);
}

function showGalleryModal(index, photoIndex = 0) {
  const cards = getGalleryCards();
  const card = cards[index];
  const modal = document.querySelector('.gallery-theatre-page #gallery-modal') || document.getElementById('gallery-modal');
  if (!card || !modal) return;
  document.querySelectorAll('#gallery-modal').forEach(existingModal => {
    if (existingModal !== modal) existingModal.remove();
  });
  if (modal.parentElement !== document.body) {
    document.body.appendChild(modal);
  }

  activeGalleryIndex = index;
  const dialog = modal.querySelector('.gallery-modal-dialog');

  document.getElementById('gallery-modal-number').textContent = String(index + 1).padStart(2, '0');
  document.getElementById('gallery-modal-label').textContent = card.label;
  document.getElementById('gallery-modal-title').textContent = card.title;
  const photoCount = card.photos?.length || 0;
  const openSlotCount = Math.max(card.slots - photoCount, 0);
  document.getElementById('gallery-modal-text').textContent = photoCount
    ? `${card.text} ${photoCount} photo added, with ${openSlotCount} open slots ready for more.`
    : `${card.text} ${card.slots} empty slots are ready for your photos.`;
  document.getElementById('gallery-modal-progress').textContent = `${String(index + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
  const photoWrap = document.getElementById('gallery-modal-photo-wrap');
  const photo = document.getElementById('gallery-modal-photo');
  const caption = document.getElementById('gallery-modal-photo-caption');
  if (photoWrap && photo && caption) {
    let selectedPhoto = card.photos?.[photoIndex];
    if (!selectedPhoto) {
      selectedPhoto = card.photos?.[0];
    }
    if (selectedPhoto) {
      photo.src = selectedPhoto.src;
      photo.alt = selectedPhoto.alt || selectedPhoto.caption || card.title;
      caption.textContent = selectedPhoto.caption || card.title;
      photoWrap.hidden = false;
    } else {
      photo.removeAttribute('src');
      photo.alt = '';
      caption.textContent = '';
      photoWrap.hidden = true;
    }
  }
  if (dialog) dialog.scrollTop = 0;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  if (dialog) {
    dialog.classList.remove('is-refreshing');
    void dialog.offsetWidth;
    dialog.classList.add('is-refreshing');
  }
}

function closeGalleryModal() {
  const modal = document.getElementById('gallery-modal');
  if (!modal) return;

  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function handleGalleryModalBackdrop(event) {
  if (event.target?.id === 'gallery-modal') {
    closeGalleryModal();
  }
}

function handleGalleryCardKey(event, index) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    showGalleryModal(index);
  }
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeEmergingTechModal();
    closeMemoryModal();
    closeGalleryModal();
  }

  const modal = document.getElementById('emerging-modal');
  if (modal?.classList.contains('open')) {
    if (event.key === 'ArrowLeft') {
      showAdjacentEmergingTech(-1);
    }

    if (event.key === 'ArrowRight') {
      showAdjacentEmergingTech(1);
    }
  }

  const memoryModal = document.getElementById('memory-modal');
  if (memoryModal?.classList.contains('open')) {
    if (event.key === 'ArrowLeft') {
      showAdjacentMemory(-1);
    }

    if (event.key === 'ArrowRight') {
      showAdjacentMemory(1);
    }
  }

  const galleryModal = document.getElementById('gallery-modal');
  if (galleryModal?.classList.contains('open')) {
    if (event.key === 'ArrowLeft') {
      showAdjacentGallery(-1);
    }

    if (event.key === 'ArrowRight') {
      showAdjacentGallery(1);
    }
  }
});

function renderInfoPage(pageId) {
  const page = INFO_PAGES[pageId] || INFO_PAGES.about;
  NAV_TABS.forEach(tab => tab.active = (tab.id === pageId));
  const theatreClass = pageId === 'gallery' ? ' gallery-theatre-page' : '';
  const emergingClass = pageId === 'emerging' ? ' emerging-tech-page' : '';
  const memoriesClass = pageId === 'memories' ? ' memories-page' : '';
  const theatreCurtains = pageId === 'gallery'
    ? `
      <div class="gallery-curtain-stage" aria-hidden="true">
        <div class="gallery-curtain gallery-curtain-left"></div>
        <div class="gallery-curtain gallery-curtain-right"></div>
      </div>
    `
    : '';

  return `
    <div class="page info-page${theatreClass}${emergingClass}${memoriesClass} active">
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
          : pageId === 'memories'
          ? renderMemoriesPage(page)
          : pageId === 'gallery'
          ? renderGalleryPage(page)
          : pageId === 'about'
          ? renderAboutPage(page)
          : pageId === 'mygroup'
          ? renderMyGroupPage(page)
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
window.showMemoryModal = showMemoryModal;
window.closeMemoryModal = closeMemoryModal;
window.handleMemoryModalBackdrop = handleMemoryModalBackdrop;
window.handleMemoryCardKey = handleMemoryCardKey;
window.showAdjacentMemory = showAdjacentMemory;
window.showGalleryModal = showGalleryModal;
window.closeGalleryModal = closeGalleryModal;
window.handleGalleryModalBackdrop = handleGalleryModalBackdrop;
window.handleGalleryCardKey = handleGalleryCardKey;
window.showAdjacentGallery = showAdjacentGallery;
