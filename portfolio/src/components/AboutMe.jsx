import React, { useState } from "react";

const AboutMe = () => {
  let [isExpanded, setIsExpanded] = useState(false);

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="w-[50vw] flex">
      <div
        className={`bg-neutral-900 ml-40 mt-20 rounded ${
          isExpanded ? "w-100 h-100" : "w-30 h-10"
        } overflow-hidden transition-all transition-discrete duration-700 bold text-slate-200`}
      >
        <h1
          className="bg-neutral-950 pl-3 pt-2 pb-2 rounded cursor-pointer"
          onClick={toggleExpand}
        >
          About Me
        </h1>
        <p className="p-2 pt-3 mb-10">
          I'm a junior software developer from Brazil, i'm currently in my last
          year of school(I'm 18) and i'm looking forward to getting in the tech
          industry, i have been studying programming for over a year
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
