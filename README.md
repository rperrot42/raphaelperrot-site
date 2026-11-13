# raphaelperrot.com

Site vitrine de Raphaël Perrot, développeur freelance. React 18 + Vite, sans dépendance superflue.

## Lancer en local

```bash
npm install
npm run dev
```

## Modifier le contenu

Tout se passe dans **`src/content.js`** : services, réalisations, méthode, parcours, vélo, contact, mentions légales.
Aucune autre modification n'est nécessaire pour changer un texte.

### À compléter avant la mise en ligne

Dans `src/content.js` :

| Champ | Pourquoi |
|---|---|
| `contact.siret` | Obligatoire dans les mentions légales (LCEN). Tant qu'il est vide, le pied de page ne l'affiche pas. |
| `contact.city` | Ville + code postal, pour les mentions légales. |
| `contact.formEndpoint` | Active le formulaire de contact. Crée un formulaire gratuit sur [formspree.io](https://formspree.io) et colle l'URL fournie. Tant qu'il est vide, seuls les boutons e-mail et téléphone s'affichent. |

### Ajouter une réalisation

Copier un bloc dans `projects` (`src/content.js`) : `title`, `sub`, `problem`, `done`, `tags`, `url`.
C'est la section que regardent le plus les prospects — c'est elle qu'il faut nourrir en priorité.

### Ajouter une vidéo VTT

Coller l'identifiant YouTube (la partie après `v=`) dans `sport.youtubeId`.

## Structure

- `src/components/` : une section = un composant (`Hero`, `Services`, `Work`, `Method`, `Experience`, `Sport`, `Contact`…)
- `src/pages/Legal.jsx` : page `/mentions-legales`
- `src/styles.css` : couleurs (variables CSS en haut) et mise en page
- `src/fonts.css` + `public/fonts/` : polices auto-hébergées (aucune requête vers Google, aucun cookie)
- `public/og.png` : aperçu affiché quand le lien est partagé (WhatsApp, LinkedIn, SMS…)
- `public/robots.txt`, `public/sitemap.xml` : référencement
- `vercel.json` : réécriture de `/mentions-legales` et en-têtes de sécurité

## Accessibilité

Les couleurs de `src/styles.css` respectent le contraste WCAG AA (4.5:1 minimum sur le texte).
Si tu modifies `--green` ou `--accent`, vérifie le contraste avant de publier.

## Mettre en ligne (Vercel)

1. Pousser le projet sur GitHub.
2. Sur vercel.com : Add New → Project → importer le dépôt. Vercel détecte Vite tout seul (build `npm run build`, dossier `dist`).
3. Settings → Domains → ajouter `raphaelperrot.com`, puis créer chez OVH les enregistrements DNS indiqués par Vercel (sans toucher aux lignes MX du mail).

## Hébergement OVH (via GitHub)

À chaque push sur `main`, la GitHub Action `.github/workflows/deploy.yml` compile le site et pousse `dist` sur la branche `deploy`. L'hébergement OVH (site `www`) suit cette branche via son intégration Git + webhook.
`public/.htaccess` reprend sur Apache ce que fait `vercel.json` (route `/mentions-legales`, en-têtes de sécurité, cache des polices) et redirige vers `https://raphaelperrot.com`.
