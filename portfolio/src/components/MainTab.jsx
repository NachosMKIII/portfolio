import React, { useState } from "react";
import PersonalSlop from "./PersonalSlop";
import Projects from "./Projects";
import Professional from "./Professional";
import { useTranslation } from "react-i18next";

const MainTab = () => {
  const [selectedTab, setSelectedTab] = useState("professional");
  const { t } = useTranslation("MainTab");

  return (
    <div className="main-tab w-250 h-165 mt-4 max-h-165 bg-neutral-800 text-neutral-200">
      <div className="flex justify-center items-center header py-4 bg-neutral-900 gap-60">
        <h1
          className={`cursor-pointer text-3xl w-[300px] relative left-10 tracking-wider slop ${
            selectedTab === "personal" ? "underline" : null
          }`}
          onClick={() => setSelectedTab("personal")}
        >
          {t("h1-1")}{" "}
        </h1>
        <h1
          className={`cursor-pointer py-4 text-3xl w-[300px] relative left-20 tracking-wider professional ${
            selectedTab === "professional" ? "underline" : null
          }`}
          onClick={() => setSelectedTab("professional")}
        >
          {t("h1-2")}
        </h1>
      </div>
      {selectedTab === "personal" && (
        <div
          className="h-138 max-h-138 overflow-y-scroll custom-scrollbar oveflow-x-hidden
      [mask-image:linear-gradient(to_bottom,black_95%,transparent_100%)]"
        >
          <PersonalSlop />
        </div>
      )}
      {selectedTab === "professional" && (
        <div
          className="h-138 max-h-138 overflow-y-scroll custom-scrollbar
      [mask-image:linear-gradient(to_bottom,black_95%,transparent_100%)]
      overflow-x-hidden"
        >
          <Professional />
        </div>
      )}
    </div>
  );
};

export default MainTab;
