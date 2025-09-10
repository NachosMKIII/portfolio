//App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div
      className="bg-gray-950 h-screen overflow-y-auto overflow-x-hidden w-screen bg-center bg-cover  bg-no-repeat"
      style={{
        backgroundImage: `url('/bg2.png')`,
      }}
    >
      <div className="w-full flex items-center justify-center">
        <Navbar />
      </div>
      <div className="flex h-full">
        <AboutMe />
        <div className="flex items-center justify-center h-full border-2 border-neutral-950"></div>
        <Projects />
      </div>
    </div>
  );
};

export default App;
