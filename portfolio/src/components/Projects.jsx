import React, { useState, useEffect } from "react";

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [index, setIndex] = useState(0);

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  const slides = ["/vibefy1.png", "/vibefy2.png", "/vibefy3.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-[50vw] flex">
      <div
        className={`bg-neutral-900 ml-12 mt-20 rounded ${
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
          <img src={slides[index]} className="h-60" />
          <h1 className="p-2 pt-3">
            This is a music player app using the Spotify API
          </h1>
          <h1 className="p-2 pt-3">TL;DR: </h1>
          <p className="p-2">
            Spotify updated it's documentation and i'm not allowed to update the
            app to production mode, if you are not a technical recruiter, you
            can watch this video on youtube showing how the app works:
            <a className="underline cursor-pointer">Video</a>
          </p>
          <p className="p-2">
            If you are technical you can clone the{" "}
            <a
              href="https://github.com/NachosMKIII/Vibefy"
              className="underline cursor-pointer"
            >
              github repo
            </a>{" "}
            and run it yourself (or also just watch the video above)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
