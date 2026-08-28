// modules.js — single source of truth for the sector cards on the hub.
// Add a fifth module by appending one entry here; nothing else needs to change.
//
// status: 'active'   → clickable, opens `url` in a new tab
//         'planned'  → shown with a "Planifié" badge, not clickable
//         'upcoming' → shown with an "À venir" badge, not clickable

export const MODULES = [
  {
    id: 'bacteriologie',
    name: 'Bactériologie',
    subtitle: 'Atlas de microbiologie clinique',
    status: 'active',
    url: 'https://metar-cl.github.io/bacteriomap/',
    accent: '#9a6b1f',
  },
  {
    id: 'diagnostic-moleculaire',
    name: 'Diagnostic moléculaire',
    subtitle: 'PCR · Séquençage · Biologie moléculaire',
    status: 'planned',
    accent: '#6b3fa0',
  },
  {
    id: 'serologie',
    name: 'Sérologie',
    subtitle: 'Immunologie infectieuse',
    status: 'planned',
    accent: '#2c5a8a',
  },
  {
    id: 'hygiene-hospitaliere',
    name: 'Hygiène hospitalière',
    subtitle: 'Prévention et contrôle de l’infection',
    status: 'upcoming',
    accent: '#2d6a6f',
  },
];

export const STATUS_LABELS = {
  planned: 'Planifié',
  upcoming: 'À venir',
};
