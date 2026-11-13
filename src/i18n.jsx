import { createContext, useContext } from 'react';
import fr from './content.fr.js';
import en from './content.en.js';

export const dictionnaires = { fr, en };

export const langues = [
  { code: 'fr', label: 'FR', nom: 'Français', racine: '/', legal: '/mentions-legales' },
  { code: 'en', label: 'EN', nom: 'English', racine: '/en', legal: '/en/legal-notice' },
];

export const LangContext = createContext('fr');

export function useLang() {
  return useContext(LangContext);
}

export function useContent() {
  return dictionnaires[useContext(LangContext)];
}

/** Déduit la langue de l'URL : tout ce qui commence par /en est anglais. */
export function langFromPath(path) {
  const p = (path || '/').replace(/\/+$/, '') || '/';
  return p === '/en' || p.startsWith('/en/') ? 'en' : 'fr';
}

/** Vrai si l'URL correspond à la page des mentions légales, dans l'une ou l'autre langue. */
export function isLegalPath(path) {
  const p = (path || '/').replace(/\/+$/, '') || '/';
  return langues.some((l) => l.legal === p);
}
