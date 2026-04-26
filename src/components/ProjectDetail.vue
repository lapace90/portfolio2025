<template>
  <div v-if="project" class="project-detail">
    <!-- Hero -->
    <section class="pt-32 pb-16 hero-gradient relative overflow-hidden">
      <div class="container-custom relative z-10">
        <router-link to="/#projets" class="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
          <span>←</span>
          <span>Retour aux projets</span>
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
            {{ project.status }}
          </span>
          <span class="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full">
            {{ project.year }}
          </span>
        </div>

        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">{{ project.title }}</h1>
        <p class="text-xl md:text-2xl text-white/90 mb-8 italic">{{ project.tagline }}</p>

        <!-- Stack -->
        <div class="flex flex-wrap gap-2 mb-8">
          <span
            v-for="tech in project.techStack"
            :key="tech"
            class="text-sm font-medium px-3 py-1.5 rounded-md bg-white/20 backdrop-blur-sm text-white"
          >
            {{ tech }}
          </span>
        </div>

        <!-- Actions -->
        <div class="flex gap-4 flex-wrap">
          <a
            v-if="project.demoUrl"
            :href="project.demoUrl"
            target="_blank"
            rel="noopener"
            class="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2"
          >
            <span>Voir la démo</span>
            <span>↗</span>
          </a>
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener"
            class="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all flex items-center gap-2"
          >
            <span>GitHub</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Contenu principal -->
    <div class="bg-gradient-to-br from-purple-50 via-pink-50/30 to-blue-50/50">
      <div class="container-custom max-w-4xl py-20">
        <!-- Contexte -->
        <section class="mb-16">
          <h2 class="section-heading">Contexte</h2>
          <div class="prose-content">
            <p v-for="(paragraph, idx) in splitParagraphs(project.detail.context)" :key="idx">
              {{ paragraph }}
            </p>
          </div>
        </section>

        <!-- Comprendre le métier (optionnelle) - explique la logique sectorielle
             qui justifie ensuite les choix techniques -->
        <section v-if="project.detail.businessLogic" class="mb-16 business-section">
          <h2 class="section-heading">{{ project.detail.businessLogicTitle || 'Comprendre le métier' }}</h2>
          <div class="prose-content">
            <p v-for="(paragraph, idx) in splitParagraphs(project.detail.businessLogic)" :key="idx">
              {{ paragraph }}
            </p>
          </div>
        </section>

        <!-- Choix techniques -->
        <section v-if="project.detail.choices && project.detail.choices.length" class="mb-16">
          <h2 class="section-heading">{{ project.detail.choicesTitle || 'Choix techniques' }}</h2>
          <div class="space-y-6">
            <div
              v-for="choice in project.detail.choices"
              :key="choice.title"
              class="choice-block"
            >
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ choice.title }}</h3>
              <p class="text-gray-700 leading-relaxed">{{ choice.body }}</p>
            </div>
          </div>
        </section>

        <!-- Architecture (optionnelle) -->
        <section v-if="project.detail.architecture" class="mb-16">
          <h2 class="section-heading">Architecture</h2>
          <div class="prose-content">
            <p v-for="(paragraph, idx) in splitParagraphs(project.detail.architecture)" :key="idx">
              {{ paragraph }}
            </p>
          </div>
        </section>

        <!-- Roadmap -->
        <section v-if="project.detail.roadmap" class="mb-16">
          <h2 class="section-heading">Roadmap</h2>
          <div class="prose-content">
            <p v-for="(paragraph, idx) in splitParagraphs(project.detail.roadmap)" :key="idx">
              {{ paragraph }}
            </p>
          </div>
        </section>

        <!-- Galerie (placeholder pour plus tard) -->
        <section v-if="project.detail.gallery && project.detail.gallery.length" class="mb-16">
          <h2 class="section-heading">Captures</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <img
              v-for="(img, idx) in project.detail.gallery"
              :key="idx"
              :src="img.src"
              :alt="img.alt"
              class="rounded-xl shadow-lg w-full"
            />
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
              <span class="nav-arrow-label">← Projet précédent</span>
              <span class="nav-arrow-title">{{ prevProject.title }}</span>
            </router-link>
            <div v-else></div>

            <router-link
              v-if="nextProject"
              :to="`/projects/${nextProject.id}`"
              class="nav-arrow nav-arrow-next"
            >
              <span class="nav-arrow-label">Projet suivant →</span>
              <span class="nav-arrow-title">{{ nextProject.title }}</span>
            </router-link>
          </div>

          <div class="text-center mt-10">
            <router-link
              to="/#projets"
              class="inline-flex items-center gap-2 text-primary hover:text-blue-700 font-semibold"
            >
              <span>↑</span>
              <span>Retour à la liste de projets</span>
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
import { projectsMeta, getPrevNext } from '../data/projectsMeta'

const route = useRoute()
const id = computed(() => route.params.id)

const project = computed(() => projectsMeta.find(p => p.id === id.value))

const prevProject = computed(() => {
  if (!project.value) return null
  return getPrevNext(id.value).prev
})
const nextProject = computed(() => {
  if (!project.value) return null
  return getPrevNext(id.value).next
})

const statusClasses = computed(() => {
  if (!project.value) return ''
  const map = {
    production: 'bg-green-100 text-green-800',
    development: 'bg-orange-100 text-orange-800',
    alpha: 'bg-orange-100 text-orange-800',
    mvp: 'bg-orange-100 text-orange-800',
    v1: 'bg-orange-100 text-orange-800',
  }
  return map[project.value.status] || 'bg-blue-100 text-blue-800'
})

const dotClasses = computed(() => {
  if (!project.value) return ''
  const map = {
    production: 'bg-green-500 animate-pulse',
    development: 'bg-orange-500',
    alpha: 'bg-orange-500',
    mvp: 'bg-orange-500',
    v1: 'bg-orange-500',
  }
  return map[project.value.status] || 'bg-blue-500'
})

// Helper : transforme un bloc texte en array de paragraphes (double retour = nouveau paragraphe)
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

/* Section "Comprendre le métier" : fond légèrement coloré pour signaler son importance.
   C'est cette section qui justifie les choix techniques qui suivent. */
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