<template>
  <section id="accueil" class="section pt-40 pb-32 min-h-screen flex items-center hero-gradient">
    <div class="container-custom">
      <div class="grid md:grid-cols-5 gap-16 items-center">
        <div class="md:col-span-3">
          <div class="inline-block mb-8 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium animate-fade-in">
            {{ t.hero.available }}
          </div>

          <h2 class="text-5xl md:text-6xl font-bold mb-10 animate-fade-in leading-tight text-white">
            {{ t.hero.greeting }} <br>
            <span class="text-white" style="font-size: 5rem;">Ilaria Pace</span>
          </h2>

          <p class="text-2xl md:text-3xl text-white/95 font-semibold mb-10 animate-fade-in-delay-1">
            {{ t.hero.title }}
          </p>

          <p class="text-lg md:text-xl text-white/90 leading-relaxed mb-12 animate-fade-in-delay-2" v-html="t.hero.description"></p>

          <div class="flex gap-5 flex-wrap animate-fade-in-delay-3">
            <a href="#projets" @click="handleScroll" class="bg-white text-primary px-9 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              {{ t.hero.viewProjects }}
            </a>
            <a href="#contact" @click="handleScroll" class="border-2 border-white text-white px-9 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300">
              {{ t.hero.contact }}
            </a>
          </div>
        </div>

        <div class="md:col-span-2 flex justify-center">
          <div class="w-72 h-72 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/40 flex items-center justify-center text-white text-7xl font-bold shadow-2xl animate-float avatar-circle">
            IP
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const handleScroll = (e) => {
  e.preventDefault()
  const target = document.querySelector(e.target.getAttribute('href'))
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>