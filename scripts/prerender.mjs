// Pré-génère le HTML de chaque page au moment de la compilation.
//
// Sans ça, le HTML servi ne contient que <div id="root"></div> : aucun texte
// pour les moteurs de recherche, qui doivent exécuter le JavaScript avant de
// voir quoi que ce soit. Avec ça, le contenu est lisible immédiatement.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// fileURLToPath plutôt que import.meta.dirname, absent avant Node 20.11
const racine = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { render } = await import(resolve(racine, 'dist-ssr/entry-server.js'));

const pages = [
  { route: '/', fichier: 'dist/index.html' },
  { route: '/mentions-legales', fichier: 'dist/mentions-legales/index.html' },
];

const gabarit = readFileSync(resolve(racine, 'dist/index.html'), 'utf-8');

for (const { route, fichier } of pages) {
  const html = render(route);
  const sortie = gabarit.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`
  );
  const chemin = resolve(racine, fichier);
  mkdirSync(dirname(chemin), { recursive: true });
  writeFileSync(chemin, sortie);

  const mots = html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  console.log(`  ${route.padEnd(20)} → ${fichier.padEnd(34)} ${mots} mots`);
}
