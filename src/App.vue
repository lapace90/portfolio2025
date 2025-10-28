<template>
  <div class="min-h-screen">
    <Navigation />
    <Hero />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from './composables/useI18n'
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const { initLanguage } = useI18n()

onMounted(() => {
  initLanguage()
})
</script>