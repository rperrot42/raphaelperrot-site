import { useState } from 'react';
import Logo from './Logo.jsx';
import { useContent, useLang, langues } from '../i18n.jsx';

export default function Header({ home = true }) {
  const { nav } = useContent();
  const lang = useLang();
  const courante = langues.find((l) => l.code === lang);
  const autre = langues.find((l) => l.code !== lang);
  const [open, setOpen] = useState(false);
  // Depuis les mentions légales, les ancres doivent repartir de l'accueil
  // de la langue courante.
  const prefix = home ? '' : courante.racine;

  return (
    <header className="header">
      <a className="skip" href="#main">Aller au contenu</a>
      <div className="wrap header-inner">
        <a className="brand" href={home ? '#top' : courante.racine} onClick={() => setOpen(false)}>
          <Logo size={46} />
          <strong>Raphaël Perrot</strong>
        </a>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <nav id="main-nav" className={open ? 'nav open' : 'nav'} aria-label="Navigation principale">
          {nav
            .filter((item) => item.id !== 'contact')
            .map((item) => (
              <a key={item.id} href={`${prefix}#${item.id}`} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          <a className="nav-cta" href={`${prefix}#contact`} onClick={() => setOpen(false)}>
            {lang === 'fr' ? 'Me contacter' : 'Get in touch'}
          </a>
          <a className="nav-lang" href={autre.racine} hrefLang={autre.code} lang={autre.code}>
            {autre.label}
            <span className="sr-only"> — {autre.nom}</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
