# MicroLearn

Hub d'accueil de la plateforme de formation de l'Institut de Microbiologie du CHUV.

MicroLearn est un simple lanceur vers les modules de formation. Il n'a pas de backend, pas de
routing, pas de données dynamiques : les secteurs affichés sont codés en dur dans
`src/data/modules.js`.

## Ajouter un module

Ajouter une entrée dans le tableau `MODULES` de `src/data/modules.js` :

```js
{
  id: 'mon-module',
  name: 'Nom du secteur',
  subtitle: 'Sous-titre court',
  status: 'active' | 'planned' | 'upcoming',
  url: 'https://…',   // requis seulement si status === 'active'
  accent: '#rrggbb',
}
```

## Développement

```bash
npm install
npm run dev
```

## Déploiement

Le déploiement sur GitHub Pages se fait automatiquement via GitHub Actions à chaque push sur
`main` (voir `.github/workflows/deploy.yml`).
