// Textes français du site. Le pendant anglais est dans content.en.js.
// Les deux fichiers doivent exposer exactement les mêmes clés.

const site = {
  url: 'https://raphaelperrot.com',
  title: 'Raphaël Perrot — Développeur freelance à Toulouse',
  description:
    'Développeur freelance à Toulouse et en Haute-Garonne. Sites e-commerce, outils métier sur mesure et automatisations pour les petites entreprises. Devis clair, un seul interlocuteur.',
};


const nav = [
  { id: 'services', label: 'Services' },
  { id: 'realisations', label: 'Réalisations' },
  { id: 'methode', label: 'Méthode' },
  { id: 'experience', label: 'Parcours' },
  { id: 'contact', label: 'Contact' },
];

const hero = {
  eyebrow: 'Développeur freelance · Toulouse',
  titleStart: 'Des sites et des outils qui font ',
  titleHighlight: 'gagner du temps',
  titleEnd: ' aux petites entreprises.',
  text:
    "Développeur depuis 2023 sur un ERP/CRM SaaS utilisé chaque jour par des entreprises, je conçois aujourd'hui des sites e-commerce, des outils sur mesure et des automatisations. Un seul interlocuteur, un prix fixé à l'avance, et un résultat que vous pouvez modifier vous-même.",
};

const services = [
  {
    title: 'Sites e-commerce',
    text: 'Boutique en ligne sur Shopify, configurateur de produits, paiement, espace client. Vous gardez la main sur vos textes et vos photos.',
  },
  {
    title: 'Outils sur mesure',
    text: "Gestion de stock, planning, suivi de commandes : des applications web pensées pour votre façon de travailler, pas l'inverse.",
  },
  {
    title: 'Automatisations',
    text: 'Devis, factures, relances, rappels de rendez-vous : les tâches répétitives se font toutes seules.',
  },
];

// Les réalisations : la section la plus regardée par un prospect.
// Pour en ajouter une, copie un bloc et renseigne au minimum title, sub, problem, done et url.
const projects = [
  {
    title: 'Valentine Lacroix, avocate',
    sub: 'Site vitrine · depuis 2024',
    problem:
      "Une avocate qui démarre son cabinet et n'existait pas en ligne : ses futurs clients la cherchaient sur Google sans la trouver.",
    done: "Un site clair qui présente ses domaines d'intervention et permet de la contacter en deux clics, consultable depuis un téléphone comme depuis un ordinateur.",
    tags: ['Site vitrine', 'Référencement local', 'Mobile'],
    url: 'https://valentine-lacroix-avocat.fr/',
  },
];

const method = [
  {
    title: 'Je comprends votre métier',
    text: "On commence par une discussion, chez vous ou en visio. Je regarde comment vous travaillez aujourd'hui et ce qui vous fait perdre du temps, avant de parler de technique.",
  },
  {
    title: "Un prix clair, fixé à l'avance",
    text: 'Je vous envoie un devis détaillé, ligne par ligne. Pas de surprise en cours de route : ce qui est prévu est ce que vous payez.',
  },
  {
    title: 'Vous voyez avancer le projet',
    text: "Vous testez une démo dès les premières étapes, sur votre téléphone. On ajuste ensemble au fil de l'eau plutôt que de tout découvrir à la fin.",
  },
  {
    title: 'Vous restez autonome',
    text: 'Je vous forme pour que vous modifiiez vous-même textes et photos. Et si vous le souhaitez, je reste disponible pour la maintenance et les évolutions.',
  },
];

const experience = [
  {
    when: 'Depuis 2024',
    title: 'Développeur freelance',
    sub: 'Auto-entrepreneur · Toulouse et Haute-Garonne',
    points: [
      'Sites et boutiques en ligne pour des indépendants et des petites entreprises.',
      'Outils internes et automatisations sur mesure.',
    ],
  },
  {
    when: 'Depuis 2023',
    title: 'Développeur Java / Spring Boot — Wandeed',
    sub: 'Teamber, plateforme ERP/CRM SaaS B2B',
    points: [
      "Refonte de l'affichage Gantt d'un agenda : visualisation des fonctionnalités sur un planning.",
      'Développement du déplacement des tâches dans le Gantt.',
      'Conception et développement du microservice de gestion des groupes.',
      'Back-end Java et Spring Boot sur une architecture microservices, déployé sur Kubernetes.',
      'Modélisation des données avec JPA et PostgreSQL, approche DDD.',
    ],
    tags: ['Java', 'Spring Boot', 'Kubernetes', 'PostgreSQL', 'Jenkins', 'Microservices'],
  },
  {
    when: '2025',
    title: "Hackathon — la frugalité de l'IA",
    sub: "Concevoir des usages de l'intelligence artificielle sobres en ressources",
    points: [
      // ⚠️ À COMPLÉTER : remplace cette ligne par ce que tu as réellement
      // construit, et mentionne ton classement si tu en as eu un.
      // « A participé » ne pèse rien ; « a conçu X qui divise par N la
      // consommation de Y » pèse beaucoup.
      "Travail sur la réduction du coût en ressources de calcul des usages de l'IA.",
    ],
  },
  {
    when: '2023 — 2026',
    title: 'École 42 Lyon',
    sub: 'Ingénierie logicielle par projets · tronc commun terminé',
    points: [
      "Formation sans professeurs : on apprend en construisant, et chaque projet est validé par les autres étudiants.",
      'Projets marquants : une application web complète, un serveur HTTP et un shell Unix écrits de zéro, un moteur de ray tracing.',
    ],
    // Repliés par défaut : visibles pour qui veut le détail, invisibles pour les autres.
    more: [
      'ft_transcendence — application web complète, projet final du tronc commun',
      'webserv — un serveur HTTP écrit de zéro',
      'minishell — un shell Unix',
      'Inception — une infrastructure Docker',
      'Born2beroot — administration système',
      'NetPractice — réseau',
      'philosophers — programmation concurrente',
      'miniRT — un moteur de ray tracing',
      'push_swap — algorithmes de tri',
      'Modules C++ 00 à 09',
      'libasm — assembleur',
      'libft, ft_printf, get_next_line — en C',
      'Piscine Python Data Science',
    ],
    moreLabel: 'Voir les 13 projets',
  },
];

const sport = {
  title: 'Le vélo, depuis plus de dix ans',
  text:
    "Je travaille beaucoup, et c'est le sport qui m'a appris à le faire dans la durée : on ne progresse pas en forçant un jour sur deux, mais en répétant sans sauter de séance. Je m'entraîne toute l'année, accompagné par un coach, avec des objectifs fixés plusieurs mois à l'avance. J'aborde les projets de mes clients de la même façon : une échéance claire, des étapes régulières, et rien qui se joue à la dernière minute.",
  // Pour ajouter une vidéo VTT : colle ici l'identifiant YouTube (la partie après « v= »).
  youtubeId: '',
  photo: {
    base: '/photos/velo-alpha',
    largeurs: [500, 800, 1200],
    width: 1200,
    height: 900,
    alt: "Vélo de route Alpha Aero SL : cadre carbone bleu nuit, roues à profil haut, posé dans l'herbe au bord d'une route.",
    legende: 'Mon vélo de route, un Alpha Aero SL.',
  },
  cards: [
    {
      title: 'VTT',
      lines: ["Coupes de France en cross-country, aujourd'hui de l'enduro."],
    },
    {
      title: 'Triathlon',
      lines: [
        "Triathlon d'Embrun, format M, en 2026.",
        'Semi-marathon en 1h36.',
        'Entraînement encadré par Pierre Dreneau.',
      ],
    },
    {
      title: 'Endurance',
      lines: ['Plus longue sortie : 187 km et 2 330 m de dénivelé.'],
    },
  ],
};

const about = {
  eyebrow: 'Qui je suis',
  title: 'Ce que je mets dans un projet',
  paragraphs: [
    "Quand j'ai découvert le code, j'ai tout de suite accroché. Construire quelque chose qui fonctionne, le casser, le reprendre jusqu'à ce que ça tourne : je n'ai jamais trouvé ça fatigant. C'est cette passion qui m'a conduit à l'École 42, où l'on apprend exactement comme ça, en construisant.",
    "J'ai commencé à travailler tôt, en salle dans une guinguette. Le travail n'a jamais été une corvée pour moi, et ça n'a pas changé : je donne tout à ce que j'entreprends, c'est la seule façon que je connaisse. Ma plus grande satisfaction n'est pas de réussir facilement, c'est d'atteindre un objectif pour lequel je me suis donné à fond.",
    "J'aime la compétition et l'intensité — le VTT en Coupe de France, le triathlon. Ce goût de l'engagement total, je le mets au service de mes clients : quand je prends un projet, je le prends entièrement.",
    "J'aime voyager, voir d'autres endroits et d'autres façons de faire. Je n'ai pas envie de passer ma vie derrière un écran — et je crois que ça me rend meilleur devant : on a de meilleures idées quand on regarde ailleurs.",
    "Je n'oublie pas la chance que j'ai. Je préfère réussir avec les gens plutôt qu'à leurs dépens, et c'est pour ça que je travaille avec des petites structures : on se parle directement, sans intermédiaire, et je m'implique vraiment dans ce que vous construisez.",
  ],
};

// Portrait affiché dans la section « Qui je suis ».
const portrait = {
  base: '/photos/portrait',
  largeurs: [400, 600, 800],
  width: 800,
  height: 1066,
  alt: "Raphaël Perrot devant le canyon Matka, en Macédoine du Nord.",
  legende: 'Canyon Matka, Macédoine du Nord.',
};

const contactSection = {
  eyebrow: 'Contact',
  title: 'Parlons de votre projet',
  intro:
    "Dites-moi en quelques lignes ce qui vous ferait gagner du temps. Je vous réponds sous 24 h ouvrées, et le premier échange ne vous engage à rien.",
  rassurances: [
    ['Réponse sous 24 h', 'Du lundi au vendredi. Vous ne restez pas sans nouvelles.'],
    ['Premier échange gratuit', "Au téléphone ou en visio, sans engagement ni devis à signer."],
    ['Un devis clair avant de commencer', "Détaillé ligne par ligne. Vous savez exactement ce que vous payez."],
  ],
  etapes: [
    'Vous m’écrivez ou vous m’appelez.',
    'On prend 30 minutes pour comprendre votre besoin.',
    'Je vous envoie un devis détaillé, sans engagement.',
  ],
};

const legal = {
  activity: 'Développement de sites internet et de logiciels',
  registered: '21 février 2024',
  vat: "TVA non applicable, article 293 B du Code général des impôts.",
  host: {
    name: 'OVH SAS',
    address: '2 rue Kellermann, 59100 Roubaix, France — tél. 1007',
    url: 'https://www.ovhcloud.com',
  },
};

export default { site, nav, hero, services, projects, method, experience, sport, about, portrait, contactSection, legal };
