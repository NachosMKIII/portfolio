//App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FantasyHeader from "./components/fantasy-header";

import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[url('./assets/images/cool-wizard-night.png')] w-screen min-h-screen bg-center bg-cover bg-no-repeat overflow-x-hidden">
        <FantasyHeader />
        <Routes>
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
