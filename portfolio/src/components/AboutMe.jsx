import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  let [isExpanded, setIsExpanded] = useState(true);

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  const { t } = useTranslation("AboutMe");

  return (
    <div className="z-10 flex">
      <div
        className={` info-container mt-10 overflow-y-auto custom-scrollbar transition-all transition-discrete duration-700 bold text-neutral-200`}
      >
        <h1 className=" pl-3 text-3xl pt-2 h-14">{t("h1-1")}</h1>

        <p className="p-2 pt-3 mb-3 text-lg">{t("p-1")}</p>
        <p className="text-xl p-2">Hobbies:</p>
        <p className="text-lg p-2">{t("p-3")}</p>
        <p className="text-lg p-2">{t("p-4")}</p>
      </div>
    </div>
  );
};

export default AboutMe;
