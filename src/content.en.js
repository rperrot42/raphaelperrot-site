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
    "I have been building a SaaS ERP/CRM used daily by companies since 2023. Today I design e-commerce sites, custom tools and automation for small businesses. One person to talk to, a price agreed upfront, and a result you can edit yourself.",
};

const services = [
  {
    title: 'E-commerce sites',
    text: 'Online stores on Shopify, product configurators, payment, customer accounts. You stay in control of your own copy and photos.',
  },
  {
    title: 'Custom business tools',
    text: 'Stock management, scheduling, order tracking: web applications built around the way you work, not the other way round.',
  },
  {
    title: 'Automation',
    text: 'Quotes, invoices, follow-ups, appointment reminders: the repetitive work takes care of itself.',
  },
];

const projects = [
  {
    title: 'Valentine Lacroix, lawyer',
    sub: 'Brochure site · since 2024',
    problem:
      'A lawyer opening her own practice with no online presence: prospective clients searched for her on Google and found nothing.',
    done: 'A clear site presenting her areas of practice, with contact two clicks away, working as well on a phone as on a desktop.',
    tags: ['Brochure site', 'Local SEO', 'Mobile'],
    url: 'https://valentine-lacroix-avocat.fr/',
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
    ],
  },
  {
    when: 'Since 2023',
    title: 'Java / Spring Boot developer — Wandeed',
    sub: 'Teamber, a B2B SaaS ERP/CRM platform',
    points: [
      'Rebuilt the Gantt view of a scheduling module, showing features across a timeline.',
      'Built task dragging and rescheduling inside the Gantt chart.',
      'Designed and built the group management microservice.',
      'Java and Spring Boot back end on a microservice architecture, deployed on Kubernetes.',
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
    when: '2023 — 2026',
    title: 'École 42 Lyon',
    sub: 'Project-based software engineering · core curriculum completed',
    points: [
      'A school with no teachers: you learn by building, and every project is reviewed by fellow students.',
      'Notable projects: a full web application, an HTTP server and a Unix shell written from scratch, a ray tracing engine.',
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
  title: 'Cycling, for over ten years',
  text:
    "I work a lot, and sport is what taught me to keep it up over time: you do not improve by going all out every other day, you improve by showing up without skipping sessions. I train year round with a coach, towards goals set months in advance. I approach my clients' projects the same way: a clear deadline, steady milestones, and nothing left to the last minute.",
  youtubeId: '',
  photo: {
    base: '/photos/velo-alpha',
    largeurs: [500, 800, 1200],
    width: 1200,
    height: 900,
    alt: 'An Alpha Aero SL road bike: midnight blue carbon frame and deep section wheels, resting on the grass by a road.',
    legende: 'My road bike, an Alpha Aero SL.',
  },
  cards: [
    {
      title: 'Mountain biking',
      lines: ['French Cup races in cross-country, enduro these days.'],
    },
    {
      title: 'Triathlon',
      lines: [
        'Embrun triathlon, Olympic distance, in 2026.',
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
    'I started working early, waiting tables at a riverside restaurant. Work has never felt like a chore to me, and that has not changed: I give everything to what I take on, it is the only way I know. My greatest satisfaction is not winning easily, it is reaching a goal I gave everything for.',
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

export default { site, nav, hero, services, projects, method, experience, sport, about, portrait, contactSection, legal };
