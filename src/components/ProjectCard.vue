<template>
  <article class="project-card group">
    <!-- Spot visuel : image cover si dispo, sinon placeholder gradient + initiales.
         Contient aussi le titre et la tagline en overlay bas. -->
    <div class="card-media" :style="mediaStyle">
      <img
        v-if="project.cover"
        :src="project.cover"
        :alt="i18n.title"
        class="card-media-img"
      />
      <div v-else class="card-media-initials">
        {{ project.theme?.initials || project.id.substring(0, 2).toUpperCase() }}
      </div>

      <div class="card-media-overlay">
        <h3 class="card-title">{{ i18n.title }}</h3>
        <p class="card-tagline">{{ i18n.tagline }}</p>
      </div>
    </div>

    <!-- Contenu textuel -->
    <div class="card-body">
      <!-- Status badges -->
      <div class="mb-4 flex gap-2 flex-wrap">
        <span
          :class="[
            'inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full',
            statusClasses,
          ]"
        >
          <span :class="['w-1.5 h-1.5 rounded-full', dotClasses]"></span>
          {{ statusLabel }}
        </span>
        <span
          v-if="project.year"
          class="inline-flex items-center bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full"
        >
          {{ project.year }}
        </span>
      </div>

      <!-- Description -->
      <p class="text-gray-700 text-sm leading-relaxed mb-5 line-clamp-3">
        {{ i18n.description }}
      </p>

      <!-- Highlights -->
      <ul v-if="i18n.highlights && i18n.highlights.length" class="mb-5 space-y-1.5">
        <li
          v-for="highlight in i18n.highlights"
          :key="highlight"
          class="flex items-start gap-2 text-sm text-gray-700"
        >
          <span class="text-primary mt-0.5">▸</span>
          <span>{{ highlight }}</span>
        </li>
      </ul>

      <!-- Stack technique -->
      <div class="mb-5 flex flex-wrap gap-1.5">
        <span
          v-for="tech in project.techStack.slice(0, 5)"
          :key="tech"
          class="text-xs font-medium px-2.5 py-1 rounded-md bg-blue-50 text-blue-700"
        >
          {{ tech }}
        </span>
        <span
          v-if="project.techStack.length > 5"
          class="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 text-gray-500"
        >
          +{{ project.techStack.length - 5 }}
        </span>
      </div>

      <!-- CTAs -->
      <div class="flex gap-3 pt-4 border-t border-gray-200 mt-auto">
        <router-link
          :to="`/projects/${project.id}`"
          class="text-primary hover:text-blue-700 font-semibold text-sm flex items-center gap-1 group/link"
        >
          {{ t.projects.learnMore }}
          <span class="transform group-hover/link:translate-x-1 transition-transform">→</span>
        </router-link>
        <a
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener"
          class="text-gray-600 hover:text-gray-900 font-semibold text-sm ml-auto"
          @click.stop
        >
          {{ t.projects.viewDemo }} ↗
        </a>
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener"
          class="text-gray-600 hover:text-gray-900 font-semibold text-sm"
          :class="{ 'ml-auto': !project.demoUrl }"
          @click.stop
        >
          {{ t.projects.github }} ↗
        </a>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  t: {
    type: Object,
    required: true,
  },
})

// Texte i18n du projet (titre, tagline, description, highlights)
const i18n = computed(() => props.t.projects[props.project.id] || {})

// Mapping status → label traduit
const statusLabel = computed(() => {
  const map = {
    production: props.t.projects.inProduction,
    development: props.t.projects.inDevelopment,
    alpha: props.t.projects.alphaTesting,
    mvp: props.t.projects.mvpComplete,
    v1: props.t.projects.inProgressV1,
  }
  return map[props.project.status] || props.project.status
})

const statusClasses = computed(() => {
  const map = {
    production: 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800',
    development: 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800',
    alpha: 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800',
    mvp: 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800',
    v1: 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800',
  }
  return map[props.project.status] || 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800'
})

const dotClasses = computed(() => {
  const map = {
    production: 'bg-green-500 animate-pulse',
    development: 'bg-orange-500',
    alpha: 'bg-orange-500',
    mvp: 'bg-orange-500',
    v1: 'bg-orange-500',
  }
  return map[props.project.status] || 'bg-blue-500'
})

// Style du spot visuel : gradient du theme si pas d'image
const mediaStyle = computed(() => {
  const theme = props.project.theme
  if (!theme) {
    return { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }
  }
  return {
    background: `linear-gradient(135deg, ${theme.gradientFrom} 0%, ${theme.gradientTo} 100%)`,
  }
})
</script>

<style scoped>
.project-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 20px rgba(31, 38, 135, 0.1);
  border-radius: 1.25rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  width: 360px;
  min-height: 500px;
  flex-shrink: 0;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 40px rgba(31, 38, 135, 0.2);
  background: rgba(255, 255, 255, 1);
}

/* Spot visuel : image cover ou placeholder gradient + initiales */
.card-media {
  width: 100%;
  aspect-ratio: 16 / 9;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.card-media-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-media-initials {
  font-family: 'Sora', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: 0.05em;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  user-select: none;
  transform: translateY(-15%);
}

.card-media::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 40%);
  pointer-events: none;
}

/* Overlay titre + tagline avec dégradé sombre pour lisibilité */
.card-media-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.25rem 1.5rem 1rem;
  z-index: 2;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(0, 0, 0, 0.45) 50%,
    rgba(0, 0, 0, 0) 100%
  );
}

.card-title {
  font-family: 'Sora', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.02em;
  margin-bottom: 0.25rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  line-height: 1.2;
}

.card-tagline {
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  line-height: 1.3;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
}

.card-body {
  padding: 1.5rem 1.75rem 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
