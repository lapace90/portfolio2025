<template>
  <section id="projets" class="section bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
    <div class="container-custom">
      <h2 class="section-title">{{ t.projects.title }}</h2>

      <div class="grid md:grid-cols-2 gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          :t="t"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n'
import ProjectCard from './ProjectCard.vue'

const { t } = useI18n()

const projects = computed(() => [
  {
    id: 'campcameleonx',
    status: 'production',
    year: '2025',
    techStack: ['API Platform', 'Laravel', 'Vue.js', 'Docker'],
    demoUrl: 'https://campcameleonx.ipace.dev/home',
    githubUrl: 'https://github.com/lapace90/CampCameleonX'
  },
  {
    id: 'ecommerce',
    status: 'production',
    year: '2025',
    techStack: ['Symfony', 'Twig', 'Doctrine', 'MySQL'],
    demoUrl: 'https://shop.ipace.dev/',
    githubUrl: 'https://github.com/lapace90/myNewBoutique'
  },
  {
    id: 'immo',
    status: 'development',
    techStack: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL'],
    githubUrl: 'https://github.com/lapace90/ImmoAgence'
  },
  {
    id: 'carpegram',
    status: 'development',
    techStack: ['React Native', 'Supabase', 'PostgreSQL', 'Expo'],
    githubUrl: 'https://github.com/lapace90/CarpeGram'
  }
])
</script>