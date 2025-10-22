<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div class="container-custom">
        <div class="flex justify-between items-center py-5">
          <div
            class="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold shadow-lg">
            IP
          </div>
          <div class="hidden md:flex gap-8">
            <a href="#accueil"
              class="nav-link text-gray-700 hover:text-primary transition-colors duration-200">Accueil</a>
            <a href="#projets"
              class="nav-link text-gray-700 hover:text-primary transition-colors duration-200">Projets</a>
            <a href="#competences"
              class="nav-link text-gray-700 hover:text-primary transition-colors duration-200">Compétences</a>
            <a href="#contact"
              class="nav-link text-gray-700 hover:text-primary transition-colors duration-200">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="accueil" class="section pt-40 pb-32 min-h-screen flex items-center hero-gradient">
      <div class="container-custom">
        <div class="grid md:grid-cols-5 gap-16 items-center">
          <div class="md:col-span-3">
            <div
              class="inline-block mb-8 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium animate-fade-in">
              Disponible pour de nouveaux projets
            </div>

            <h2 class="text-5xl md:text-6xl font-bold mb-10 animate-fade-in leading-tight text-white">
              Bonjour, je suis <br>
              <span class="text-white" style="font-size: 5rem;">Ilaria Pace</span>
            </h2>

            <p class="text-2xl md:text-3xl text-white/95 font-semibold mb-10 animate-fade-in-delay-1">
              Développeuse d'Applications Full-Stack
            </p>

            <p class="text-lg md:text-xl text-white/90 leading-relaxed mb-12 animate-fade-in-delay-2">
              Passionnée par la création d'applications web performantes et intuitives. Spécialisée en
              <strong>PHP</strong>, <strong>JavaScript</strong> et <strong>frameworks modernes</strong>, je transforme
              les besoins métier en solutions techniques élégantes et efficaces.
            </p>

            <div class="flex gap-5 flex-wrap animate-fade-in-delay-3">
              <a href="#projets"
                class="bg-white text-primary px-9 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Voir mes projets
              </a>
              <a href="#contact"
                class="border-2 border-white text-white px-9 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300">
                Me contacter
              </a>
            </div>
          </div>

          <div class="md:col-span-2 flex justify-center">
            <div
              class="w-72 h-72 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/40 flex items-center justify-center text-white text-7xl font-bold shadow-2xl animate-float avatar-circle">
              IP
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projets Section -->
    <section id="projets" class="section bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div class="container-custom">
        <h2 class="section-title">Mes Projets</h2>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- CampCameleonX -->
          <div class="card-glass hover-3d">
            <div class="mb-6 flex gap-2">
              <span
                class="inline-flex items-center gap-1.5 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full status-badge">
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                En production
              </span>
              <span
                class="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">
                2025
              </span>
            </div>
            <h3 class="text-3xl font-bold mb-4 text-gray-900">CampCameleonX</h3>
            <p class="text-gray-600 mb-6 text-lg leading-relaxed">
              Plateforme de réservation pour établissements touristiques avec système de devis en ligne et backoffice de
              gestion complet.
            </p>
            <div class="mb-6">
              <h4 class="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Fonctionnalités</h4>
              <ul class="text-base text-gray-700 space-y-2">
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-1">▸</span>
                  <span>Création et validation de devis dynamiques</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-1">▸</span>
                  <span>Gestion des réservations</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-1">▸</span>
                  <span>Backoffice d'administration</span>
                </li>
              </ul>
            </div>
            <div class="mb-6">
              <h4 class="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Stack technique</h4>
              <div class="flex flex-wrap gap-2">
                <span class="badge">API Platform</span>
                <span class="badge">Laravel</span>
                <span class="badge">Vue.js</span>
                <span class="badge">Docker</span>
              </div>
            </div>
            <div class="flex gap-4 pt-4 border-t border-gray-200">
              <a href="http://51.75.31.34:5173/home" target="_blank"
                class="text-primary hover:text-blue-700 font-semibold flex items-center gap-1 group">
                Voir la démo
                <span class="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="https://github.com/lapace90/CampCameleonX" target="_blank"
                class="text-gray-600 hover:text-gray-900 font-semibold flex items-center gap-1 group">
                GitHub
                <span class="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          <!-- E-commerce Symfony -->
          <div class="card-glass hover-3d">
            <div class="mb-6">
              <span
                class="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 text-sm font-semibold px-4 py-2 rounded-full">
                <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
                En développement
              </span>
            </div>
            <h3 class="text-3xl font-bold mb-4 text-gray-900">Boutique E-commerce</h3>
            <p class="text-gray-600 mb-6 text-lg leading-relaxed">
              Plateforme e-commerce complète avec gestion des produits, panier d'achat, paiements sécurisés et tableau
              de bord administrateur.
            </p>
            <div class="mb-6">
              <h4 class="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Fonctionnalités</h4>
              <ul class="text-base text-gray-700 space-y-2">
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-1">▸</span>
                  <span>Catalogue produits avec filtres avancés</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-1">▸</span>
                  <span>Système de panier et commandes</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-1">▸</span>
                  <span>Dashboard admin pour gestion complète</span>
                </li>
              </ul>
            </div>
            <div class="mb-6">
              <h4 class="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Stack technique</h4>
              <div class="flex flex-wrap gap-2">
                <span class="badge">Symfony</span>
                <span class="badge">Twig</span>
                <span class="badge">Doctrine</span>
                <span class="badge">MySQL</span>
              </div>
            </div>
            <div class="flex gap-4 pt-4 border-t border-gray-200">
              <!-- <a href="http://51.75.31.34:5173/home" target="_blank"
                class="text-primary hover:text-blue-700 font-semibold flex items-center gap-1 group">
                Voir la démo
                <span class="transform group-hover:translate-x-1 transition-transform">→</span>
              </a> -->
              <a href="https://github.com/lapace90/myNewBoutique" target="_blank"
                class="text-gray-600 hover:text-gray-900 font-semibold flex items-center gap-1 group">
                GitHub
                <span class="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          <!-- Site Agence Immobilière -->
          <div class="card-glass hover-3d">
            <div class="mb-6">
              <span
                class="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 text-sm font-semibold px-4 py-2 rounded-full">
                <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
                En développement
              </span>
            </div>
            <h3 class="text-3xl font-bold mb-4 text-gray-900">Site Agence Immobilière</h3>
            <p class="text-gray-600 mb-6 text-lg leading-relaxed">
              Site web pour agence immobilière avec gestion des biens, recherche avancée, espace client et système de
              rendez-vous en ligne.
            </p>
            <div class="mb-6">
              <h4 class="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Fonctionnalités</h4>
              <ul class="text-base text-gray-700 space-y-2">
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-1">▸</span>
                  <span>Catalogue de biens avec filtres géolocalisés</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-1">▸</span>
                  <span>Système de prise de rendez-vous</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-1">▸</span>
                  <span>Espace client personnalisé</span>
                </li>
              </ul>
            </div>
            <div class="mb-6">
              <h4 class="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Stack technique</h4>
              <div class="flex flex-wrap gap-2">
                <span class="badge">Laravel</span>
                <span class="badge">Blade</span>
                <span class="badge">Tailwind CSS</span>
                <span class="badge">MySQL</span>
              </div>
            </div>
            <div class="flex gap-4 pt-4 border-t border-gray-200">
              <!-- <a href="http://51.75.31.34:5173/home" target="_blank"
                class="text-primary hover:text-blue-700 font-semibold flex items-center gap-1 group">
                Voir la démo
                <span class="transform group-hover:translate-x-1 transition-transform">→</span>
              </a> -->
              <a href="https://github.com/lapace90/ImmoAgence" target="_blank"
                class="text-gray-600 hover:text-gray-900 font-semibold flex items-center gap-1 group">
                GitHub
                <span class="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          <!-- Carpegram -->
          <div class="card-glass hover-3d">
            <div class="mb-6">
              <span
                class="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 text-sm font-semibold px-4 py-2 rounded-full">
                <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
                En développement
              </span>
            </div>
            <h3 class="text-3xl font-bold mb-4 text-gray-900">Carpegram</h3>
            <p class="text-gray-600 mb-6 text-lg leading-relaxed">
              Application mobile sociale pour passionnés de pêche à la carpe. Partagez vos prises, spots et conseils
              avec la communauté.
            </p>
            <div class="mb-6">
              <h4 class="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Fonctionnalités</h4>
              <ul class="text-base text-gray-700 space-y-2">
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-1">▸</span>
                  <span>Fil d'actualités et partage de photos</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-1">▸</span>
                  <span>Géolocalisation des spots de pêche</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-1">▸</span>
                  <span>Messagerie privée entre pêcheurs</span>
                </li>
              </ul>
            </div>
            <div class="mb-6">
              <h4 class="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Stack technique</h4>
              <div class="flex flex-wrap gap-2">
                <span class="badge">React Native</span>
                <span class="badge">Supabase</span>
                <span class="badge">PostgreSQL</span>
                <span class="badge">Expo</span>
              </div>
            </div>
            <div class="flex gap-4 pt-4 border-t border-gray-200">
              <!-- <a href="http://51.75.31.34:5173/home" target="_blank"
                class="text-primary hover:text-blue-700 font-semibold flex items-center gap-1 group">
                Voir la démo
                <span class="transform group-hover:translate-x-1 transition-transform">→</span>
              </a> -->
              <a href="https://github.com/lapace90/CarpeGram" target="_blank"
                class="text-gray-600 hover:text-gray-900 font-semibold flex items-center gap-1 group">
                GitHub
                <span class="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Compétences Section -->
    <section id="competences" class="section bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <div class="container-custom">
        <h2 class="section-title">Compétences</h2>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Backend -->
          <div class="card-glass hover-3d">
            <div
              class="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01">
                </path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-6 text-gray-900">Backend</h3>
            <div class="flex flex-wrap gap-3">
              <span class="skill-badge">PHP</span>
              <span class="skill-badge">Symfony</span>
              <span class="skill-badge">Laravel</span>
              <span class="skill-badge">API Platform</span>
              <span class="skill-badge">Slim</span>
            </div>
          </div>

          <!-- Frontend -->
          <div class="card-glass hover-3d">
            <div
              class="w-14 h-14 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01">
                </path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-6 text-gray-900">Frontend</h3>
            <div class="flex flex-wrap gap-3">
              <span class="skill-badge">JavaScript</span>
              <span class="skill-badge">Vue.js</span>
              <span class="skill-badge">React Native</span>
              <span class="skill-badge">Node.js</span>
              <span class="skill-badge">Vite</span>
              <span class="skill-badge">Tailwind CSS</span>
            </div>
          </div>

          <!-- Outils & Bases de données -->
          <div class="card-glass hover-3d">
            <div
              class="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4">
                </path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-6 text-gray-900">Outils & BDD</h3>
            <div class="flex flex-wrap gap-3">
              <span class="skill-badge">MySQL</span>
              <span class="skill-badge">PostgreSQL</span>
              <span class="skill-badge">Supabase</span>
              <span class="skill-badge">Docker</span>
              <span class="skill-badge">Git</span>
              <span class="skill-badge">WooCommerce</span>
              <span class="skill-badge">PrestaShop</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section bg-gradient-to-br from-blue-100/40 via-purple-100/40 to-pink-100/40">
      <div class="container-custom max-w-4xl">
        <h2 class="section-title">Me Contacter</h2>

        <div class="card-glass">
          <div class="grid md:grid-cols-2 gap-10">
            <div>
              <h3 class="text-2xl font-bold mb-6 text-gray-900">Informations</h3>
              <div class="space-y-5">
                <a href="mailto:ilariapace06@gmail.com" class="flex items-center gap-4 group">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500 font-medium">Email</p>
                    <p class="text-primary hover:underline font-semibold">ilariapace06@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+33641869006" class="flex items-center gap-4 group">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500 font-medium">Téléphone</p>
                    <p class="text-primary hover:underline font-semibold">06 41 86 90 06</p>
                  </div>
                </a>
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500 font-medium">Localisation</p>
                    <p class="text-gray-900 font-semibold">Nice, France</p>
                  </div>
                </div>
                <a href="https://github.com/lapace90" target="_blank" class="flex items-center gap-4 group">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500 font-medium">GitHub</p>
                    <p class="text-primary hover:underline font-semibold">github.com/lapace90</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 class="text-2xl font-bold mb-6 text-gray-900">Langues</h3>
              <div class="space-y-4 mb-8">
                <div class="flex justify-between items-center">
                  <span class="font-semibold text-gray-900">Italien</span>
                  <span class="text-sm px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">Langue
                    maternelle</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold text-gray-900">Français</span>
                  <span class="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">C2</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold text-gray-900">Anglais</span>
                  <span class="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">B2</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold text-gray-900">Espagnol</span>
                  <span class="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">B2</span>
                </div>
              </div>

              <a href="/Cv2025.pdf" download
                class="btn-primary w-full text-center inline-flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                  </path>
                </svg>
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-white py-12">
      <div class="container-custom text-center">
        <p class="text-lg font-medium mb-2">&copy; 2025 Ilaria Pace. Tous droits réservés.</p>
        <p class="text-gray-400">Développé avec ❤️ en Vue.js & Tailwind CSS</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Smooth scroll pour la navigation
const handleScroll = (e) => {
  e.preventDefault()
  const target = document.querySelector(e.target.getAttribute('href'))
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
/* Les styles sont dans style.css */
</style>