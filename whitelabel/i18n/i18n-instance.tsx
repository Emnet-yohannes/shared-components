import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import  en from './lng/en.json'
import  de from './lng/de.json'
import  fr from './lng/fr.json'
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources:
        {
              en: {
                translation: en
              },
              de: {
                translation: de
              },
              fr:{
                translation:fr
              }
            },
      lng: "en",
      fallbackLng: "en",

      interpolation: {
        escapeValue: false,
      },
    });
export default i18n;
