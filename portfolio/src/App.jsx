import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Games from "./components/Games";
import Albums from "./components/Albums";
import MainTab from "./components/MainTab";

const App = () => {
  const scrollbarConfig = {
    trackColor: "#2a0004",
    //thumbColor: "#171717",
    thumbColor: "#5b0009",
    thumbHover: "#84000d",
    thumbActive: "#84000d",
  };

  return (
    <div className="relative w-screen h-screen">
      <div className="eerie-filter"></div>
      {/*<div className="scanlines"></div>*/}
      <div className="vignette"></div>
      <div className="color-distortion"></div>
      <div
        className="absolute main-background inset-0 z-1 h-screen w-screen bg-center bg-cover bg-no-repeat"
        style={{
          filter: "",
        }}
      ></div>
      <div
        className=" z-2 h-screen overflow-y-auto overflow-x-hidden w-screen custom-scrollbar
      absolute inset-0"
      >
        <div className="w-full flex items-center justify-center">
          <Navbar />
        </div>
        <div className="flex justify-center items-center">
          <MainTab />
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
        .custom-scrollbar::-webkit-scrollbar-thumb:active {
          background: ${scrollbarConfig.thumbActive};
        };   
`}
        </style>
      </div>
    </div>
  );
};

export default App;
