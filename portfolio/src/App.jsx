import React from "react";
import FantasyHeader from "./components/fantasy-header";
import FantasyTextbox from "./components/fantasy-textbox";
import PortfolioContent from "./components/portfolio-content";

const App = () => {
  return (
    <div className="bg ">
      <FantasyHeader />
      <FantasyTextbox />
      <PortfolioContent />
    </div>
  );
};
export default App;
