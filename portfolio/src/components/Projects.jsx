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
        className={`bg-neutral-900 projects ml-12 mt-20 ${
          isExpanded ? "w-130 h-300" : "w-35 h-14"
        } overflow-hidden transition-all transition-discrete duration-700 bold text-neutral-200
        `}
      >
        <h1
          className="bg-neutral-950 pl-3 pt-2
           h-14 mb-0 cursor-pointer text-3xl"
          onClick={toggleExpand}
        >
          Projects
        </h1>
        <div>
          <div className="flex items-center justify-center">
            <img src={slides[index]} className="w-full mx-2" />
          </div>
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
          <h1 className="p-2 text-xl">About the project</h1>
          <p className="p-2 text-lg">
            It's a music player web app that uses the spotify API for
            authentication and viewing and playing songs
            <br></br>
            It was built using NextJS(it was for making token storing safe
            before i knew that the spotify dodumentation was updated) and
            therefore React, on top of that i also used tailwind for
            easy-to-read default styling across all themes
          </p>
          <h1 className="p-2 pt-3 text-xl">Features: </h1>
          <p className="p-2 text-lg">
            <ul>
              <li className=" mt-1"> • You can play songs </li>
              <li className=" mt-1">
                • There is a player UI for you to control the track you are
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                playing
              </li>
              <li className=" mt-1">
                • You can create custom playlists that are stored and managed
                &nbsp;&nbsp; locally
              </li>

              <li className=" mt-1"> • The UX feels good</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
