import React from "react";
import AboutMe from "./AboutMe";
import Games from "./Games";
import Albums from "./Albums";

const PersonalSlop = () => {
  return (
    <div>
      <AboutMe />
      <Games />
      <Albums />
      <div className="flex justify-center items-center">
        <img src="me-samarie.jpg" />
      </div>
    </div>
  );
};

export default PersonalSlop;
