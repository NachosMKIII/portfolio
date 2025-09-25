import React, { useState } from "react";
import Projects from "./Projects";
import Tools from "./Tools";
import Info from "./Info";

const Professional = () => {
  const [selectedTab, setSelectedTab] = useState("projects");

  return (
    <div>
      <div className="flex justify-center items-center bg-neutral-900/50 gap-20">
        <h1
          className={`px-3 pt-2 relative left-10
           h-14 mb-0 cursor-pointer text-3xl
           ${selectedTab === "projects" ? "underline" : null}`}
          onClick={() => setSelectedTab("projects")}
        >
          Projects
        </h1>
        <h1
          className={`px-3 pt-2 relative left-10
           h-14 mb-0 cursor-pointer text-3xl
           ${selectedTab === "tools" ? "underline" : null}`}
          onClick={() => setSelectedTab("tools")}
        >
          Tools i use
        </h1>
        <h1
          className={`px-3 pt-2 relative left-10
           h-14 mb-0 cursor-pointer text-3xl 
           ${selectedTab === "info" ? "underline" : null}`}
          onClick={() => setSelectedTab("info")}
        >
          Resume and contact
        </h1>
      </div>
      {selectedTab === "projects" && <Projects />}
      {selectedTab === "tools" && <Tools />}
      {selectedTab === "info" && <Info />}
    </div>
  );
};

export default Professional;
