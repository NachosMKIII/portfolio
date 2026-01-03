import React from "react";
import AboutMe from "./AboutMe";
import Games from "./Games";
import Albums from "./Albums";
import { useTranslation } from "react-i18next";
import MeSamarieEn from "/en/me-samarie.jpg";
import MeSamariePt from "/pt/me-samarie.png";

const TranslatedImage = () => {
  const { i18n } = useTranslation();
  const samarieMeme = {
    en: MeSamarieEn,
    pt: MeSamariePt,
  };
  const cleanLanguage = i18n.language.split("-")[0];
  const imageSrc = samarieMeme[cleanLanguage] || "me-samarie.jpg";

  return <img className="w-[800px]" src={imageSrc} alt="samarie" />;
};

const PersonalSlop = () => {
  return (
    <div>
      <AboutMe />
      <Games />
      <Albums />
      <div className="flex justify-center items-center">
        <TranslatedImage />
      </div>
    </div>
  );
};

export default PersonalSlop;
