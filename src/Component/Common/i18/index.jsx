
import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import English from "../../../assets/Locales/en/translation.json";
import Gujarati from "../../../assets/Locales/gj/translation.json";
import Hindi from "../../../assets/Locales/hi/translation.json";
import Kannada from "../../../assets/Locales/ka/translation.json";
import Marathi from "../../../assets/Locales/ma/translation.json";
import Punjabi from "../../../assets/Locales/pu/translation.json";
import Tamil from "../../../assets/Locales/ta/translation.json";
import Teluge from "../../../assets/Locales/te/translation.json";
import Urdu from "../../../assets/Locales/ur/translation.json";
// {/* Rumeno farm  */}
// {/* Rumeno */}
// {/* Veterinary */}
const resources = {
  en: {
    translation: English,
  },
  gj: {
    translation: Gujarati,
  },
  hi: {
    translation: Hindi,
  },
  ka: {
    translation: Kannada,
  },
  ma: {
    translation: Marathi,
  },
  pu: {
    translation: Punjabi,
  },
  ta: {
    translation: Tamil,
  },
  te: {
    translation: Teluge,
  },
  ur: {
    translation: Urdu,
  },
};
// const option = {
//   order: ["navigator", "htmlTag", "path", "subdmail"],
//   checkWhiteList: true,
// };
i18n
  .use(Backend)

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    // detectio: option,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
      // {/* Rumeno farm  */}
      // {/* Rumeno */}
      // {/* Veterinary */}
    
  });

export default i18n;
