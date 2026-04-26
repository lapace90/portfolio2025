<template>
  <section id="projets" class="section projects-section">
    <div class="container-custom px-4">
      <h2 class="section-title">{{ t.projects.title }}</h2>

      <!-- Contrôles au-dessus des cartes -->
      <div class="flex justify-center items-center gap-4 mb-8 -mt-8">
        <button
          @click="scrollPrev"
          class="md:hidden carousel-arrow"
          aria-label="Projet précédent"
        >←</button>

        <button
          @click="paused = !paused"
          class="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-white/60"
        >
          <span v-if="paused">▶</span>
          <span v-else>⏸</span>
          <span class="hidden md:inline">{{ paused ? t.projects.resumeLabel : t.projects.pauseLabel }}</span>
        </button>

        <button
          @click="scrollNext"
          class="md:hidden carousel-arrow"
          aria-label="Projet suivant"
        >→</button>
      </div>
    </div>

    <!-- Carrousel auto-scroll desktop / snap-scroll mobile -->
    <div
      ref="containerRef"
      class="carousel-container"
      @mouseenter="paused = true"
      @mouseleave="paused = false"
      @scrollend="syncInfiniteScroll"
    >
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

  </section>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { useI18n } from '../composables/useI18n'
import { projectsMeta } from '../data/projectsMeta'
import ProjectCard from './ProjectCard.vue'

const { t } = useI18n()

const duration = 80
const paused = ref(false)
const containerRef = ref(null)

const duplicatedProjects = computed(() => [...projectsMeta, ...projectsMeta])

// Sur mobile, on démarre au milieu de la liste dupliquée pour pouvoir défiler
// dans les deux sens. scrollend recentre silencieusement dès qu'on entre dans
// la seconde copie (contenu identique → saut invisible).
onMounted(async () => {
  await nextTick()
  const el = containerRef.value
  if (el && window.innerWidth <= 768) {
    el.scrollLeft = el.scrollWidth / 2
  }
})

const syncInfiniteScroll = () => {
  const el = containerRef.value
  if (!el) return
  const half = el.scrollWidth / 2
  if (el.scrollLeft >= half) {
    el.scrollLeft -= half
  } else if (el.scrollLeft <= 0 && half > 0) {
    // Wrap gauche : atterrir sur le dernier écran de la première copie
    el.scrollLeft = half - el.clientWidth
  }
}

const scrollPrev = () => containerRef.value?.scrollBy({ left: -392, behavior: 'smooth' })
const scrollNext = () => containerRef.value?.scrollBy({ left: 392, behavior: 'smooth' })
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

.carousel-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 9999px;
  background: white;
  box-shadow: 0 2px 10px rgba(31, 38, 135, 0.15);
  font-size: 1.25rem;
  color: #6366f1;
  transition: box-shadow 0.2s, transform 0.2s;
}

.carousel-arrow:active {
  transform: scale(0.92);
  box-shadow: 0 1px 4px rgba(31, 38, 135, 0.1);
}

/* Accessibilité : reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .carousel-container {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .carousel-container::-webkit-scrollbar { display: none; }
  .carousel-track {
    animation: none;
  }
  .carousel-track > * {
    scroll-snap-align: start;
  }
}

/* Mobile : snap-scroll sur le container (overflow: hidden bloquait le scroll sur le track) */
@media (max-width: 768px) {
  .carousel-container {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding: 2rem 1rem;
    scrollbar-width: none;
  }
  .carousel-container::-webkit-scrollbar { display: none; }
  .carousel-track {
    animation: none;
  }
  .carousel-track > * {
    scroll-snap-align: center;
  }
}
</style>
