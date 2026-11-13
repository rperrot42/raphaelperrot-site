import { useState } from 'react';
import Logo from './Logo.jsx';
import { nav } from '../content.js';

export default function Header({ home = true }) {
  const [open, setOpen] = useState(false);
  const prefix = home ? '' : '/';

  return (
    <header className="header">
      <a className="skip" href="#main">Aller au contenu</a>
      <div className="wrap header-inner">
        <a className="brand" href={home ? '#top' : '/'} onClick={() => setOpen(false)}>
          <Logo />
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
          {nav.map((item) => (
            <a key={item.id} href={`${prefix}#${item.id}`} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
