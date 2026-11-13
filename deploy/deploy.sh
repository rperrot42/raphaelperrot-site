#!/usr/bin/env bash
# Déploiement du site sur l'hébergement mutualisé OVH.
#
#   ./deploy/deploy.sh
#
# Le script construit le site puis synchronise dist/ avec le dossier www/
# du serveur. Les identifiants sont lus dans deploy/.env (jamais versionné).

set -euo pipefail
cd "$(dirname "$0")/.."

ENV_FILE="deploy/.env"

if [[ ! -f "$ENV_FILE" ]]; then
  cat <<MSG
Fichier $ENV_FILE manquant.

Copie le modèle et renseigne tes identifiants OVH :
  cp deploy/.env.example deploy/.env

Tu les trouves dans l'espace client OVH :
  Hébergements → ton hébergement → onglet FTP-SSH
MSG
  exit 1
fi

# shellcheck disable=SC1090
source "$ENV_FILE"

: "${OVH_HOST:?OVH_HOST manquant dans $ENV_FILE}"
: "${OVH_USER:?OVH_USER manquant dans $ENV_FILE}"
: "${OVH_PASSWORD:?OVH_PASSWORD manquant dans $ENV_FILE}"
REMOTE_DIR="${OVH_REMOTE_DIR:-/www}"
PROTOCOL="${OVH_PROTOCOL:-ftp}"   # ftp + TLS forcé (port 21, explicite) ; sftp possible aussi

if ! command -v lftp >/dev/null 2>&1; then
  echo "lftp est requis. Installe-le avec :  brew install lftp"
  exit 1
fi

echo "→ Construction du site"
npm run build

if [[ ! -f dist/.htaccess ]]; then
  echo "dist/.htaccess absent : le site serait déployé sans la réécriture d'URL."
  echo "Vérifie que public/.htaccess existe, puis relance."
  exit 1
fi

echo "→ Envoi vers $PROTOCOL://$OVH_HOST$REMOTE_DIR"

# --reverse  : on pousse du local vers le serveur
# --delete   : supprime sur le serveur les fichiers qui n'existent plus en local
# --verbose  : affiche chaque fichier transféré
lftp -c "
set ftp:ssl-force true;
set ftp:ssl-protect-data true;
set ssl:verify-certificate true;
set net:max-retries 3;
set net:timeout 15;
open -u '$OVH_USER','$OVH_PASSWORD' $PROTOCOL://$OVH_HOST;
mirror --reverse --delete --verbose --parallel=4 \
       --exclude-glob .DS_Store \
       dist/ $REMOTE_DIR;
bye
"

echo
echo "✓ Déployé. Vérifie https://raphaelperrot.com/ et https://raphaelperrot.com/mentions-legales"
