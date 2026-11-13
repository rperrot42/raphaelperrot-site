// Données identiques dans toutes les langues.

export const contact = {
  email: 'raphael@raphaelperrot.com',
  phone: '07 69 27 60 73',
  phoneLink: 'tel:+33769276073',

  // L'accent est volontairement encodé (%C3%AB = « ë ») : c'est la forme
  // valide dans une URL, qui fonctionne partout.
  linkedin: 'https://www.linkedin.com/in/rapha%C3%ABl-perrot-104762290',
  github: 'https://github.com/rperrot42',

  siret: '985 308 931 00015',
  address: '232 route de Saint-Sulpice, 31410 Mauzac',

  // Le formulaire est traité par public/contact.php, hébergé chez OVH.
  // Aucun service tiers, aucun compte à créer.
  formEndpoint: '/contact.php',
};
