<template>
  <div class="carousel-container" @mouseenter="paused = true" @mouseleave="paused = false">
    <!-- Gradients de fade sur les bords pour un effet propre -->
    <div class="carousel-fade-left"></div>
    <div class="carousel-fade-right"></div>

    <!-- Track qui défile -->
    <div
      class="carousel-track"
      :class="{ paused }"
      :style="{ animationDuration: `${duration}s` }"
    >
      <!-- On duplique les projets pour créer la boucle infinie sans saut -->
      <ProjectCard
        v-for="(project, idx) in duplicatedProjects"
        :key="`${project.id}-${idx}`"
        :project="project"
      />
    </div>
  </div>

  <!-- Bouton pause/play pour l'accessibilité -->
  <div class="flex justify-center mt-8">
    <button
      @click="paused = !paused"
      class="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-white/50"
    >
      <span v-if="paused">▶</span>
      <span v-else>⏸</span>
      <span>{{ paused ? 'Reprendre le défilement' : 'Mettre en pause' }}</span>
    </button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import ProjectCard from './ProjectCard.vue'

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
  duration: {
    type: Number,
    default: 60, // durée d'un cycle complet en secondes
  },
})

const paused = ref(false)

// On duplique la liste pour que le scroll boucle sans coupure visible
const duplicatedProjects = computed(() => [...props.projects, ...props.projects])
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
}

.carousel-track {
  display: flex;
  gap: 2rem;
  width: max-content;
  animation: scroll linear infinite;
}

.carousel-track.paused {
  animation-play-state: paused;
}

/* Défilement horizontal continu */
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    /* On scroll de la moitié de la largeur (= une séquence complète, puisque on a dupliqué) */
    transform: translateX(-50%);
  }
}

/* Gradients aux bords pour un fondu visuel */
.carousel-fade-left,
.carousel-fade-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80px;
  z-index: 2;
  pointer-events: none;
}

.carousel-fade-left {
  left: 0;
}

.carousel-fade-right {
  right: 0;
}

/* Respect du prefers-reduced-motion — accessibilité critique */
@media (prefers-reduced-motion: reduce) {
  .carousel-track {
    animation: none;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .carousel-track > * {
    scroll-snap-align: start;
  }

  .carousel-fade-left,
  .carousel-fade-right {
    display: none;
  }
}

/* Sur mobile : gestes naturels plutôt que défilement automatique */
@media (max-width: 768px) {
  .carousel-track {
    animation: none;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding: 0 1rem;
  }

  .carousel-track > * {
    scroll-snap-align: center;
  }

  .carousel-fade-left,
  .carousel-fade-right {
    display: none;
  }
}
</style>
