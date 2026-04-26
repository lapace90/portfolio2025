// src/data/projectsMeta.js
//
// Métadonnées des 6 projets — infos techniques qui ne se traduisent pas
// (status, année, stack, URLs, image cover, gradient placeholder).
// Le contenu textuel (titre, description, highlights, page détail)
// est dans src/locales/i18n.js, indexé par le même `id`.

export const projectsMeta = [
  {
    id: 'pharmalink',
    status: 'mvp',
    year: '2025 — en cours',
    techStack: ['React Native', 'Expo', 'Supabase', 'PostgreSQL', 'Stripe', 'Vue.js'],
    demoUrl: null,
    githubUrl: null,
    cover: '/images/LogoPharmaLink.png',
    theme: {
      gradientFrom: '#10b981',
      gradientTo: '#0891b2',
      initials: 'PL',
    },
  },
  {
    id: 'bottega',
    status: 'production',
    year: '2026',
    techStack: ['Laravel 12', 'Filament 3', 'PostgreSQL', 'Blade', 'Docker', 'Nginx'],
    demoUrl: 'https://labottegadimontopoli.it',
    githubUrl: 'https://github.com/lapace90/labottega',
    cover: '/images/bottega2.jpeg',
    theme: {
      gradientFrom: '#c2410c',
      gradientTo: '#a16207',
      initials: 'BG',
    },
  },
  {
    id: 'campcameleonx',
    status: 'production',
    year: '2024–2025',
    techStack: ['Laravel 12', 'API Platform', 'Vue.js 3', 'PostgreSQL', 'Docker', 'Stripe', 'Nginx'],
    demoUrl: 'https://campcameleonx.ipace.dev/home',
    githubUrl: 'https://github.com/lapace90/CampCameleonX',
    cover: '/images/desert1.jpg',
    theme: {
      gradientFrom: '#d97706',
      gradientTo: '#92400e',
      initials: 'CC',
    },
  },
  {
    id: 'tuttoscuola',
    status: 'alpha',
    year: '2025',
    techStack: ['React Native', 'Expo', 'Supabase', 'PostgreSQL', 'EAS Build'],
    demoUrl: null,
    githubUrl: 'https://github.com/lapace90/tuttoscuola',
    cover: '/images/LogoTuttoScuola.png',
    theme: {
      gradientFrom: '#2563eb',
      gradientTo: '#7c3aed',
      initials: 'TS',
    },
  },
  {
    id: 'pinkkiwi',
    status: 'production',
    year: '2024–2025',
    techStack: ['Symfony 6.4', 'PHP 8.2', 'MySQL', 'Twig', 'Stripe', 'Docker'],
    demoUrl: 'https://shop.ipace.dev',
    githubUrl: 'https://github.com/lapace90/myNewBoutique',
    cover: '/images/PinkKiwiLogo.png',
    theme: {
      gradientFrom: '#ec4899',
      gradientTo: '#84cc16',
      initials: 'PK',
    },
  },
  {
    id: 'carpegram',
    status: 'v1',
    year: '2024–2025',
    techStack: ['React Native', 'Expo', 'Supabase', 'PostGIS', 'Google Maps'],
    demoUrl: null,
    githubUrl: 'https://github.com/lapace90/CarpeGram',
    cover: '/images/carpa.png',
    theme: {
      gradientFrom: '#059669',
      gradientTo: '#0e7490',
      initials: 'CG',
    },
  },
]

// Helper : trouve les projets précédent/suivant pour la navigation entre pages détail
export const getPrevNext = (currentId) => {
  const idx = projectsMeta.findIndex(p => p.id === currentId)
  return {
    prev: idx > 0 ? projectsMeta[idx - 1] : null,
    next: idx < projectsMeta.length - 1 ? projectsMeta[idx + 1] : null,
  }
}