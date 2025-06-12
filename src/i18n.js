import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from './locales/en.json';
import translationES from './locales/es.json';

// Traducciones
const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // idioma por defecto
    fallbackLng: "es",
    debug: true, // activar en desarrollo para ver mensajes de depuración
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, // desactivar Suspense para evitar problemas de renderizado
    },
  });

export default i18n;
