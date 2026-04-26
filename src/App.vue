<template>
  <div class="min-h-screen flex flex-col">
    <Navigation />
    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from './composables/useI18n'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

// initLanguage gère localStorage. L'init synchrone est aussi faite côté useI18n
// (au moment de la création du ref), mais on garde cet appel pour rétrocompatibilité.
const { initLanguage } = useI18n()

onMounted(() => {
  initLanguage()
})
</script>

<style scoped>
/* Transition douce entre les pages */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
