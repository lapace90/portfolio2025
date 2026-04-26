<template>
  <section id="projets" class="section projects-section">
    <div class="container-custom">
      <h2 class="section-title">{{ t.projects.title }}</h2>
    </div>

    <!-- Contrôles de navigation : flèches + play/pause AU-DESSUS du carrousel -->
    <div class="container-custom">
      <div class="flex justify-center items-center gap-2 mb-6">
        <button @click="scrollManually('left')" class="carousel-btn" aria-label="Défiler vers la gauche">
          ←
        </button>
        <button @click="paused = !paused" class="carousel-btn carousel-btn-wide">
          <span v-if="paused">▶</span>
          <span v-else>⏸</span>
          <span class="hidden sm:inline">{{ paused ? t.projects.resumeLabel : t.projects.pauseLabel }}</span>
        </button>
        <button @click="scrollManually('right')" class="carousel-btn" aria-label="Défiler vers la droite">
          →
        </button>
      </div>
    </div>

    <!-- Carrousel auto-scroll : pause au hover, respect du prefers-reduced-motion -->
    <div class="carousel-container" @mouseenter="paused = true" @mouseleave="paused = false">
      <div class="carousel-fade-left"></div>
      <div class="carousel-fade-right"></div>

      <div ref="trackRef" class="carousel-track" :class="{ paused }" :style="{ animationDuration: `${duration}s` }">
        <ProjectCard v-for="(project, idx) in duplicatedProjects" :key="`${project.id}-${idx}`" :project="project"
          :t="t" />
      </div>
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
const trackRef = ref(null) // référence au conteneur du carrousel pour contrôle manuel

// On duplique la liste pour que le scroll boucle sans coupure visible
const duplicatedProjects = computed(() => [...projectsMeta, ...projectsMeta])

// Fonction pour déplacer manuellement le carrousel
const scrollManually = (direction) => {
  if (!trackRef.value) return
  // Sur mobile : on scroll le container parent (overflow auto)
  // Sur desktop : on met en pause et on déplace via scrollLeft du parent
  const container = trackRef.value.parentElement
  const scrollAmount = 400

  paused.value = true
  container.scrollBy({
    left: direction === 'right' ? scrollAmount : -scrollAmount,
    behavior: 'smooth',
  })
}
</script>

<style scoped>
.carousel-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 44px;
  min-height: 44px;
  padding: 0.5rem 0.75rem;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #4b5563;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.carousel-btn:hover {
  background: #f9fafb;
  color: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.carousel-btn:active {
  transform: translateY(0);
}

.carousel-btn-wide {
  min-width: 60px;
  font-size: 0.875rem;
}

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
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
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

  .carousel-track>* {
    scroll-snap-align: start;
  }

  .carousel-fade-left,
  .carousel-fade-right {
    display: none;
  }
}

/* Sur mobile : swipe naturel plutôt que défilement automatique */
@media (max-width: 768px) {
  .carousel-container {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .carousel-track {
    animation: none;
    padding: 0 1rem;
  }

  .carousel-track>* {
    scroll-snap-align: center;
  }

  .carousel-fade-left,
  .carousel-fade-right {
    display: none;
  }
}
</style>