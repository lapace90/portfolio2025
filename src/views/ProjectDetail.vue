<template>
  <div v-if="projectMeta && projectI18n" class="project-detail">
    <!-- Hero -->
    <section class="pt-32 pb-16 hero-gradient relative overflow-hidden">
      <div class="container-custom px-4 md:px-8 relative z-10">
        <router-link to="/#projets" class="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
          <span>←</span>
          <span>{{ t.projects.backToList ? t.projects.backToList.replace('↑ ', '') : 'Retour aux projets' }}</span>
        </router-link>

        <!-- Badges status + year -->
        <div class="flex gap-2 flex-wrap mb-6">
          <span
            :class="[
              'inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full',
              statusClasses,
            ]"
          >
            <span :class="['w-2 h-2 rounded-full', dotClasses]"></span>
            {{ statusLabel }}
          </span>
          <span
            v-if="projectMeta.year"
            class="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full"
          >
            {{ projectMeta.year }}
          </span>
        </div>

        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">{{ projectI18n.title }}</h1>
        <p class="text-xl md:text-2xl text-white/90 mb-8 italic">{{ projectI18n.tagline }}</p>

        <!-- Stack -->
        <div class="flex flex-wrap gap-2 mb-8">
          <span
            v-for="tech in projectMeta.techStack"
            :key="tech"
            class="text-sm font-medium px-3 py-1.5 rounded-md bg-white/20 backdrop-blur-sm text-white"
          >
            {{ tech }}
          </span>
        </div>

        <!-- Actions -->
        <div class="flex gap-4 flex-wrap">
          <a
            v-if="projectMeta.demoUrl"
            :href="projectMeta.demoUrl"
            target="_blank"
            rel="noopener"
            class="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2"
          >
            <span>{{ t.projects.viewDemo }}</span>
            <span>↗</span>
          </a>
          <a
            v-if="projectMeta.githubUrl"
            :href="projectMeta.githubUrl"
            target="_blank"
            rel="noopener"
            class="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all flex items-center gap-2"
          >
            <span>{{ t.projects.github }}</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Contenu principal -->
    <div class="bg-gradient-to-br from-purple-50 via-pink-50/30 to-blue-50/50">
      <div class="container-custom max-w-4xl px-4 md:px-8 py-20">
        <!-- Contexte -->
        <section v-if="projectMeta?.detail?.context" class="mb-16">
          <h2 class="section-heading">{{ t.projects.contextHeading }}</h2>
          <div class="prose-content">
            <p v-for="(paragraph, idx) in splitParagraphs(projectMeta?.detail?.context)" :key="idx">
              {{ paragraph }}
            </p>
          </div>
        </section>

        <!-- Comprendre le métier (optionnelle, mise en valeur) -->
        <section v-if="projectMeta?.detail?.businessLogic" class="mb-16 business-section">
          <h2 class="section-heading">{{ t.projects.businessHeading }}</h2>
          <div class="prose-content">
            <p v-for="(paragraph, idx) in splitParagraphs(projectMeta?.detail?.businessLogic)" :key="idx">
              {{ paragraph }}
            </p>
          </div>
        </section>

        <!-- Choix techniques -->
        <section v-if="projectMeta?.detail?.choices?.length" class="mb-16">
          <h2 class="section-heading">{{ choicesHeading }}</h2>
          <div class="space-y-6">
            <div
              v-for="choice in projectMeta?.detail?.choices"
              :key="choice.title"
              class="choice-block"
            >
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ choice.title }}</h3>
              <p class="text-gray-700 leading-relaxed">{{ choice.body }}</p>
            </div>
          </div>
        </section>

        <!-- Roadmap -->
        <section v-if="projectMeta?.detail?.roadmap" class="mb-16">
          <h2 class="section-heading">{{ t.projects.roadmapHeading }}</h2>
          <div class="prose-content">
            <p v-for="(paragraph, idx) in splitParagraphs(projectMeta?.detail?.roadmap)" :key="idx">
              {{ paragraph }}
            </p>
          </div>
        </section>

        <!-- Navigation prev/next -->
        <nav class="project-nav border-t border-gray-300 pt-10 mt-20">
          <div class="grid md:grid-cols-2 gap-6">
            <router-link
              v-if="prevProject"
              :to="`/projects/${prevProject.id}`"
              class="nav-arrow nav-arrow-prev"
            >
              <span class="nav-arrow-label">{{ t.projects.prevProject }}</span>
              <span class="nav-arrow-title">{{ t.projects[prevProject.id]?.title }}</span>
            </router-link>
            <div v-else></div>

            <router-link
              v-if="nextProject"
              :to="`/projects/${nextProject.id}`"
              class="nav-arrow nav-arrow-next"
            >
              <span class="nav-arrow-label">{{ t.projects.nextProject }}</span>
              <span class="nav-arrow-title">{{ t.projects[nextProject.id]?.title }}</span>
            </router-link>
          </div>

          <div class="text-center mt-10">
            <router-link
              to="/#projets"
              class="inline-flex items-center gap-2 text-primary hover:text-blue-700 font-semibold"
            >
              {{ t.projects.backToList }}
            </router-link>
          </div>
        </nav>
      </div>
    </div>
  </div>

  <!-- Fallback si id inconnu -->
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">Projet introuvable</h1>
      <router-link to="/" class="text-primary hover:underline">Retour au portfolio</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '../composables/useI18n'
import { projectsMeta, getPrevNext } from '../data/projectsMeta'

const route = useRoute()
const { t } = useI18n()

const id = computed(() => route.params.id)

// Métadonnées techniques (status, year, stack, urls)
const projectMeta = computed(() => projectsMeta.find(p => p.id === id.value))

// Contenu textuel depuis i18n
const projectI18n = computed(() => t.value.projects?.[id.value])

// Navigation prev/next - réactive sur le id pour fonctionner correctement
// quand on navigue d'un projet à l'autre
const prevProject = computed(() => {
  if (!projectMeta.value) return null
  return getPrevNext(id.value).prev
})
const nextProject = computed(() => {
  if (!projectMeta.value) return null
  return getPrevNext(id.value).next
})

// Mapping status → label traduit
const statusLabel = computed(() => {
  if (!projectMeta.value) return ''
  const map = {
    production: t.value.projects.inProduction,
    development: t.value.projects.inDevelopment,
    alpha: t.value.projects.alphaTesting,
    mvp: t.value.projects.mvpComplete,
    v1: t.value.projects.inProgressV1,
  }
  return map[projectMeta.value.status] || projectMeta.value.status
})

// Couleurs des badges selon le status
const statusClasses = computed(() => {
  if (!projectMeta.value) return ''
  const map = {
    production: 'bg-green-100 text-green-800',
    development: 'bg-orange-100 text-orange-800',
    alpha: 'bg-orange-100 text-orange-800',
    mvp: 'bg-orange-100 text-orange-800',
    v1: 'bg-orange-100 text-orange-800',
  }
  return map[projectMeta.value.status] || 'bg-blue-100 text-blue-800'
})

const dotClasses = computed(() => {
  if (!projectMeta.value) return ''
  const map = {
    production: 'bg-green-500 animate-pulse',
    development: 'bg-orange-500',
    alpha: 'bg-orange-500',
    mvp: 'bg-orange-500',
    v1: 'bg-orange-500',
  }
  return map[projectMeta.value.status] || 'bg-blue-500'
})

// Le titre de la section "choix techniques" diffère pour Carpegram
const choicesHeading = computed(() => {
  if (id.value === 'carpegram') return t.value.projects.choicesHeadingAlt
  return t.value.projects.choicesHeading
})

// Helper : transforme un bloc texte multi-paragraphes en array
const splitParagraphs = (text) => {
  if (!text) return []
  return text.split('\n\n').map(p => p.trim()).filter(Boolean)
}
</script>

<style scoped>
.section-heading {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}

.prose-content p {
  color: #374151;
  line-height: 1.75;
  margin-bottom: 1rem;
  font-size: 1.0625rem;
}

.prose-content p:last-child {
  margin-bottom: 0;
}

/* Section "Comprendre le métier" : fond légèrement coloré pour signaler son importance */
.business-section {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%);
  border-radius: 1.5rem;
  padding: 2.5rem;
  border-left: 4px solid #8b5cf6;
  margin-left: -1rem;
  margin-right: -1rem;
}

.business-section .section-heading {
  margin-top: 0;
}

.choice-block {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 1rem;
  border-left: 4px solid #3b82f6;
  transition: all 0.3s ease;
}

.choice-block:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateX(4px);
  box-shadow: 0 8px 20px rgba(31, 38, 135, 0.1);
}

.nav-arrow {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-decoration: none;
}

.nav-arrow:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
}

.nav-arrow-next {
  text-align: right;
}

.nav-arrow-label {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.nav-arrow-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
}

.nav-arrow:hover .nav-arrow-title {
  color: #3b82f6;
}
</style>
