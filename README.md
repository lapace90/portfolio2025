# Portfolio Ilaria Pace

Portfolio personnel développé avec Vue.js 3, Vite et Tailwind CSS.

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build
```

## 📝 Personnalisation

### Ajouter des projets

Édite le fichier `src/App.vue` dans la section `<!-- Projets Section -->` pour ajouter tes projets.

### Ajouter ta photo

Remplace le cercle avec tes initiales par une vraie photo :
1. Place ta photo dans `/public/photo.jpg`
2. Remplace dans App.vue :
```vue
<div class="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
  IP
</div>
```
par :
```vue
<img src="/photo.jpg" alt="Ilaria Pace" class="w-64 h-64 rounded-full shadow-2xl object-cover">
```

### Ajouter ton CV

Place ton CV dans `/public/cv-ilaria-pace.pdf` et le lien de téléchargement fonctionnera automatiquement.

## 🌐 Déploiement

### Netlify (recommandé - gratuit)

1. Crée un compte sur [Netlify](https://netlify.com)
2. Connecte ton repo GitHub
3. Build command : `npm run build`
4. Publish directory : `dist`
5. Déploie !

### Vercel (alternative)

1. Crée un compte sur [Vercel](https://vercel.com)
2. Importe ton repo GitHub
3. Vercel détecte automatiquement Vite
4. Déploie !

### Domaine personnalisé

Tu peux acheter un domaine comme `ilariapace.dev` sur :
- Namecheap (~$10/an)
- OVH (~$10/an)
- Google Domains (~$12/an)

Et le connecter à Netlify ou Vercel (c'est gratuit et facile).

## 📦 Structure du projet

```
portfolio-ilaria/
├── public/          # Fichiers statiques (images, CV, etc.)
├── src/
│   ├── App.vue      # Composant principal
│   ├── main.js      # Point d'entrée
│   └── style.css    # Styles globaux Tailwind
├── index.html       # Template HTML
└── package.json     # Dépendances
```

## 🎨 Personnalisation des couleurs

Édite `tailwind.config.js` pour changer les couleurs :

```js
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',    // Bleu principal
      secondary: '#8b5cf6',  // Violet secondaire
    },
  },
}
```

## ✨ Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Navigation smooth scroll
- ✅ Animations et transitions
- ✅ Section projets avec badges de statut
- ✅ Section compétences organisée
- ✅ Section contact avec toutes les infos
- ✅ Footer professionnel
- ✅ Performance optimisée avec Vite

---

Fait avec ❤️ par Ilaria Pace
