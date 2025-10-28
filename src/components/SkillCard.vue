<template>
  <div class="card-glass hover-3d">
    <div :class="['w-14 h-14 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-6 shadow-lg', category.gradient]">
      <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="category.icon"></path>
      </svg>
    </div>
    <h3 class="text-2xl font-bold mb-6 text-gray-900">{{ title }}</h3>
    <div class="flex flex-wrap gap-3">
      <span v-for="skill in category.skills" :key="skill" class="skill-badge">
        {{ skill }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  category: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>