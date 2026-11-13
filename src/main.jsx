import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import './fonts.css';
import './styles.css';
import { initReveal } from './reveal.js';

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si le serveur a déjà envoyé le HTML, on l'hydrate au lieu de tout refaire.
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}

initReveal();
