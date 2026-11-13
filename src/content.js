// Tout le contenu du site est ici : modifie ce fichier pour changer les textes.

export const site = {
  url: 'https://raphaelperrot.com',
  title: 'Raphaël Perrot — Développeur freelance à Toulouse',
  description:
    'Développeur freelance à Toulouse et en Haute-Garonne. Sites e-commerce, outils métier sur mesure et automatisations pour les petites entreprises. Devis clair, un seul interlocuteur.',
};

export const contact = {
  email: 'raphael@raphaelperrot.com',
  phone: '07 69 27 60 73',
  phoneLink: 'tel:+33769276073',

  siret: '985 308 931 00015',
  address: '232 route de Saint-Sulpice, 31410 Mauzac',

  // Pour activer le formulaire de contact : crée un formulaire gratuit sur
  // https://formspree.io et colle ici l'URL fournie (ex. https://formspree.io/f/xxxxxxx).
  // Tant que ce champ est vide, seuls les boutons e-mail et téléphone s'affichent.
  formEndpoint: '',
};

export const nav = [
  { id: 'services', label: 'Services' },
  { id: 'realisations', label: 'Réalisations' },
  { id: 'methode', label: 'Méthode' },
  { id: 'experience', label: 'Parcours' },
  { id: 'contact', label: 'Contact' },
];

export const hero = {
  eyebrow: 'Développeur freelance · Toulouse',
  titleStart: 'Des sites et des outils qui font ',
  titleHighlight: 'gagner du temps',
  titleEnd: ' aux petites entreprises.',
  text:
    "Développeur depuis 2023 sur un ERP/CRM SaaS utilisé chaque jour par des entreprises, je conçois aujourd'hui des sites e-commerce, des outils sur mesure et des automatisations. Un seul interlocuteur, un prix fixé à l'avance, et un résultat que vous pouvez modifier vous-même.",
};

export const services = [
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
export const projects = [
  {
    title: 'Valentine Lacroix, avocate',
    sub: 'Site vitrine · 2026',
    problem:
      "Une avocate qui démarre son cabinet et n'existait pas en ligne : ses futurs clients la cherchaient sur Google sans la trouver.",
    done: "Un site clair qui présente ses domaines d'intervention et permet de la contacter en deux clics, consultable depuis un téléphone comme depuis un ordinateur.",
    tags: ['Site vitrine', 'Référencement local', 'Mobile'],
    url: 'https://valentine-lacroix-avocat.fr/',
  },
];

export const method = [
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

export const experience = [
  {
    when: 'Depuis 2026',
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
      'Développement back-end en Java et Spring Boot sur une architecture microservices.',
      'Déploiement et diagnostic sur Kubernetes, pipelines Jenkins.',
      'Modélisation des données avec JPA et PostgreSQL, approche DDD.',
    ],
    tags: ['Java', 'Spring Boot', 'Kubernetes', 'PostgreSQL', 'Jenkins', 'Microservices'],
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

export const sport = {
  title: 'Le vélo, depuis plus de dix ans',
  text:
    "VTT en Coupe de France, enduro, triathlon, courses sur route. Le sport m'a appris la régularité et à tenir un objectif dans la durée — j'aborde les projets de mes clients de la même façon.",
  // Pour ajouter une vidéo VTT : colle ici l'identifiant YouTube (la partie après « v= »).
  youtubeId: '',
};

export const legal = {
  activity: 'Développement de sites internet et de logiciels',
  registered: '21 février 2024',
  vat: "TVA non applicable, article 293 B du Code général des impôts.",
  host: {
    name: 'OVH SAS',
    address: '2 rue Kellermann, 59100 Roubaix, France — 1007',
    url: 'https://www.ovhcloud.com',
  },
};
