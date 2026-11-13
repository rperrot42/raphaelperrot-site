import { createContext, useContext } from 'react';
import fr from './content.fr.js';
import en from './content.en.js';

export const dictionnaires = { fr, en };

export const langues = [
  { code: 'fr', label: 'FR', nom: 'Français', racine: '/', legal: '/mentions-legales', services: '/services', contact: '/contact' },
  { code: 'en', label: 'EN', nom: 'English', racine: '/en', legal: '/en/legal-notice', services: '/en/services', contact: '/en/contact' },
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

function normalise(path) {
  return (path || '/').replace(/\/+$/, '') || '/';
}

/** Vrai si l'URL correspond à la page des mentions légales, dans l'une ou l'autre langue. */
export function isLegalPath(path) {
  return langues.some((l) => l.legal === normalise(path));
}

/** Vrai si l'URL correspond à la page des services, dans l'une ou l'autre langue. */
export function isServicesPath(path) {
  return langues.some((l) => l.services === normalise(path));
}

/** Vrai si l'URL correspond à la page de contact, dans l'une ou l'autre langue. */
export function isContactPath(path) {
  return langues.some((l) => l.contact === normalise(path));
}
