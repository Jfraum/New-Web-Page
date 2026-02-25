import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador/país automáticamente
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: {
          "titulo": "Welcome to Fraum",
          "subtitulo": "The best platform for you.",
          "boton": "Get Started"
        }
      },
      es: {
        translation: {
          "titulo": "Bienvenido a Fraum",
          "subtitulo": "La mejor plataforma para ti.",
          "boton": "Comenzar"
        }
      }
    },
    fallbackLng: "en", // Si no detecta el idioma, usa inglés por defecto
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;