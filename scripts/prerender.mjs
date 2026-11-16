// Pré-génère le HTML de chaque page, dans chaque langue, à la compilation.
//
// Sans ça, le HTML servi ne contient que <div id="root"></div> : aucun texte
// pour les moteurs de recherche, qui doivent exécuter le JavaScript avant de
// voir quoi que ce soit.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { render } = await import(resolve(racine, 'dist-ssr/entry-server.js'));
const fr = (await import(resolve(racine, 'src/content.fr.js'))).default;
const en = (await import(resolve(racine, 'src/content.en.js'))).default;

const SITE = 'https://raphaelperrot.com';

const pages = [
  {
    route: '/', lang: 'fr', fichier: 'dist/index.html', url: `${SITE}/`,
    titre: fr.site.title, description: fr.site.description, alt: `${SITE}/en`,
  },
  {
    route: '/mentions-legales', lang: 'fr', fichier: 'dist/mentions-legales/index.html',
    url: `${SITE}/mentions-legales`,
    titre: 'Mentions légales — Raphaël Perrot',
    description: "Mentions légales du site raphaelperrot.com : éditeur, hébergeur, propriété intellectuelle et traitement des données personnelles.",
    alt: `${SITE}/en/legal-notice`,
  },
  {
    route: '/services', lang: 'fr', fichier: 'dist/services/index.html',
    url: `${SITE}/services`,
    titre: 'Services — sites, logiciels sur mesure et automatisations · Raphaël Perrot',
    description: "Boutique Shopify, site vitrine, logiciel métier sur mesure, automatisation des tâches répétitives et reprise de site existant. Développeur freelance à Toulouse.",
    alt: `${SITE}/en/services`,
  },
  {
    route: '/contact', lang: 'fr', fichier: 'dist/contact/index.html',
    url: `${SITE}/contact`,
    titre: 'Contact — Raphaël Perrot, développeur freelance à Toulouse',
    description: "Décrivez votre projet en quelques lignes. Réponse sous 24 h ouvrées, premier échange gratuit et sans engagement. Développeur freelance à Toulouse.",
    alt: `${SITE}/en/contact`,
  },
  {
    route: '/en', lang: 'en', fichier: 'dist/en/index.html', url: `${SITE}/en`,
    titre: en.site.title, description: en.site.description, alt: `${SITE}/`,
  },
  {
    route: '/en/services', lang: 'en', fichier: 'dist/en/services/index.html',
    url: `${SITE}/en/services`,
    titre: 'Services — websites, custom software and automation · Raphaël Perrot',
    description: 'Shopify stores, brochure sites, custom business software, automation of repetitive work and taking over existing sites. Freelance developer near Toulouse, France.',
    alt: `${SITE}/services`,
  },
  {
    route: '/en/contact', lang: 'en', fichier: 'dist/en/contact/index.html',
    url: `${SITE}/en/contact`,
    titre: 'Contact — Raphaël Perrot, freelance developer',
    description: 'Describe your project in a few lines. Reply within one working day, first conversation free and with no obligation.',
    alt: `${SITE}/contact`,
  },
  {
    route: '/en/legal-notice', lang: 'en', fichier: 'dist/en/legal-notice/index.html',
    url: `${SITE}/en/legal-notice`,
    titre: 'Legal notice — Raphaël Perrot',
    description: 'Legal notice for raphaelperrot.com: publisher, host, intellectual property and personal data.',
    alt: `${SITE}/mentions-legales`,
  },
];

// Une 404 par langue. Apache ne sert qu'un seul ErrorDocument par dossier :
// public/en/.htaccess déclare la sienne, pour qu'un visiteur anglais qui se
// trompe d'URL ne tombe pas sur une page en français.
pages.push({
  route: '/404', lang: 'fr', fichier: 'dist/404.html', url: `${SITE}/404`,
  titre: "Page introuvable — Raphaël Perrot",
  description: "Cette page n'existe pas ou a été déplacée.",
  alt: `${SITE}/`, noindex: true,
});

pages.push({
  route: '/en/404', lang: 'en', fichier: 'dist/en/404.html', url: `${SITE}/en/404`,
  titre: 'Page not found — Raphaël Perrot',
  description: 'This page does not exist or has been moved.',
  alt: `${SITE}/`, noindex: true,
});

const ALT_FR = 'Raphaël Perrot, développeur freelance à Toulouse';
const ALT_EN = 'Raphaël Perrot, freelance developer in Toulouse';

const gabarit = readFileSync(resolve(racine, 'dist/index.html'), 'utf-8');
const echappe = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

for (const p of pages) {
  const corps = render(p.route);
  const fr_url = p.lang === 'fr' ? p.url : p.alt;
  const en_url = p.lang === 'en' ? p.url : p.alt;

  let html = gabarit
    .replace('<html lang="fr">', `<html lang="${p.lang}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${echappe(p.titre)}</title>`)
    .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${echappe(p.description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${p.url}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${p.url}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${echappe(p.titre)}" />`)
    .replace(/<meta property="og:locale" content="[^"]*" \/>/, `<meta property="og:locale" content="${p.lang === 'fr' ? 'fr_FR' : 'en_GB'}" />`)
    // og:description est écrit sur plusieurs lignes dans index.html : sans le
    // drapeau /s, il n'était jamais remplacé et les pages anglaises
    // partageaient une description française sur les réseaux sociaux.
    .replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/s, `<meta property="og:description" content="${echappe(p.description)}" />`)
    .replace(/<meta property="og:image:alt" content="[^"]*" \/>/, `<meta property="og:image:alt" content="${echappe(p.lang === 'fr' ? ALT_FR : ALT_EN)}" />`)
    .replace('<div id="root"></div>', `<div id="root">${corps}</div>`);

  // Indique à Google que les deux versions sont la même page en deux langues.
  const hreflang =
    `    <link rel="alternate" hreflang="fr" href="${fr_url}" />\n` +
    `    <link rel="alternate" hreflang="en" href="${en_url}" />\n` +
    `    <link rel="alternate" hreflang="x-default" href="${fr_url}" />\n`;
  // La page d'erreur ne doit pas être indexée ni déclarer d'équivalent de langue.
  html = p.noindex
    ? html.replace('</head>', '    <meta name="robots" content="noindex" />\n  </head>')
    : html.replace('</head>', hreflang + '  </head>');

  const chemin = resolve(racine, p.fichier);
  mkdirSync(dirname(chemin), { recursive: true });
  writeFileSync(chemin, html);

  const mots = corps.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  console.log(`  ${p.route.padEnd(20)} ${p.lang}  → ${p.fichier.padEnd(36)} ${mots} mots`);
}
