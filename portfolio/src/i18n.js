import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
//PT
import AboutMePt from "./locales/pt/aboutMe.json";
import GamesPt from "./locales/pt/games.json";
import AlbumsPt from "./locales/pt/albums.json";
import MainTabPt from "./locales/pt/mainTab.json";
import ProfessionalPt from "./locales/pt/professional.json";
import VibefyPt from "./locales/pt/vibefy.json";
import ToolsPt from "./locales/pt/tools.json";
//PT assets
import MeSamariePt from "/pt/me-samarie.png";
//EN
import AboutMeEn from "./locales/en/aboutMe.json";
import GamesEn from "./locales/en/games.json";
import AlbumsEn from "./locales/en/albums.json";
import MainTabEn from "./locales/en/mainTab.json";
import ProfessionalEn from "./locales/en/professional.json";
import VibefyEn from "./locales/en/vibefy.json";
import ToolsEn from "./locales/en/tools.json";
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
        Professional: ProfessionalEn,
        Vibefy: VibefyEn,
        Tools: ToolsEn,
      },
      pt: {
        AboutMe: AboutMePt,
        Games: GamesPt,
        Albums: AlbumsPt,
        MeSamarie: MeSamariePt,
        MainTab: MainTabPt,
        Professional: ProfessionalPt,
        Vibefy: VibefyPt,
        Tools: ToolsPt,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
