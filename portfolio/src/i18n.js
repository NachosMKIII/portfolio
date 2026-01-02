import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
//PT
import AboutMePt from "./locales/pt/AboutMe.json";
import GamesPt from "./locales/pt/games.json";
//EN
import AboutMeEn from "./locales/en/AboutMe.json";
import GamesEn from "./locales/en/games.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        AboutMe: AboutMeEn,
        Games: GamesEn,
      },
      pt: {
        AboutMe: AboutMePt,
        Games: GamesPt,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
