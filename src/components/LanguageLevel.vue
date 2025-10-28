<template>
  <div class="flex justify-between items-center">
    <span class="font-semibold text-gray-900">{{ name }}</span>
    <span :class="['text-sm px-3 py-1 rounded-full font-medium', badgeClass]">
      {{ displayLevel }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  level: { type: String, required: true },
  t: { type: Object, default: null }
})

const badgeClass = computed(() => {
  return props.level === 'nativeLanguage' || props.level.includes('native')
    ? 'bg-green-100 text-green-800'
    : 'bg-blue-100 text-blue-800'
})

const displayLevel = computed(() => {
  return props.level === 'nativeLanguage' && props.t
    ? props.t.contact.nativeLanguage
    : props.level
})
</script>