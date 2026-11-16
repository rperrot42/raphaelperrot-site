// English copy. The French counterpart lives in content.fr.js.
// Both files must expose exactly the same keys.

const site = {
  url: 'https://raphaelperrot.com/en',
  title: 'Raphaël Perrot — Freelance developer in Toulouse',
  description:
    'Freelance developer based near Toulouse, France. E-commerce sites, custom business tools and automation for small companies. Fixed quote, one person to talk to.',
};

const nav = [
  { id: 'services', label: 'Services' },
  { id: 'realisations', label: 'Work' },
  { id: 'methode', label: 'How I work' },
  { id: 'experience', label: 'Background' },
  { id: 'contact', label: 'Contact' },
];

const hero = {
  eyebrow: 'Freelance developer · Toulouse, France',
  titleStart: 'Websites and tools that ',
  titleHighlight: 'save small businesses time',
  titleEnd: '.',
  text:
    "I have been building a SaaS ERP/CRM used daily by companies since 2023. Today I design custom business tools, automation and e-commerce sites for small companies. One person to talk to, a price agreed upfront, and a result you can edit yourself.",
};

const services = [
  {
    title: 'Custom business tools',
    text: 'Stock management, scheduling, order tracking: web applications built around the way you work, not the other way round.',
  },
  {
    title: 'Automation',
    text: 'Quotes, invoices, follow-ups, appointment reminders: the repetitive work takes care of itself.',
  },
  {
    title: 'E-commerce sites',
    text: 'Online stores on Shopify, product configurators, payment, customer accounts. You stay in control of your own copy and photos.',
  },
];

const projects = [
  {
    title: 'Valentine Lacroix, lawyer',
    sub: 'Brochure site · corporate law · since 2024',
    problem:
      'A lawyer opening her own practice with no online presence. Her clients — company directors and investors — research before they call: without a site, she did not exist at that moment.',
    done:
      'A site that establishes her authority from the first second: clear positioning on corporate law and insolvency proceedings, her areas of practice, published fees, and appointment booking reachable from any page.',
    tags: ['Brochure site', 'Appointment booking', 'Local SEO', 'Mobile'],
    url: 'https://valentine-lacroix-avocat.fr/',
    image: {
      base: '/photos/projet-lacroix',
      largeurs: [600, 900, 1383],
      width: 1383,
      height: 868,
      alt: 'Home page of the website of Valentine Lacroix, corporate lawyer.',
    },
  },
];

const method = [
  {
    title: 'I learn how your business works',
    text: 'We start with a conversation, at your place or over video. I look at how you work today and what costs you time, before any talk of technology.',
  },
  {
    title: 'A clear price, agreed upfront',
    text: 'You get a detailed quote, line by line. No surprises along the way: what is planned is what you pay.',
  },
  {
    title: 'You watch the project take shape',
    text: 'You try a demo from the earliest stages, on your own phone. We adjust as we go instead of discovering everything at the end.',
  },
  {
    title: 'You stay independent',
    text: 'I train you to edit your own copy and photos. And if you want, I stay available for maintenance and future work.',
  },
];

const experience = [
  {
    when: 'Since 2024',
    title: 'Freelance developer',
    sub: 'Self-employed · Toulouse and Haute-Garonne, France',
    points: [
      'Websites and online stores for independents and small businesses.',
      'Internal tools and custom automation.',
      'Run alongside my role at Wandeed: what I learn on a platform used by companies goes straight back to my own clients.',
    ],
  },
  {
    when: 'Since 2023',
    title: 'Java / Spring Boot developer — Wandeed',
    sub: 'Teamber, a B2B SaaS ERP/CRM platform',
    points: [
      'Worked on several of the most complex parts of the platform.',
      'Full rebuild of the planning Gantt view: a project\u2019s tasks laid out across a timeline.',
      'Designed the drag system inside the Gantt: grabbing a task with the mouse and repositioning it in time.',
      'Rewrote the access-rights microservice: who can see and edit what, for each user group, across the whole platform.',
      'Built project duplication: recreating an entire project, with everything it contains, in a single action.',
      'Java and Spring Boot back end on a microservice architecture, deployed and diagnosed on Kubernetes, shipped through Jenkins pipelines.',
      'Data modelling with JPA and PostgreSQL, following a DDD approach.',
    ],
    tags: ['Java', 'Spring Boot', 'Kubernetes', 'PostgreSQL', 'Jenkins', 'Microservices'],
  },
  {
    when: '2025',
    title: 'Hackathon — frugal AI',
    sub: 'Designing uses of artificial intelligence that are light on resources',
    points: [
      // ⚠️ TO COMPLETE — keep in sync with content.fr.js.
      'Work on reducing the computing cost of AI workloads.',
    ],
  },
  {
    when: '2023',
    title: 'A chess game in C, with an AI that plays it',
    sub: 'Personal project',
    points: [
      'The whole game written in C: the board, the rules, legal moves.',
      'An artificial intelligence able to play a full game against a human opponent.',
    ],
    tags: ['C', 'Algorithms', 'AI'],
  },
  {
    when: '2023 — 2026',
    title: 'École 42 Lyon',
    sub: 'Project-based software engineering · selection month July 2023, core curriculum completed',
    points: [
      'A school with no teachers: you learn by building, and every project is reviewed by fellow students.',
      'A lot of low-level programming in C and C++: memory management, processes, networking, assembly — all written from scratch, with no libraries.',
      'Notable projects: an HTTP server, a Unix shell, a ray tracing engine, and a full web application.',
    ],
    more: [
      'ft_transcendence — full web application, final project of the core curriculum',
      'webserv — an HTTP server written from scratch',
      'minishell — a Unix shell',
      'Inception — a Docker infrastructure',
      'Born2beroot — system administration',
      'NetPractice — networking',
      'philosophers — concurrent programming',
      'miniRT — a ray tracing engine',
      'push_swap — sorting algorithms',
      'C++ modules 00 to 09',
      'libasm — assembly',
      'libft, ft_printf, get_next_line — in C',
      'Python Data Science bootcamp',
    ],
    moreLabel: 'See all 13 projects',
  },
];

const sport = {
  title: 'Cycling, in competition',
  text:
    "I work a lot, and sport is what taught me to keep it up over time: you do not improve by going all out every other day, you improve by showing up without skipping sessions. I train year round with a coach, towards goals set months in advance. I approach my clients' projects the same way: a clear deadline, steady milestones, and nothing left to the last minute.",
  youtubeId: '',
  photos: [
    {
      base: '/photos/vtt-course',
      largeurs: [500, 800, 1100],
      width: 1100,
      height: 1084,
      alt: 'Raphaël Perrot racing cross-country mountain biking in team kit, on a woodland singletrack.',
      legende: 'Racing cross-country.',
    },
    {
      base: '/photos/velo-alpha',
      largeurs: [500, 800, 1200],
      width: 1200,
      height: 900,
      alt: 'An Alpha Aero SL road bike: midnight blue carbon frame and deep section wheels, resting on the grass by a road.',
      legende: 'My road bike, an Alpha Aero SL. And yes, that is a supermarket water bottle in the cage: I had just bought the bike and had no bidon yet. The purists have forgiven me since.',
    },
  ],
  cards: [
    {
      title: 'Mountain biking',
      lines: ['French Cup races in cross-country, enduro these days.'],
    },
    {
      title: 'Triathlon',
      lines: [
        'Embrun triathlon, Olympic distance, in 2026.',
        '5 km in 19:17, alone on the track.',
        'Half marathon in 1:36.',
        'Training supervised by Pierre Dreneau.',
      ],
    },
    {
      title: 'Endurance',
      lines: ['Longest ride: 187 km with 2,330 m of climbing.'],
    },
  ],
};

const about = {
  eyebrow: 'Who I am',
  title: 'What I bring to a project',
  paragraphs: [
    'When I discovered code, it clicked straight away. Building something that works, breaking it, going back to it until it runs: I have never found that tiring. That is what led me to École 42, where you learn in exactly that way, by building.',
    'What I do best is the invisible part: the logic, the data, what makes a tool hold up under load and lose nothing. I learned the craft from the bottom — in C and C++, writing from scratch what others import — and that is where I picked up the habit of understanding what my code actually does.',
    'I started working early, cooking at an open-air riverside restaurant near Toulouse. Work has never felt like a chore to me, and that has not changed: I give everything to what I take on, it is the only way I know. My greatest satisfaction is not winning easily, it is reaching a goal I gave everything for.',
    'I like competition and intensity — mountain biking at French Cup level, triathlon. That appetite for full commitment is what I bring to my clients: when I take on a project, I take all of it.',
    'I like to travel, to see other places and other ways of doing things. I have no wish to spend my life behind a screen — and I believe that makes me better in front of one: you have better ideas when you look elsewhere.',
    'I do not forget how lucky I am. I would rather succeed alongside people than at their expense, and that is why I work with small organisations: we talk directly, with nobody in between, and I genuinely invest myself in what you are building.',
  ],
};

const portrait = {
  base: '/photos/portrait',
  largeurs: [400, 600, 800],
  width: 800,
  height: 1066,
  alt: 'Raphaël Perrot standing in front of the Matka Canyon, North Macedonia.',
  legende: 'Matka Canyon, North Macedonia.',
};

const contactSection = {
  eyebrow: 'Contact',
  title: "Let's talk about your project",
  intro:
    'Tell me in a few lines what would save you time. I reply within one working day, and a first conversation commits you to nothing.',
  rassurances: [
    ['A reply within one working day', 'Monday to Friday. You are never left waiting.'],
    ['First conversation is free', 'By phone or video, with nothing to sign.'],
    ['A clear quote before any work starts', 'Detailed line by line. You know exactly what you are paying for.'],
  ],
  etapes: [
    'You write or call.',
    'We take 30 minutes to understand what you need.',
    'I send you a detailed quote, with no obligation.',
  ],
};

const legal = {
  activity: 'Website and software development',
  registered: '21 February 2024',
  vat: 'VAT not applicable, article 293 B of the French General Tax Code.',
  host: {
    name: 'OVH SAS',
    address: '2 rue Kellermann, 59100 Roubaix, France — tel. 1007',
    url: 'https://www.ovhcloud.com',
  },
};

const servicesPage = {
  eyebrow: 'Services',
  title: 'What I can build for you',
  intro:
    'Every trade has its own constraints. Here is concretely what I can build, and when each one is the right answer.',
  franchise:
    'Some of these I have already delivered. Others build on what I work on daily inside a company, on a platform used by real businesses. If you ask me for something I have never done, I will tell you before committing — and I will tell you if someone else is better placed.',
  blocs: [
    {
      titre: 'Custom business software',
      pour: 'You run your business on a spreadsheet that has hit its limits.',
      texte:
        'I build a web application shaped around the way you work: stock management, scheduling, job tracking, customer records. Reachable from any browser, nothing to install, with your data hosted in France.',
      exemples: [
        'Stock and inventory management',
        'Scheduling and team assignment',
        'Order or job tracking',
        'Customer records and history',
        'Dashboards and exports',
      ],
    },
    {
      titre: 'Connecting your software together',
      pour: 'Your tools do not talk to each other and you bridge the gap by hand.',
      texte:
        'Till system, accounting, online store, calendar, quoting software: I connect them so information flows on its own. This is my day job on a platform used by companies.',
      exemples: [
        'Sync between till and online store',
        'Export to your accountant',
        'Calendar integration',
        'Data migration from your old system',
        'Building an API for your partners',
      ],
    },
    {
      titre: 'Automating repetitive work',
      pour: 'You spend your evenings retyping the same information.',
      texte:
        'We work out what costs you time every week, and I have the machine do it. Often the best money spent: a few days of development against several hours recovered every month.',
      exemples: [
        'Quotes and invoices generated automatically',
        'Payment reminders',
        'Appointment reminders by SMS or email',
        'Synchronisation between your tools',
        'Reports sent every week',
      ],
    },
    {
      titre: 'Brochure site',
      pour: 'Your customers search for you on Google and find nothing.',
      texte:
        'A site presenting your business, your work and how to reach you, built to be found in local searches. Fast to load, readable on a phone, and editable by you once delivered.',
      exemples: [
        'Presentation of your services',
        'Portfolio gallery',
        'Contact form and appointment booking',
        'Local SEO and business listing',
        'Legal notice and GDPR compliance',
      ],
    },
    {
      titre: 'Shopify online store',
      pour: 'You sell products and want to offer them online.',
      texte:
        'I build your store on Shopify: product pages, secure payment, shipping, discount codes, customer accounts. You then manage your products and prices yourself, through a simple interface, without depending on me day to day.',
      exemples: [
        'Catalogue and product pages',
        'Card, transfer or instalment payment',
        'Order and stock tracking',
        'Custom product configurator',
        'Connection to your till or accounting software',
      ],
    },
    {
      titre: 'Mobile application',
      pour: 'Your customers or your teams need the tool in their pocket.',
      texte:
        'I build web applications that install on a phone: the user adds it to their home screen and uses it like any other app, including offline. No App Store, so no fees and no review delays.',
      exemples: [
        'Installs straight from the browser',
        'Works offline',
        'Notifications',
        'Camera and location access',
        'One version for both iPhone and Android',
      ],
    },
    {
      titre: 'Artificial intelligence integration',
      pour: 'You get too many enquiries, or you keep writing the same replies.',
      texte:
        'Automatic sorting of enquiries, pre-filled replies, extracting information from documents, an assistant answering your customers\u2019 common questions. I favour frugal solutions: the lightest model that does the job, not the most expensive one.',
      exemples: [
        'Sorting and prioritising incoming enquiries',
        'Extracting data from PDFs or photos',
        'Assistant for frequently asked questions',
        'Assisted writing of your product descriptions',
        'Model chosen on real running cost',
      ],
    },
    {
      titre: 'Taking over and maintenance',
      pour: 'You already have a site, but it is slow, broken, or nobody looks after it any more.',
      texte:
        'Where possible I work with what exists rather than rebuilding everything: bug fixes, security updates, speed improvements, accessibility and GDPR compliance.',
      exemples: [
        'Audit and quote for taking over',
        'Bug fixes and updates',
        'Loading speed optimisation',
        'Backups and hardening',
        'Training so you can take control again',
      ],
    }
  ],
  aussi: {
    titre: 'And also',
    items: [
      ['SEO and speed', 'Audit, fixes and monitoring: being found on Google and loading fast.'],
      ['Accessibility and GDPR', 'Compliance work: contrast, keyboard navigation, legal notice, cookies.'],
      ['Hosting and backups', 'Setup, domain name, certificate, automatic backups.'],
      ['Dashboards', 'Your numbers in one place, updating themselves.'],
      ['Training and support', 'An hour so you can take control of your own tool.'],
      ['Advice before you start', 'A technical look at your idea, before you spend anything.'],
    ],
  },
  stack: {
    titre: 'The technologies I work with',
    texte:
      'For reference, if you already work with a technical provider. Otherwise, do not worry about it: choosing the technology is my job, not yours.',
    groupes: [
      ['Back end', ['Java', 'Spring Boot', 'Node.js', 'PHP', 'Python']],
      ['Front end', ['React', 'JavaScript', 'HTML / CSS']],
      ['Data', ['PostgreSQL', 'JPA / Hibernate', 'SQL']],
      ['E-commerce', ['Shopify', 'Stripe']],
      ['Infrastructure', ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'OVH', 'Linux']],
    ],
  },
  cta: {
    titre: 'Your need does not fit any of these boxes?',
    texte: 'That is often the case, and usually a good sign. Describe it to me and I will tell you honestly whether I am the right person.',
    bouton: 'Describe your need',
  },
};

const contactPage = {
  eyebrow: 'Contact',
  title: "Let's talk about your project",
  intro:
    'Describe in a few lines what would save you time. I reply within one working day, and a first conversation commits you to nothing.',
  ouDirect: 'Or directly',
  appel: 'By phone',
  mail: 'By email',
  formTitre: 'Your enquiry',
};


// ── Interface labels ────────────────────────────────────────────────────
// These used to be hardcoded in the components, so the English site showed
// them in French.
const ui = {
  skip: 'Skip to content',
  navAria: 'Main navigation',
  menuOuvrir: 'Open menu',
  menuFermer: 'Close menu',
  contactCta: 'Get in touch',
  nouvelleFenetre: '(opens in a new window)',
  retourAccueil: 'Back to home',
  heroCta: "Let's talk about your project",
  heroParcours: 'My background',
  servicesEyebrow: 'Services',
  servicesTitre: 'What I do',
  workEyebrow: 'Work',
  workTitre: 'Projects delivered',
  workIntro: 'Every project starts in the same place: a concrete problem, and time to win back.',
  workBesoin: 'The need',
  workLivre: 'What I delivered',
  workVoirSite: 'Visit the site',
  methodEyebrow: 'How I work',
  methodTitre: 'How I work with you',
  experienceEyebrow: 'Background',
  experienceTitre: 'Where I come from',
  sportEyebrow: 'Away from the code',
  footerRole: 'Freelance developer',
  footerSiret: 'SIRET',
  footerLegal: 'Legal notice',
};

const legalPage = {
  eyebrow: 'Legal information',
  titre: 'Legal notice',
  editeur: 'Site publisher',
  responsable: 'Publication manager:',
  statut: 'Status:',
  statutValeur: 'Sole trader (French auto-entrepreneur)',
  activite: 'Activity:',
  siege: 'Registered office:',
  siret: 'SIRET:',
  immatriculation: 'Registered on:',
  contactLabel: 'Contact:',
  tva: 'VAT:',
  hebergement: 'Hosting',
  piTitre: 'Intellectual property',
  piTexte:
    'All text, images and graphic elements on this site are the property of Raphaël Perrot unless stated otherwise. Any reproduction or reuse, in whole or in part, without prior written permission is prohibited.',
  donneesTitre: 'Personal data',
  donneesTexte:
    'The information submitted through the contact form (name, email address, message) is used solely to answer your enquiry. It is never sold, never passed on, never used for cold outreach, and is kept for a maximum of twelve months after the last exchange.',
  rgpd: {
    avant:
      'Under the General Data Protection Regulation (GDPR) and the French Data Protection Act, you have the right to access, rectify, erase, restrict and object to the processing of your data. To exercise it, write to ',
    entre: '. You may also lodge a complaint with the French data protection authority, the ',
    apres: '.',
  },
  cookiesTitre: 'Cookies and analytics',
  cookiesTexte:
    'This site sets no cookies, uses no advertising trackers and includes no analytics tool. The fonts are hosted on the site itself: no data is sent to any third-party service when you visit.',
  liensTitre: 'External links',
  liensTexte:
    'This site may link to third-party sites. Their content is the sole responsibility of their respective publishers.',
  miseAJour: 'Last updated: November 2026 · ',
};

export default { ui, legalPage, contactPage, servicesPage, site, nav, hero, services, projects, method, experience, sport, about, portrait, contactSection, legal };
