import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your language files
import enTranslations from './locales/en/translation.json';
import esTranslations from './locales/es/translation.json';
import frTranslations from './locales/de/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
      de: { translation: deTranslations },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
