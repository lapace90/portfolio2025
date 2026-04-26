<template>
  <section id="projets" class="section projects-section">
    <div class="container-custom">
      <h2 class="section-title">{{ t.projects.title }}</h2>
    </div>

    <!-- Carrousel auto-scroll : pause au hover, respect du prefers-reduced-motion -->
    <div class="carousel-container" @mouseenter="paused = true" @mouseleave="paused = false">
      <div class="carousel-fade-left"></div>
      <div class="carousel-fade-right"></div>

      <div
        class="carousel-track"
        :class="{ paused }"
        :style="{ animationDuration: `${duration}s` }"
      >
        <ProjectCard
          v-for="(project, idx) in duplicatedProjects"
          :key="`${project.id}-${idx}`"
          :project="project"
          :t="t"
        />
      </div>
    </div>

    <div class="flex justify-center mt-8">
      <button
        @click="paused = !paused"
        class="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-white/50"
      >
        <span v-if="paused">▶</span>
        <span v-else>⏸</span>
        <span>{{ paused ? t.projects.resumeLabel : t.projects.pauseLabel }}</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../composables/useI18n'
import { projectsMeta } from '../data/projectsMeta'
import ProjectCard from './ProjectCard.vue'

const { t } = useI18n()

const duration = 80 // secondes pour un cycle complet du carrousel
const paused = ref(false)

// On duplique la liste pour que le scroll boucle sans coupure visible
const duplicatedProjects = computed(() => [...projectsMeta, ...projectsMeta])
</script>

<style scoped>
.projects-section {
  background: linear-gradient(135deg, #faf5ff 0%, #fdf2f8 50%, #eff6ff 100%);
}

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

@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

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
  background: linear-gradient(to right, rgb(250 245 255 / 1), rgb(250 245 255 / 0));
}

.carousel-fade-right {
  right: 0;
  background: linear-gradient(to left, rgb(250 245 255 / 1), rgb(250 245 255 / 0));
}

/* Accessibilité : si l'utilisateur a configuré reduced-motion, on désactive l'animation */
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

/* Sur mobile : swipe naturel plutôt que défilement automatique */
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