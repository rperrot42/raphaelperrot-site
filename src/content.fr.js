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
    "Développeur depuis 2023 sur un ERP/CRM SaaS utilisé chaque jour par des entreprises, je conçois aujourd'hui des outils métier sur mesure, des automatisations et des sites e-commerce. Un seul interlocuteur, un prix fixé à l'avance, et un résultat que vous pouvez modifier vous-même.",
};

const services = [
  {
    title: 'Outils sur mesure',
    text: "Gestion de stock, planning, suivi de commandes : des applications web pensées pour votre façon de travailler, pas l'inverse.",
  },
  {
    title: 'Automatisations',
    text: 'Devis, factures, relances, rappels de rendez-vous : les tâches répétitives se font toutes seules.',
  },
  {
    title: 'Sites e-commerce',
    text: 'Boutique en ligne sur Shopify, configurateur de produits, paiement, espace client. Vous gardez la main sur vos textes et vos photos.',
  },
];

// Les réalisations : la section la plus regardée par un prospect.
// Pour en ajouter une, copie un bloc et renseigne au minimum title, sub, problem, done et url.
const projects = [
  {
    title: 'Valentine Lacroix, avocate',
    sub: "Site vitrine · droit des sociétés · depuis 2024",
    problem:
      "Une avocate qui ouvre son cabinet et n'existe pas en ligne. Sa clientèle — dirigeants d'entreprise, investisseurs — se renseigne avant d'appeler : sans site, elle n'existait pas à ce moment-là.",
    done:
      "Un site qui installe son autorité dès la première seconde : positionnement clair sur le droit des sociétés et les procédures collectives, présentation de ses expertises, honoraires annoncés, et prise de rendez-vous accessible depuis n'importe quelle page.",
    tags: ['Site vitrine', 'Prise de rendez-vous', 'Référencement local', 'Mobile'],
    url: 'https://valentine-lacroix-avocat.fr/',
    image: {
      base: '/photos/projet-lacroix',
      largeurs: [600, 900, 1383],
      width: 1383,
      height: 868,
      alt: "Page d'accueil du site de Maître Valentine Lacroix, avocate en droit des sociétés.",
    },
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
      "Intervenu sur plusieurs des parties les plus complexes de la plateforme.",
      "Refonte complète de l'affichage Gantt de l'agenda : visualiser les fonctionnalités sur une frise temporelle, et déplacer les tâches directement à la souris.",
      'Conception et développement du microservice de gestion des groupes, de la modélisation des données à la mise en production.',
      "Back-end Java et Spring Boot sur une architecture microservices, déployée et diagnostiquée sur Kubernetes, livrée par des pipelines Jenkins.",
      'Modélisation des données avec JPA et PostgreSQL, selon une approche DDD.',
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
    when: '2023',
    title: "Jeu d'échecs en C, avec une IA qui y joue",
    sub: 'Projet personnel',
    points: [
      "Le jeu complet écrit en C : le plateau, les règles, les coups légaux.",
      "Une intelligence artificielle capable de jouer une partie entière contre un adversaire humain.",
    ],
    tags: ['C', 'Algorithmique', 'IA'],
  },
  {
    when: '2023 — 2026',
    title: 'École 42 Lyon',
    sub: 'Ingénierie logicielle par projets · piscine en juillet 2023, tronc commun terminé',
    points: [
      "Formation sans professeurs : on apprend en construisant, et chaque projet est validé par les autres étudiants.",
      'Beaucoup de programmation bas niveau, en C et en C++ : gestion mémoire, processus, réseau, assembleur — tout écrit de zéro, sans bibliothèque.',
      'Projets marquants : un serveur HTTP, un shell Unix, un moteur de ray tracing, et une application web complète.',
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
  photos: [
    {
      base: '/photos/vtt-course',
      largeurs: [500, 800, 1100],
      width: 1100,
      height: 1084,
      alt: "Raphaël Perrot en course de VTT cross-country, en tenue d'équipe, sur un single en sous-bois.",
      legende: 'En course de cross-country.',
    },
    {
      base: '/photos/velo-alpha',
      largeurs: [500, 800, 1200],
      width: 1200,
      height: 900,
      alt: "Vélo de route Alpha Aero SL : cadre carbone bleu nuit, roues à profil haut, posé dans l'herbe au bord d'une route.",
      legende: "Mon vélo de route, un Alpha Aero SL. Et oui, c'est une bouteille d'eau dans le porte-bidon : je venais de l'acheter et je n'avais pas encore de gourde. Les puristes m'ont pardonné depuis.",
    },
  ],
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
    "Ce que je fais le mieux, c'est la partie invisible : la logique, les données, ce qui fait qu'un outil tient la charge et ne perd rien. J'ai appris le métier par le bas — en C et en C++, à écrire de zéro ce que les autres importent — et c'est là que j'ai pris l'habitude de comprendre ce que fait vraiment le code que j'écris.",
    "J'ai commencé à travailler tôt, en cuisine à la guinguette de Muret Plage. Le travail n'a jamais été une corvée pour moi, et ça n'a pas changé : je donne tout à ce que j'entreprends, c'est la seule façon que je connaisse. Ma plus grande satisfaction n'est pas de réussir facilement, c'est d'atteindre un objectif pour lequel je me suis donné à fond.",
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

const servicesPage = {
  eyebrow: 'Services',
  title: 'Ce que je peux construire pour vous',
  intro:
    "Chaque métier a ses contraintes. Voici concrètement ce que je sais faire, et dans quel cas c'est la bonne réponse.",
  franchise:
    "Certaines de ces prestations, je les ai déjà livrées. D'autres s'appuient sur ce que je construis au quotidien en entreprise, sur une plateforme utilisée par de vraies sociétés. Si vous me demandez quelque chose que je n'ai jamais fait, je vous le dirai avant de m'engager — et je vous dirai aussi si quelqu'un d'autre est mieux placé.",
  blocs: [
    {
      titre: 'Logiciel métier sur mesure',
      pour: "Vous faites tourner votre activité sur un tableur qui a atteint ses limites.",
      texte:
        "Je développe une application web adaptée à votre façon de travailler : gestion de stock, planning, suivi de chantier, base clients. Accessible depuis n'importe quel navigateur, sans installation, avec vos données hébergées en France.",
      exemples: [
        'Gestion de stock et inventaire',
        'Planning et affectation des équipes',
        'Suivi de commandes ou de chantiers',
        'Base clients et historique',
        'Tableaux de bord et exports',
      ],
    },
    {
      titre: 'Connexion entre vos logiciels',
      pour: 'Vos outils ne se parlent pas et vous faites le lien à la main.',
      texte:
        "Caisse, comptabilité, boutique en ligne, agenda, logiciel de devis : je les connecte pour que l'information circule toute seule. C'est mon métier au quotidien sur une plateforme utilisée par des entreprises.",
      exemples: [
        'Synchronisation entre caisse et boutique en ligne',
        'Export vers votre comptable',
        'Connexion à votre agenda',
        'Reprise et migration de vos données',
        "Création d'une API pour vos partenaires",
      ],
    },
    {
      titre: 'Automatisation des tâches répétitives',
      pour: 'Vous passez vos soirées à recopier les mêmes informations.',
      texte:
        "On identifie ce qui vous prend du temps chaque semaine, et je le fais faire par la machine. Souvent la meilleure dépense : quelques jours de développement contre plusieurs heures récupérées chaque mois.",
      exemples: [
        'Devis et factures générés automatiquement',
        'Relances de paiement',
        'Rappels de rendez-vous par SMS ou e-mail',
        'Synchronisation entre vos outils',
        'Rapports envoyés chaque semaine',
      ],
    },
    {
      titre: 'Site vitrine',
      pour: "Vos clients vous cherchent sur Google et ne vous trouvent pas.",
      texte:
        "Un site qui présente votre activité, vos réalisations et vos coordonnées, pensé pour être trouvé sur les recherches locales. Rapide à charger, lisible sur téléphone, et modifiable par vous une fois livré.",
      exemples: [
        'Présentation de vos prestations',
        'Galerie de réalisations',
        'Formulaire de contact et prise de rendez-vous',
        'Référencement local (Google, fiche établissement)',
        'Mentions légales et conformité RGPD',
      ],
    },
    {
      titre: 'Boutique en ligne Shopify',
      pour: 'Vous vendez des produits et vous voulez les proposer en ligne.',
      texte:
        "Je monte votre boutique sur Shopify : fiches produits, paiement sécurisé, livraison, codes promo, espace client. Vous gérez ensuite vos produits et vos prix vous-même, depuis une interface simple, sans dépendre de moi pour le quotidien.",
      exemples: [
        'Catalogue et fiches produits',
        'Paiement par carte, virement ou en plusieurs fois',
        'Suivi des commandes et des stocks',
        'Configurateur de produit sur mesure',
        'Connexion à votre logiciel de caisse ou de comptabilité',
      ],
    },
    {
      titre: 'Application mobile',
      pour: "Vos clients ou vos équipes ont besoin de l'outil dans leur poche.",
      texte:
        "Je développe des applications web installables sur téléphone : l'utilisateur l'ajoute à son écran d'accueil et s'en sert comme d'une application classique, y compris hors connexion. Pas de passage par l'App Store, donc pas de frais ni de délais de validation.",
      exemples: [
        'Installation directe depuis le navigateur',
        'Fonctionnement hors connexion',
        'Notifications',
        'Accès caméra et géolocalisation',
        'Une seule version pour iPhone et Android',
      ],
    },
    {
      titre: "Intégration d'intelligence artificielle",
      pour: "Vous recevez trop de demandes, ou vous rédigez toujours les mêmes réponses.",
      texte:
        "Tri automatique des demandes, réponses préremplies, extraction d'informations depuis des documents, assistant qui répond aux questions courantes de vos clients. Je privilégie les solutions sobres : le modèle le plus léger qui fait le travail, pas le plus cher.",
      exemples: [
        'Tri et priorisation des demandes entrantes',
        'Extraction de données depuis des PDF ou des photos',
        'Assistant de réponse aux questions fréquentes',
        'Rédaction assistée de vos fiches produits',
        "Choix du modèle selon le coût réel d'usage",
      ],
    },
    {
      titre: 'Reprise et maintenance',
      pour: "Vous avez déjà un site, mais il est lent, cassé, ou plus personne ne s'en occupe.",
      texte:
        "Je reprends l'existant plutôt que de tout refaire quand c'est possible : correction de bugs, mise à jour de sécurité, amélioration de la vitesse, remise aux normes d'accessibilité et de RGPD.",
      exemples: [
        'Diagnostic et devis de reprise',
        'Correction de bugs et mises à jour',
        'Optimisation de la vitesse de chargement',
        'Sauvegardes et sécurisation',
        'Formation pour que vous repreniez la main',
      ],
    }
  ],
  aussi: {
    titre: 'Et aussi',
    items: [
      ['Référencement et vitesse', "Audit, correction et suivi : être trouvé sur Google et charger vite."],
      ['Accessibilité et RGPD', "Mise en conformité : contraste, navigation au clavier, mentions légales, cookies."],
      ['Hébergement et sauvegardes', "Mise en place, nom de domaine, certificat, sauvegardes automatiques."],
      ['Tableaux de bord', "Vos chiffres au même endroit, mis à jour tout seuls."],
      ['Formation et accompagnement', "Une heure pour que vous repreniez la main sur votre outil."],
      ['Conseil avant projet', "Un regard technique sur votre idée, avant de dépenser quoi que ce soit."],
    ],
  },
  stack: {
    titre: 'Les technologies que je maîtrise',
    texte:
      "Pour information, si vous travaillez déjà avec un prestataire technique. Sinon, ne vous en occupez pas : le choix de la technologie est mon travail, pas le vôtre.",
    groupes: [
      ['Back-end', ['Java', 'Spring Boot', 'Node.js', 'PHP', 'Python']],
      ['Front-end', ['React', 'JavaScript', 'HTML / CSS']],
      ['Données', ['PostgreSQL', 'JPA / Hibernate', 'SQL']],
      ['E-commerce', ['Shopify', 'Stripe']],
      ['Infrastructure', ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'OVH', 'Linux']],
    ],
  },
  cta: {
    titre: 'Votre besoin ne rentre dans aucune case ?',
    texte: "C'est souvent le cas, et c'est plutôt bon signe. Décrivez-le moi, je vous dirai franchement si je suis la bonne personne.",
    bouton: 'Me décrire votre besoin',
  },
};

const contactPage = {
  eyebrow: 'Contact',
  title: 'Parlons de votre projet',
  intro:
    "Décrivez-moi en quelques lignes ce qui vous ferait gagner du temps. Je vous réponds sous 24 h ouvrées, et le premier échange ne vous engage à rien.",
  ouDirect: 'Ou directement',
  appel: 'Par téléphone',
  mail: 'Par e-mail',
  formTitre: 'Votre demande',
};

export default { contactPage, servicesPage, site, nav, hero, services, projects, method, experience, sport, about, portrait, contactSection, legal };
