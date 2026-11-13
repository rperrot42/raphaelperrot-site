import { contact } from '../content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>© {new Date().getFullYear()} Raphaël Perrot · Développeur freelance</span>
        <span className="footer-links">
          <span>SIRET&nbsp;: {contact.siret}</span>
          <a href="/mentions-legales">Mentions légales</a>
        </span>
      </div>
    </footer>
  );
}
