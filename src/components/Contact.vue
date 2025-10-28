<template>
  <section id="contact" class="section bg-gradient-to-br from-blue-100/40 via-purple-100/40 to-pink-100/40">
    <div class="container-custom max-w-4xl">
      <h2 class="section-title">{{ t.contact.title }}</h2>

      <div class="card-glass">
        <div class="grid md:grid-cols-2 gap-10">
          <div>
            <h3 class="text-2xl font-bold mb-6 text-gray-900">{{ t.contact.info }}</h3>
            <div class="space-y-5">
              <ContactItem icon="email" :label="t.contact.email" value="ilariapace06@gmail.com"
                href="mailto:ilariapace06@gmail.com" />
              <ContactItem icon="phone" :label="t.contact.phone" value="06 41 86 90 06" href="tel:+33641869006" />
              <ContactItem icon="location" :label="t.contact.location" :value="t.contact.locationValue" />
              <ContactItem icon="github" label="GitHub" value="github.com/lapace90"
                href="https://github.com/lapace90" />
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-bold mb-6 text-gray-900">{{ t.contact.languages }}</h3>
            <div class="space-y-4 mb-8">
              <LanguageLevel :name="getLanguageName('it')" level="nativeLanguage" :t="t" />
              <LanguageLevel :name="getLanguageName('fr')" level="C2" />
              <LanguageLevel :name="getLanguageName('en')" level="B2" />
              <LanguageLevel :name="getLanguageName('es')" level="B2" />
            </div>

            <a href="/cv-fr.pdf" download
              class="btn-primary w-full text-center inline-flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                </path>
              </svg>
              {{ t.contact.downloadCV }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'
import ContactItem from './ContactItem.vue'
import LanguageLevel from './LanguageLevel.vue'

const { currentLang, t } = useI18n()

const getLanguageName = (lang) => {
  const names = {
    it: { fr: 'Italien', en: 'Italian', it: 'Italiano', es: 'Italiano' },
    fr: { fr: 'Français', en: 'French', it: 'Francese', es: 'Francés' },
    en: { fr: 'Anglais', en: 'English', it: 'Inglese', es: 'Inglés' },
    es: { fr: 'Espagnol', en: 'Spanish', it: 'Spagnolo', es: 'Español' }
  }
  return names[lang][currentLang.value]
}
</script>