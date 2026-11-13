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

## Mettre en ligne (OVH mutualisé)

Le site est statique : il n'y a ni PHP ni base de données à configurer.

Deux voies existent dans ce dépôt. La première est automatique, la seconde sert de
repli et de dépannage.

### Voie 1 — automatique, à chaque push (`.github/workflows/deploy.yml`)

À chaque push sur `main`, GitHub compile le site et publie le contenu de `dist`
sur la branche **`deploy`**. L'hébergement OVH suit cette branche.

Rien à installer côté machine : `git push` suffit.

> **À vérifier avant de compter dessus :** cette voie suppose que ton offre OVH
> propose bien le déploiement depuis un dépôt Git. Toutes les offres mutualisées
> ne l'ont pas. Si l'option est absente de ton espace client, la voie 2 ci-dessous
> fonctionne partout.

### Voie 2 — manuelle, par FTP (`deploy/deploy.sh`)

**Une fois pour toutes :**

1. Installer l'outil de transfert : `brew install lftp`
2. Récupérer les identifiants FTP dans l'espace client OVH :
   **Hébergements → ton hébergement → onglet « FTP - SSH »**
3. `cp deploy/.env.example deploy/.env` puis renseigner `OVH_HOST`, `OVH_USER`, `OVH_PASSWORD`.
   `deploy/.env` est ignoré par git : les identifiants ne partent jamais sur GitHub.

**À chaque mise à jour :**

```bash
./deploy/deploy.sh
```

Le script construit le site et synchronise `dist/` avec `www/` sur le serveur.
`--delete` supprime côté serveur les fichiers qui n'existent plus en local : le serveur
reflète donc exactement `dist/`, sans résidus d'anciennes versions.

### Le domaine

Dans l'espace client OVH : **Hébergements → Multisite → Ajouter un domaine**,
pointer `raphaelperrot.com` sur le dossier `www`. Le certificat SSL (Let's Encrypt)
est fourni par OVH et peut mettre quelques heures à s'activer.

Une fois `https://raphaelperrot.com` vérifié, décommenter la ligne
`Strict-Transport-Security` dans `public/.htaccess`, puis redéployer.

### Ce que fait `public/.htaccess`

Vite le recopie tel quel dans `dist/`. Il gère :

- la redirection HTTP → HTTPS et `www` → domaine nu ;
- la réécriture des URL, **indispensable** pour que `/mentions-legales` fonctionne
  en accès direct (sans elle, Apache renvoie une 404) ;
- les en-têtes de sécurité ;
- le cache long sur les polices et les fichiers versionnés, et l'absence de cache
  sur `index.html` — sinon une mise en ligne continue de servir l'ancienne version.

### Vérifier après déploiement

```bash
curl -I https://raphaelperrot.com/                   # 200
curl -I https://raphaelperrot.com/mentions-legales   # 200, pas 404
curl -I https://www.raphaelperrot.com/               # 301 vers le domaine nu
```
