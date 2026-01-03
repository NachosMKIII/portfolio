import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
//PT
import AboutMePt from "./locales/pt/aboutMe.json";
import GamesPt from "./locales/pt/games.json";
import AlbumsPt from "./locales/pt/albums.json";
import MainTabPt from "./locales/pt/mainTab.json";
//PT assets
import MeSamariePt from "/pt/me-samarie.png";
//EN
import AboutMeEn from "./locales/en/aboutMe.json";
import GamesEn from "./locales/en/games.json";
import AlbumsEn from "./locales/en/albums.json";
import MainTabEn from "./locales/en/mainTab.json";
//EN assets
import MeSamarieEn from "/en/me-samarie.jpg";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        AboutMe: AboutMeEn,
        Games: GamesEn,
        Albums: AlbumsEn,
        MeSamarie: MeSamarieEn,
        MainTab: MainTabEn,
      },
      pt: {
        AboutMe: AboutMePt,
        Games: GamesPt,
        Albums: AlbumsPt,
        MeSamarie: MeSamariePt,
        MainTab: MainTabPt,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
