import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Games from "./components/Games";
import Albums from "./components/Albums";
import AudioIcon from "./components/audioIcon";

const App = () => {
  const scrollbarConfig = {
    trackColor: "#0a0a0a",
    thumbColor: "#171717",
    thumbHover: "#404040",
    thumbActive: "#404040",
  };

  return (
    <div className="relative w-screen h-screen">
      {/* <div className="eerie-filter"></div>
      <div className="scanlines"></div>
      <div className="vignette"></div>
      <div className="color-distortion"></div> */}
      <div
        className="absolute inset-0 z-1 h-screen w-screen bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/bg2.png')`,
          filter: "saturate(0.8) contrast(1.5)",
        }}
      ></div>
      <div
        className=" z-2 h-screen overflow-y-auto overflow-x-hidden w-screen custom-scrollbar
      relative"
      >
        <div className="w-full flex items-center justify-center">
          <Navbar />
          <AudioIcon />
        </div>
        <div className="flex h-full">
          <div>
            <AboutMe />
            <Games />
            <Albums />
          </div>
          <div className="flex items-center justify-center h-[215vh] border-2 border-neutral-950"></div>
          <Projects />
        </div>
        <style>
          {`
        .custom-scrollbar::-webkit-scrollbar {
          width: 18px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: ${scrollbarConfig.trackColor};
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${scrollbarConfig.thumbColor};
          border: 2px solid ${scrollbarConfig.trackColor};
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: ${scrollbarConfig.thumbHover};
        }
        .custom-scrollbar-cozy::-webkit-scrollbar-thumb:active {
          background: ${scrollbarConfig.thumbActive};
        };   
`}
        </style>
      </div>
    </div>
  );
};

export default App;
