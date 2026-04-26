// src/data/projectsMeta.js
//
// Métadonnées des 6 projets — infos techniques qui ne se traduisent pas
// (status, année, stack, URLs, image cover, gradient placeholder).
// Le contenu textuel (titre, description, highlights, page détail)
// 
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
    featured: true, // projet "vitrine" = page détail complète
    summary: {
      // ce qu'on voit sur la card du carrousel
      description: "Application mobile de mise en relation professionnelle pour pharmaciens, officines, animateurs et laboratoires. Système de swipe, géolocalisation, messagerie temps réel, paiements Stripe.",
      highlights: [
        'Architecture 50+ tables avec RLS',
        'Vérification RPPS & SIRET via APIs officielles',
        'Admin panel Vue.js séparé',
      ],
    },
    detail: {
      context: `PharmaLink est née en octobre 2025, après une rencontre avec Déborah, pharmacienne conseillère. Elle avait identifié un manque concret : aucun outil dédié ne permettait aux professionnels de la pharmacie de chercher un emploi discrètement, de se mettre en relation par géolocalisation, ou de gérer des transactions d'officines. Le concept s'est affiné en discussions : une application hybride entre Indeed et Tinder, où chaque utilisateur choisit son rôle à l'onboarding et utilise un système de swipe pour matcher avec des offres ou des candidats.`,
      businessLogicTitle: 'Comprendre le métier avant de coder',
      businessLogic: `Le secteur pharmaceutique français a des contraintes que les apps de recrutement généralistes ignorent. Un pharmacien en poste qui cherche ailleurs ne peut pas afficher son CV publiquement — son employeur actuel pourrait le voir. La discrétion n'est pas un confort, c'est une nécessité professionnelle.

Côté crédibilité, ce secteur est strictement réglementé. Un faux profil de pharmacien n'est pas seulement gênant, c'est un risque légal et sanitaire. La vérification automatique des diplômes (RPPS) et des entreprises (SIRET) n'est pas un bonus mais un prérequis pour que la plateforme soit prise au sérieux par ses utilisateurs.

S'y ajoutent quatre publics aux logiques très différentes : pharmaciens en recherche d'emploi, officines qui recrutent, animateurs freelance qui cherchent des missions, et laboratoires qui démarchent les officines pour leurs marques. Une app monolithique pour quatre métiers distincts aurait été inutilisable.`,
      choicesTitle: 'Les choix techniques que ça a imposés',
      choices: [
        {
          title: 'Mode anonyme dévoilé progressivement',
          body: "Permettre à un utilisateur en poste de chercher discrètement tout en restant matchable par les recruteurs. Le dévoilement après match s'appuie sur des colonnes dédiées (cv_shared, pdf_visibility) plutôt que sur une logique applicative — choix volontaire pour rester auditable et éviter les fuites accidentelles dans un secteur où la discrétion est critique.",
        },
        {
          title: 'Vérifications via APIs officielles',
          body: "FHIR Annuaire Santé pour les RPPS, API Sirene pour les SIRET. Appels via Edge Function Supabase pour ne pas exposer les clés côté client. La vérification automatique est le seul moyen crédible de bloquer les faux profils dans un secteur réglementé — sans elle, la plateforme perd toute valeur de confiance.",
        },
        {
          title: 'Architecture multi-rôles avec RLS partout',
          body: "Quatre publics aux flux distincts, chacun avec ses propres écrans, ses permissions, ses messageries. Row Level Security activée sur toutes les tables, policies pensées une par une. Les bugs de visibilité croisée (un animateur qui verrait un message destiné à un pharmacien) sont un risque inacceptable — la sécurité est gérée au niveau base de données, pas seulement applicatif.",
        },
        {
          title: 'Admin panel Vue.js séparé du mobile',
          body: "Application Vue.js dédiée sur admin.pharmalink.pro, codebase indépendante de l'app mobile. Modération des signalements, gestion utilisateurs, suivi des abonnements. Séparation des deux codebases pour limiter la surface d'attaque sur les opérations sensibles.",
        },
      ],
      roadmap: `MVP fonctionnellement complet : paiements Stripe finalisés, admin panel déployé, APIs de vérification intégrées, messagerie temps réel opérationnelle. Il reste à finaliser les push notifications, passer Stripe en production, et soumettre aux stores. Lancement beta prévu à moyen terme avec une phase de gratuité pour constituer la base d'utilisateurs avant activation du modèle d'abonnement.`,
      gallery: [], // on ajoutera les screens plus tard
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
    featured: true,
    summary: {
      description: "Remplacement d'un site HTML statique par une application Laravel moderne pour une bottega de Montopoli en Val d'Arno. Admin Filament pour personnel non-technique, SEO locale structurée, conformité RGPD stricte.",
      highlights: [
        'Admin Filament usable après 5 min de démo',
        'SEO locale : Schema.org FoodEstablishment + EventSeries',
        'Privacy by design (EDPB 03/2022)',
      ],
    },
    detail: {
      context: `La bottega du village avait un site HTML statique sur Aruba, avec des informations obsolètes et zéro SEO structuré. Impossible pour le personnel de mettre à jour les événements en autonomie, et invisible sur les recherches locales malgré la position centrale au village. Refonte complète vers une application Laravel moderne, avec un gestionnaire utilisable au quotidien par du personnel sans background technique.`,
      businessLogicTitle: 'Comprendre le métier avant de coder',
      businessLogic: `Une bottega de village ne se vend pas comme un site institutionnel. Le client ne vient pas chercher une adresse — il vient pour une expérience hebdomadaire (l'apéricena du jeudi), des événements ponctuels (sagre, manifestations communales) et une présence locale forte sur les recherches Google ("apericena Montopoli", "bottega alimentare Val d'Arno").

Côté équipe, c'est du personnel non-technique qui doit pouvoir publier un événement en 30 secondes entre deux clients, sans appeler le développeur. Et côté légal, un établissement commercial italien manipulant des données clients tombe sous la surveillance directe du Garante della privacy — la conformité GDPR n'est pas une coche à cocher mais un sujet de risque réel.`,
      choicesTitle: 'Les choix techniques que ça a imposés',
      choices: [
        {
          title: 'Server-rendering avec Blade plutôt que SPA',
          body: "Refactoring conscient par rapport au projet précédent (CampCameleonX en SPA Vue + API Platform). Ici la priorité absolue est le SEO local — donc rendu serveur, HTML brut indexable, performance perçue immédiate. Décision basée sur les besoins réels du métier, pas sur l'habitude technique.",
        },
        {
          title: 'Filament 3 pour un admin utilisable par tout le monde',
          body: "Interface gestionnaire pensée pour usage autonome par personnel non-technique. Form réutilisables (Repeater, TimePicker, DateTimePicker), upload images avec image editor intégré, validations contextuelles. Une démo de 5 minutes suffit pour qu'un employé soit autonome sur la création d'événements et la mise à jour des horaires.",
        },
        {
          title: "Privacy by design plutôt qu'analytics par défaut",
          body: "Décision intentionnelle de ne pas intégrer Google Analytics ou Meta Pixel : le bénéfice de données de trafic ne justifiait pas la complication du cookie banner en conformité GDPR (consentement granulaire, transfert données USA, risque de sanctions). Implémentation rigoureuse des lignes directrices EDPB 03/2022, avec gating préventif des embeds tiers et boutons à égalité visuelle.",
        },
        {
          title: 'SEO local structuré dès le départ',
          body: "Schema.org FoodEstablishment avec openingHoursSpecification généré dynamiquement depuis la BDD, EventSeries pour l'apéricena récurrent. Sitemap dynamique, Open Graph, meta geo. Pas un add-on de fin de projet : structuré dès la conception du modèle de données.",
        },
      ],
      roadmap: `La prochaine version intégrera un module e-commerce pour les livraisons locales que la bottega effectue déjà le matin, et un système de click & collect estival. La base Laravel est prête à accueillir cette extension sans refonte majeure — l'architecture a été pensée modulable dès le départ pour cette évolution prévisible.`,
      gallery: [],
    }
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
    featured: true,
    summary: {
      description: "Plateforme API-first pour maison d'hôtes au Maroc : site vitrine, devis en ligne, réservations, paiements Stripe, back-office complet. Projet d'examen CDA transformé en base produit packageable.",
      highlights: [
        'API Platform pour Laravel (package émergent)',
        'Pattern polymorphe Product → Productable',
        'RBAC : 50 permissions, 6 rôles',
      ],
    },
    detail: {
      context: `Le projet est né en octobre 2024 d'une commande freelance pour une maison d'hôtes du désert marocain, interrompue peu après le démarrage. Je l'ai repris en novembre pour en faire mon projet d'examen CDA, avec une refonte complète vers une architecture API-first Laravel + Vue.js et une ambition au-delà de l'examen : en faire une base produit réutilisable.`,
      businessLogicTitle: 'Comprendre le métier avant de coder',
      businessLogic: `Une maison d'hôtes ne fonctionne pas comme une boutique en ligne. Le client n'achète pas un produit isolé, il assemble un séjour : hébergement, repas, activités, options. Cette logique de panier composite change la structure des données et l'interface.

S'y ajoute une équipe multi-rôle aux besoins quotidiens très différents — accueil, cuisine, guides, administration — et un cycle commercial complet du devis personnalisé jusqu'à la facture, avec synchronisation calendrier vers les plateformes externes. Comprendre ces enjeux avant de coder a déterminé toute l'architecture qui suit.`,
      choicesTitle: 'Les choix techniques que ça a imposés',
      choices: [
        {
          title: 'Architecture API-first plutôt que monolithique',
          body: "Les besoins du client (composer un devis visuellement) et ceux de l'équipe (back-office dense, statistiques) sont si différents qu'un site monolithique aurait abouti à des compromis sur les deux. Une API Laravel exposée à un frontend Vue.js permet de traiter chaque public avec son interface dédiée, et ouvre la porte à de futures applications mobiles spécialisées par rôle d'équipe.",
        },
        {
          title: 'Pattern polymorphe pour les types de produits',
          body: "Hébergements, activités, menus et plats partagent 80% de leurs attributs mais ont chacun leurs spécificités. Un modèle Product centralise le commun et délègue le spécifique aux entités concrètes. Ajouter un nouveau type de prestation revient à créer une entité — le reste suit.",
        },
        {
          title: 'Pari technique sur API Platform pour Laravel',
          body: "En septembre 2024, le package venait juste d'être publié, sans documentation ni retours d'expérience. Le pari : gagner une API auto-documentée qui sert de garde-fou entre back et front, et préparer une base solide pour les développements futurs. Le coût : plusieurs semaines à explorer le code source avant que la stack ne devienne productive.",
        },
      ],
      roadmap: `L'ambition à long terme est d'en faire une plateforme modulaire adaptable à différentes tailles de structures touristiques — d'une maison d'hôtes indépendante à un petit groupe hôtelier. Modules activables selon les besoins (restauration, activités, transport, stocks cuisine, synchronisation Booking), avec applications mobiles dédiées pour les équipes terrain. Projet mené en parallèle de mes activités professionnelles.`,
      gallery: [],
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
    featured: true,
    summary: {
      description: "Remplace les outils numériques fragmentés des lycées italiens par une app mobile unifiée : messagerie, prenotazioni, notes, devoirs, circolari, marketplace. Architecture multi-tenant, RGPD native, authentification par domaine scolaire.",
      highlights: [
        'Publié en closed testing sur Play Store',
        'Auth restreinte par domaine scolaire',
        'Multi-tenant dès la conception',
      ],
    },
    detail: {
      context: `Les outils numériques fournis aux lycées italiens sont fragmentés et peu ergonomiques sur mobile : chaque fonctionnalité — registre électronique, communication, prise de rendez-vous pour les interrogations — vit dans sa propre application avec son propre login. TuttoScuola unifie tout dans une seule app pensée pour étudiants, professeurs et administration d'un établissement précis (l'IIS Carlo Cattaneo pour commencer). Projet mené seule de la conception à la mise en production, aujourd'hui publié en closed testing sur le Google Play Store.`,
      businessLogicTitle: 'Comprendre le métier avant de coder',
      businessLogic: `Un lycée n'est pas une plateforme grand public ouverte. Les utilisateurs sont nominativement connus à l'avance (les élèves d'une classe, les professeurs d'un établissement) et l'inscription d'inconnus n'a aucun sens — on ne s'inscrit pas par hasard sur l'app de son école. La logique d'authentification doit refléter cette réalité, pas singer celle des réseaux sociaux.

Côté données, on manipule des informations sur des mineurs dans un cadre éducatif. Le RGPD ici n'est pas un détail légal mais une condition d'existence : sans rigueur sur le chiffrement, la rétention et la localisation des serveurs, l'établissement ne peut tout simplement pas autoriser le déploiement.

Enfin, le rythme scolaire italien impose ses contraintes — promotion annuelle des classes, fermetures pour congés et examens, calendrier qui ne ressemble à aucun autre secteur. Un système conçu pour une entreprise s'effondrerait à la première année académique.`,
      choicesTitle: 'Les choix techniques que ça a imposés',
      choices: [
        {
          title: 'Authentification par domaine scolaire',
          body: "Inscription restreinte aux emails du domaine de l'institut, avec vérification email via Resend (SMTP custom pour Supabase, avec SPF/DKIM/DMARC pour la délivrabilité vers les boîtes éducatives strictes). Décision produit critique pour un outil manipulant des données de mineurs : seuls les membres légitimes peuvent accéder à la plateforme.",
        },
        {
          title: 'RGPD natif, pas en addendum',
          body: "Politique de confidentialité intégrée à l'app, chiffrement TLS/AES-256, serveurs UE uniquement (Supabase Frankfurt), rétention documentée par type de donnée. Pas un audit final mais une contrainte de conception : chaque feature a été pensée avec la question RGPD en tête dès le départ.",
        },
        {
          title: 'Multi-tenant prévu dès la conception',
          body: "Table institutes au cœur du modèle de données, isolation par RLS sur toutes les requêtes. L'ouverture à d'autres établissements italiens ne demandera pas de refonte — juste de l'onboarding. Choix anticipé : économiser du temps quand le projet voudra grandir, plutôt que de devoir tout repenser.",
        },
        {
          title: 'EAS Build pour un déploiement Play Store reproductible',
          body: "Pipeline de déploiement propre et reproductible vers le Play Store. Development build (pas Expo Go, qui ne supporte plus expo-notifications depuis la SDK 53) pour les push notifications. Configuration EAS pensée pour permettre des builds rapides à chaque évolution sans intervention manuelle.",
        },
      ],
      roadmap: `Court terme : build iOS et soumission App Store pour atteindre tous les étudiants et professeurs, quelle que soit leur plateforme. Moyen terme : gamification (partage de notes avec XP et progressions débloquées par activité), tableaux de bord analytiques pour enseignants dans le strict respect du RGPD. Long terme : ouverture à d'autres établissements italiens via le modèle multi-tenant déjà en place.`,
      gallery: [],
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
      featured: true,
    summary: {
      description: "Boutique en ligne complète : catalogue, panier, Stripe Checkout, espace client, back-office EasyAdmin. Backend conçu en formation DWWM, repris en projet personnel pour construire le frontend et déployer en production.",
      highlights: [
        'Stripe Checkout (PCI simplifié)',
        'Déployée en production sur VPS OVH',
        'Emails transactionnels + RGPD',
      ],
    },
    detail: {
      context: `Le backend de PinkKiwi a été initialement conçu pendant ma formation DWWM en 2024. J'ai trouvé la base suffisamment solide pour mériter un vrai frontend et un déploiement en production — ce qui en a fait un projet personnel autonome, hébergé et maintenu depuis.`,
      businessLogicTitle: 'Comprendre le métier avant de coder',
      businessLogic: `Un e-commerce ne ressemble pas à un site institutionnel ou à une marketplace. Le client ne vient pas naviguer pour le plaisir : il a une intention d'achat, un parcours qu'il faut fluidifier au maximum, et chaque friction (formulaire long, paiement compliqué, page lente) coûte des conversions.

Côté légal, l'e-commerce français a des obligations strictes : conformité PCI-DSS pour les paiements, RGPD pour les données client, CGV affichées avant l'achat, droit de rétractation. Et côté ops, les prix manipulés monétaire imposent une rigueur sur les arrondis qu'on ne soupçonne pas avant de se faire piéger en production.`,
      choicesTitle: 'Les choix techniques que ça a imposés',
      choices: [
        {
          title: 'Stripe Checkout plutôt qu\'Elements',
          body: "Trois raisons : aucune donnée de carte ne transite par mon serveur (conformité PCI simplifiée), l'UI est déjà responsive et traduite, et la gestion des webhooks est standardisée. Le StripeService construit les line items à partir du panier et retourne une session de checkout — un choix qui réduit drastiquement la surface de risque réglementaire.",
        },
        {
          title: 'Server-rendering Symfony plutôt que SPA',
          body: "Pour un e-commerce, SEO et performance perçue restent prioritaires sur les effets clinquants d'une SPA. Twig + Bootstrap 5 en rendu serveur, avec composants Twig réutilisables (product_card, order_card, stat_card) pour garder une UI cohérente entre les pages. La complexité d'une SPA n'aurait apporté aucune valeur métier ici.",
        },
        {
          title: 'EasyAdmin pour le back-office',
          body: "Plutôt que de recoder une interface d'administration, EasyAdmin pour gérer catalogue, utilisateurs, commandes. Personnalisation du dashboard avec compteur temps réel des commandes en attente vs payées directement dans le menu, pour avoir l'info opérationnelle au premier coup d'œil.",
        },
      ],
      roadmap: `Court terme : webhooks Stripe pour fiabiliser la mise à jour de statut si le client ferme son onglet après paiement, et suite de tests PHPUnit sur les services critiques (Cart, StripeService). À plus long terme : système de coupons, gestion de stock avec alertes de réapprovisionnement, recherche full-text.`,
      gallery: [],
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
     featured: false, // page "parcours" = version allégée
    summary: {
      description: "Premier projet React Native : un Instagram vertical pour la communauté des pêcheurs à la carpe italiens. Feed, messagerie, cartographie des spots, météo enrichie. Commande de mon neveu, devenu terrain d'expérimentation pour l'app sociale complète.",
      highlights: [
        'Premier projet React Native',
        'Architecture en couches stricte',
        'Cartographie avec privacy par zones',
      ],
    },
    detail: {
      context: `Carpegram est né d'un besoin concret : mon neveu, passionné de pêche à la carpe, constatait qu'aucune plateforme sociale n'était vraiment pensée pour sa communauté — les réseaux généralistes diluent le contenu spécialisé, les forums existants sont figés dans une ergonomie d'un autre temps. L'idée : un espace dédié aux carpistes italiens, sorte d'Instagram vertical pour une niche passionnée. Au-delà du besoin utilisateur, c'est devenu mon premier projet React Native — mon terrain d'expérimentation pour construire une application sociale complète de bout en bout.`,
      choicesTitle: 'Choix techniques & apprentissages',
      choices: [
        {
          title: 'Architecture en couches stricte',
          body: "Components → hooks → services → Supabase. Cette séparation est non-négociable : elle garantit la testabilité, évite les hooks appelés dans des contextes async, et permet d'itérer sur l'UI sans toucher à la logique métier. Règle que j'ai continuée à appliquer ensuite sur TuttoScuola et PharmaLink.",
        },
        {
          title: 'Privacy multi-niveaux sur la géolocalisation',
          body: "Les carpistes protègent farouchement leurs spots. Permettre le partage sans exposer les coordonnées exactes a demandé une logique de floutage à plusieurs niveaux : zone privée visible du propriétaire, zone approximative pour les amis, masquage total pour le public. Plus complexe qu'un simple public/privé, géré au niveau base de données et affichage carte.",
        },
        {
          title: 'Traduire les données brutes en valeur métier',
          body: "Afficher la météo brute ne suffit pas pour des carpistes. L'API Open-Meteo fournit les données, mais c'est l'enrichissement avec des indicateurs spécifiques à la pêche (pression atmosphérique, phase lunaire, tendance) qui transforme une feature banale en outil utile. Comprendre le métier de l'utilisateur final compte autant que la technique.",
        },
      ],
      roadmap: `V1 : finalisation des notifications push, polish UI, soumission Play Store puis App Store. V1.5 : monétisation légère via marqueurs de magasins partenaires, système de parrainage. V2 : déploiement en France, extension à d'autres disciplines de pêche, marketplace de matériel d'occasion entre membres.`,
      gallery: [],
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