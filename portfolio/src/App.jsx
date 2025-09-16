//App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Games from "./components/Games";

const App = () => {
  const scrollbarConfig = {
    trackColor: "#0a0a0a",
    thumbColor: "#171717",
    thumbHover: "#171717",
    thumbActive: "#171717",
  };

  return (
    <div
      className="bg-gray-950 h-screen overflow-y-auto overflow-x-hidden w-screen bg-center bg-cover bg-no-repeat custom-scrollbar"
      style={{
        backgroundImage: `url('/bg2.png')`,
        filter: "",
      }}
    >
      <div className="w-full flex items-center justify-center">
        <Navbar />
      </div>
      <div className="flex h-full">
        <div>
          <AboutMe />
          <Games />
        </div>
        <div className="flex items-center justify-center h-[110vh] border-2 border-neutral-950"></div>
        <Projects />
      </div>
      <style>
        {`
        .custom-scrollbar::-webkit-scrollbar {
          width: 18px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: ${scrollbarConfig.trackColor};
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${scrollbarConfig.thumbColor};
          border-radius: 6px;
          border: 2px solid ${scrollbarConfig.trackColor};
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: ${scrollbarConfig.thumbHover};
        }
        .custom-scrollbar-cozy::-webkit-scrollbar-thumb:active {
          background: ${scrollbarConfig.thumbActive};
        }`}
      </style>
    </div>
  );
};

export default App;
