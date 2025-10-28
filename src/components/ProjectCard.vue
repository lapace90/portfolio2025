<template>
  <div class="card-glass hover-3d">
    <div class="mb-6 flex gap-2">
      <span
        v-if="project.status === 'production'"
        class="inline-flex items-center gap-1.5 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full status-badge"
      >
        <span class="w-2 h-2 bg-green-500 rounded-full"></span>
        {{ t.projects.inProduction }}
      </span>
      <span
        v-else
        class="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 text-sm font-semibold px-4 py-2 rounded-full"
      >
        <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
        {{ t.projects.inDevelopment }}
      </span>
      <span
        v-if="project.year"
        class="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full"
      >
        {{ project.year }}
      </span>
    </div>

    <h3 class="text-3xl font-bold mb-4 text-gray-900">
      {{ t.projects[project.id].title }}
    </h3>
    
    <p class="text-gray-600 mb-6 text-lg leading-relaxed">
      {{ t.projects[project.id].description }}
    </p>

    <div class="mb-6">
      <h4 class="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">
        {{ t.projects.features }}
      </h4>
      <ul class="text-base text-gray-700 space-y-2">
        <li v-for="(feature, index) in t.projects[project.id].features" :key="index" class="flex items-start gap-2">
          <span class="text-primary mt-1">▸</span>
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>

    <div class="mb-6">
      <h4 class="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">
        {{ t.projects.techStack }}
      </h4>
      <div class="flex flex-wrap gap-2">
        <span v-for="tech in project.techStack" :key="tech" class="badge">
          {{ tech }}
        </span>
      </div>
    </div>

    <div class="flex gap-4 pt-4 border-t border-gray-200">
      <a
        v-if="project.demoUrl"
        :href="project.demoUrl"
        target="_blank"
        class="text-primary hover:text-blue-700 font-semibold flex items-center gap-1 group"
      >
        {{ t.projects.viewDemo }}
        <span class="transform group-hover:translate-x-1 transition-transform">→</span>
      </a>
      <a
        :href="project.githubUrl"
        target="_blank"
        class="text-gray-600 hover:text-gray-900 font-semibold flex items-center gap-1 group"
      >
        {{ t.projects.github }}
        <span class="transform group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  },
  t: {
    type: Object,
    required: true
  }
})
</script>