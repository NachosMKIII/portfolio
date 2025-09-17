import React, { useState, useEffect } from "react";

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(true);
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
        className={`bg-neutral-900 projects ml-12 mt-20 rounded ${
          isExpanded ? "w-130 h-300" : "w-35 h-14"
        } overflow-hidden transition-all transition-discrete duration-700 bold text-neutral-200
        `}
      >
        <h1
          className="bg-neutral-950 pl-3 pt-2
           h-14 mb-0 rounded cursor-pointer text-3xl"
          onClick={toggleExpand}
        >
          Projects
        </h1>
        <div>
          <img src={slides[index]} className="h-60 mx-2" />
          <h1 className="p-2 pt-3 text-xl">
            This is a music player app using the Spotify API
          </h1>
          <h1 className="p-2 pt-3 text-xl">TL;DR: </h1>
          <p className="p-2 text-lg">
            Spotify updated it's documentation and i'm not allowed to update the
            app to production mode, if you are not a technical recruiter, you
            can watch this video on youtube showing how the app works:
            <a className="underline cursor-pointer ml-1">Video</a>
          </p>
          <p className="p-2">
            If you are technical and have a premium spotify account you can
            clone the{" "}
            <a
              href="https://github.com/NachosMKIII/Vibefy"
              className="underline cursor-pointer"
            >
              github repo
            </a>{" "}
            and run it yourself (or also just watch the video above if you want
            to have an idea of what project is like)
          </p>
          <p className="p-2 text-xl">About the project</p>
          <p className="p-2 text-lg">
            It's a music player web app built using NextJS(it was for making
            token storing safe before i knew that the spotify dodumentation was
            updated) and therefore{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
