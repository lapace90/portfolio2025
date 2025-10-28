<template>
  <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
    <div class="container-custom">
      <div class="flex justify-between items-center py-5">
        <div class="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold shadow-lg">
          IP
        </div>
        
        <div class="flex items-center gap-6">
          <!-- Navigation Links - Hidden on mobile -->
          <div class="hidden md:flex gap-8">
            <a href="#accueil" @click="handleScroll" class="nav-link text-gray-700 hover:text-primary transition-colors duration-200">
              {{ t.nav.home }}
            </a>
            <a href="#projets" @click="handleScroll" class="nav-link text-gray-700 hover:text-primary transition-colors duration-200">
              {{ t.nav.projects }}
            </a>
            <a href="#competences" @click="handleScroll" class="nav-link text-gray-700 hover:text-primary transition-colors duration-200">
              {{ t.nav.skills }}
            </a>
            <a href="#contact" @click="handleScroll" class="nav-link text-gray-700 hover:text-primary transition-colors duration-200">
              {{ t.nav.contact }}
            </a>
          </div>
          
<!-- Language Selector - VRAIMENT Mobile Friendly -->
<div class="flex items-center gap-4 md:ml-4 md:border-l md:pl-4 border-gray-200">
  <button
    v-for="(flag, code) in languages"
    :key="code"
    @click="setLanguage(code)"
    :class="[
      'p-2 text-4xl md:text-2xl transition-all duration-200',
      currentLang === code ? 'scale-110' : 'opacity-50 hover:opacity-100'
    ]"
    :title="languageNames[code]"
  >
    {{ flag }}
  </button>
</div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'

const { currentLang, t, setLanguage } = useI18n()

const languages = {
  fr: '🇫🇷',
  en: '🇬🇧',
  it: '🇮🇹',
  es: '🇪🇸'
}

const languageNames = {
  fr: 'Français',
  en: 'English',
  it: 'Italiano',
  es: 'Español'
}

const handleScroll = (e) => {
  e.preventDefault()
  const target = document.querySelector(e.target.getAttribute('href'))
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>