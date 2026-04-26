import { ref, computed } from 'vue'
import { translations } from '../locales/i18n'

// Initialise la langue depuis localStorage AVANT le premier rendu.
// Évite le flash de français quand l'utilisateur a choisi une autre langue.
const getInitialLang = () => {
  if (typeof window === 'undefined') return 'fr'
  const saved = localStorage.getItem('portfolio-lang')
  if (saved && translations[saved]) {
    document.documentElement.lang = saved
    return saved
  }
  return 'fr'
}

const currentLang = ref(getInitialLang())

export function useI18n() {
  const t = computed(() => translations[currentLang.value])

  const setLanguage = (lang) => {
    if (!translations[lang]) return
    currentLang.value = lang
    localStorage.setItem('portfolio-lang', lang)
    document.documentElement.lang = lang
  }

  // Conservé pour compat mais plus indispensable depuis l'init synchrone du ref
  const initLanguage = () => {
    const saved = localStorage.getItem('portfolio-lang')
    if (saved && translations[saved]) {
      currentLang.value = saved
      document.documentElement.lang = saved
    }
  }

  return {
    currentLang,
    t,
    setLanguage,
    initLanguage,
  }
}
