import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import translationEn from "./locales/en/translation.json";
import translationAmh from "./locales/amh/translation.json";

const resources = {
  en: {
    translation: translationEn,
  },
  amh: {
    translation: translationAmh,
  },
};
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources,
    lng: "en",
    keySeparator: false,
    interpolation: { escapeValue: false },
  });
// .init({
//   debug: true,
//   fallbackLg: "en",
//   resources,
//   lng: "en", // Set the default language
//   keySeparator: false, // Allow for nested translations without using dots
//   interpolation: {
//     escapeValue: false,
//   },
// });
export default i18n;
