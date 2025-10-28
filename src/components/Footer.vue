<template>
  <footer class="text-white py-12">
    <div class="container-custom text-center">
      <p class="text-lg font-medium mb-2">&copy; 2025 Ilaria Pace. {{ t.footer.rights }}</p>
      <p class="text-gray-400">{{ t.footer.madeWith }}</p>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>