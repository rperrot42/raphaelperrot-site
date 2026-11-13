// Apparition progressive des sections au défilement.
//
// La classe est posée par JavaScript, jamais dans le HTML : si le script
// ne s'exécute pas, tout reste visible. Une animation ne doit jamais
// pouvoir masquer le contenu.

export function initReveal() {
  const racine = document.documentElement;

  const sansAnimation =
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  if (sansAnimation || !('IntersectionObserver' in window)) return;

  racine.classList.add('js-reveal');

  const cibles = document.querySelectorAll('[data-reveal]');
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
}
