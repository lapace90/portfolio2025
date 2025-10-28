<template>
  <section id="competences" class="section bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
    <div class="container-custom">
      <h2 class="section-title">{{ t.skills.title }}</h2>

      <div class="grid md:grid-cols-3 gap-8">
        <SkillCard
          v-for="category in skillCategories"
          :key="category.id"
          :category="category"
          :title="t.skills[category.id]"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'
import SkillCard from './SkillCard.vue'

const { t } = useI18n()

const skillCategories = [
  {
    id: 'backend',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    gradient: 'from-blue-500 to-purple-600',
    skills: ['PHP', 'Symfony', 'Laravel', 'API Platform', 'Slim']
  },
  {
    id: 'frontend',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    gradient: 'from-pink-500 to-orange-500',
    skills: ['JavaScript', 'Vue.js', 'React Native', 'Node.js', 'Vite', 'Tailwind CSS']
  },
  {
    id: 'tools',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
    gradient: 'from-green-500 to-teal-600',
    skills: ['MySQL', 'PostgreSQL', 'Supabase', 'Docker', 'Git', 'WooCommerce', 'PrestaShop']
  }
]
</script>