import { ref, computed, onMounted } from 'vue'
import { translations } from '../locales/i18n'

const currentLang = ref('fr')

export function useI18n() {
  const t = computed(() => translations[currentLang.value])
  
  const setLanguage = (lang) => {
    currentLang.value = lang
    localStorage.setItem('portfolio-lang', lang)
    document.documentElement.lang = lang
  }
  
  const initLanguage = () => {
    const savedLang = localStorage.getItem('portfolio-lang')
    if (savedLang && translations[savedLang]) {
      currentLang.value = savedLang
      document.documentElement.lang = savedLang
    }
  }
  
  return {
    currentLang,
    t,
    setLanguage,
    initLanguage
  }
}