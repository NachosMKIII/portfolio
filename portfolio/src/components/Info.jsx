import React from "react";
import CopyText from "../functions/CopyText";
import { useTranslation } from "react-i18next";
import ResumeDownloadEn from "/resume.pdf";
import ResumeDownloadPt from "/currículo.pdf";
import ResumeImageEn from "/resume.png";
import ResumeImagePt from "/currículo.png";

const TranslatedResume = (props) => {
  const { i18n, t } = useTranslation("Info");
  const resumeDownloads = {
    en: ResumeDownloadEn,
    pt: ResumeDownloadPt,
  };
  const cleanLanguage = i18n.language.split("-")[0];
  const resumeDownload = resumeDownloads[cleanLanguage] || "/resume.pdf";

  const resumeImages = {
    en: ResumeImageEn,
    pt: ResumeImagePt,
  };

  const resumeImage = resumeImages[cleanLanguage] || "/resume.png";

  return (
    <a href={resumeDownload} download>
      <div className="flex-col items-center pdf-container justify-center px-[1px] pb-2">
        <img src={resumeImage} className="w-70" />
        <button className="flex ml-2 pt-2 cursor-pointer justify-center font-extrabold items-center">
          {t("button")}
        </button>
      </div>
    </a>
  );
};

const Info = () => {
  const { t } = useTranslation("Info");

  return (
    <div className="pb-10">
      <div className="flex justify-between items-center">
        <div className="text-8xl relative ml-2">
          <div className="">
            <a
              href="https://github.com/NachosMKIII"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <h1 className="inline cursor-pointer">Github</h1>
              <img
                src="github-logo.png"
                className="w-20 h-20 relative bottom-3 ml-4 inline"
              />
            </a>
          </div>
          <div className="mt-10 mb-10">
            <a
              href="https://www.linkedin.com/in/ricardo-lucas-824668331/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <h1 className="inline cursor-pointer">linkedIn</h1>
              <img
                src="LI-In-Bug.png"
                className="w-20 h-20 relative bottom-3 ml-4 inline"
              />
            </a>
          </div>
          <div>
            <CopyText text="workemailreceiver@gmail.com">
              <h1 className="inline cursor-pointer">Email</h1>
              <img
                src="email-icon.png"
                className="w-20 h-20 relative bottom-3 ml-4 inline"
              />
            </CopyText>
          </div>
        </div>
        <TranslatedResume />
      </div>
    </div>
  );
};

export default Info;
