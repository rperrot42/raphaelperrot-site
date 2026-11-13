// Apparition progressive des sections au défilement.
//
// Deux garde-fous, appris à la dure :
//
// 1. La fonction doit être appelée APRÈS le rendu de React. Appelée avant,
//    elle ne trouve aucun élément à observer, pose quand même la classe qui
//    masque, et la page reste blanche. C'est invisible en production — où le
//    HTML est pré-généré, donc déjà présent — mais fatal en développement.
//
// 2. Un filet de sécurité réaffiche tout au bout de 2,5 secondes. Quoi qu'il
//    arrive, le contenu ne peut pas rester caché.

const DELAI_SECOURS = 2500;

export function initReveal() {
  const racine = document.documentElement;

  const sansAnimation =
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  if (sansAnimation || !('IntersectionObserver' in window)) return;

  const cibles = document.querySelectorAll('[data-reveal]');
  // Rien à animer : surtout ne pas poser la classe qui masque.
  if (cibles.length === 0) return;

  racine.classList.add('js-reveal');

  const toutAfficher = () => {
    for (const c of document.querySelectorAll('[data-reveal]')) {
      c.classList.add('est-visible');
    }
  };

  const observateur = new IntersectionObserver(
    (entrees) => {
      for (const e of entrees) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('est-visible');
        observateur.unobserve(e.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
  );

  for (const c of cibles) {
    // Ce qui est déjà à l'écran au chargement s'affiche sans attendre.
    if (c.getBoundingClientRect().top < window.innerHeight * 0.9) {
      c.classList.add('est-visible');
    } else {
      observateur.observe(c);
    }
  }

  const secours = setTimeout(toutAfficher, DELAI_SECOURS);
  window.addEventListener('pagehide', () => clearTimeout(secours), { once: true });
}
