import React, { useState } from "react";

const Projects = () => {
  let [isExpanded, setIsExpanded] = useState(false);

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  function slideShow() {
    const slides = ["/vibefy1.png", "/vibefy2.png", "/vibefy3.png"];
  }

  return (
    <div className="w-[50vw] flex">
      <div
        className={`bg-neutral-900 ml-12 mt-20 grid grid-cols-1 rounded ${
          isExpanded ? "w-130" : "w-30 h-10"
        } overflow-hidden transition-all transition-discrete duration-700 bold text-slate-200`}
      >
        <h1
          className="bg-neutral-950 pl-3 pt-2 pb-2 h-11 mb-0 rounded cursor-pointer"
          onClick={toggleExpand}
        >
          Projects
        </h1>
        <div>
          <img src="/vibefy1.png" className="h-60" />
          <h1 className="p-2 pt-3">
            This is a music player app using the Spotify API
          </h1>
          <h1 className="p-2 pt-3">TL;DR: </h1>
          <p className="p-2">
            Spotify updated it's documentation and i'm not allowed to update the
            app to production mode, if you are not a technical recruiter, you
            can watch this video on youtube showing how the app works:
            <a>Video</a>
          </p>
        </div>
        <button
          className="bg-neutral-800 cursor-pointer place-self-end p-2"
          onClick={toggleExpand}
        >
          Hide
        </button>
      </div>
    </div>
  );
};

export default Projects;
