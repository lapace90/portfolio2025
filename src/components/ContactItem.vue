<template>
  <component :is="href ? 'a' : 'div'" :href="href" :target="href && href.startsWith('http') ? '_blank' : undefined" class="flex items-center gap-4 group">
    <div :class="['w-12 h-12 bg-gradient-to-br rounded-xl flex items-center justify-center text-white shadow-lg', iconColor, href ? 'group-hover:scale-110 transition-transform' : '']">
      <svg class="w-6 h-6" :fill="icon === 'github' ? 'currentColor' : 'none'" :stroke="icon === 'github' ? 'none' : 'currentColor'" viewBox="0 0 24 24">
        <path v-if="icon === 'email'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        <path v-else-if="icon === 'phone'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        <path v-else-if="icon === 'location'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        <path v-else-if="icon === 'github'" fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
      </svg>
    </div>
    <div>
      <p class="text-sm text-gray-500 font-medium">{{ label }}</p>
      <p :class="['font-semibold', href ? 'text-primary hover:underline' : 'text-gray-900']">{{ value }}</p>
    </div>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: { type: String, required: true },
  label: { type: String, required: true },
  value: { type: String, required: true },
  href: { type: String, default: null }
})

const iconColor = computed(() => {
  const colors = {
    email: 'from-blue-500 to-blue-600',
    phone: 'from-green-500 to-green-600',
    location: 'from-purple-500 to-purple-600',
    github: 'from-gray-700 to-gray-900'
  }
  return colors[props.icon]
})
</script>