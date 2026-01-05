import React, { useState } from "react";
import Projects from "./Projects";
import Tools from "./Tools";
import Info from "./Info";
import { useTranslation } from "react-i18next";

const Professional = () => {
  const [selectedTab, setSelectedTab] = useState("projects");
  const { t } = useTranslation("Professional");

  return (
    <div>
      <div className="flex justify-center items-center bg-neutral-900/50 gap-20">
        <h1
          className={`px-3 pt-2 relative left-10
           h-14 mb-0 cursor-pointer text-3xl
           ${selectedTab === "projects" ? "underline" : null}`}
          onClick={() => setSelectedTab("projects")}
        >
          {t("h1-1")}
        </h1>
        <h1
          className={`px-3 pt-2 relative left-10
           h-14 mb-0 cursor-pointer text-3xl
           ${selectedTab === "tools" ? "underline" : null}`}
          onClick={() => setSelectedTab("tools")}
        >
          {t("h1-2")}
        </h1>
        <h1
          className={`px-3 pt-2 relative left-10
           h-14 mb-0 cursor-pointer text-3xl 
           ${selectedTab === "info" ? "underline" : null}`}
          onClick={() => setSelectedTab("info")}
        >
          {t("h1-3")}
        </h1>
      </div>
      {selectedTab === "projects" && <Projects />}
      {selectedTab === "tools" && <Tools />}
      {selectedTab === "info" && <Info />}
    </div>
  );
};

export default Professional;
