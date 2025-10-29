import React, { useState, useEffect } from "react";

const Vibefy = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [index, setIndex] = useState(0);
  const slides = ["/vibefy1.png", "/vibefy2.png", "/vibefy3.png"];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);
  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center mb-2">
        <img src={slides[index]} className="rounded-t w-[781px] " />
        <h1 className="text-6xl w-[781px] px-2 py-2  project-name relative rounded-b">
          Vibefy
        </h1>
      </div>
      <div className="mb-10">
        <h1 className="p-2 pt-3 text-3xl">
          This is currently my only project(except for this portfolio);
        </h1>
        <h1 className="p-2 pt-3 text-3xl">
          This is a music player app using the Spotify API
        </h1>
        <h1 className="p-2 pt-3 text-3xl">TL;DR: </h1>
        <p className="p-2 text-lg">
          Spotify updated it's documentation and I'm not allowed to update the
          app to production mode, if you are not a technical recruiter, you can
          watch this video on youtube showing how the app works:
          <a
            className="underline cursor-pointer ml-1"
            href="https://www.youtube.com/watch?v=iDAVwUUYhbg"
            target="_blank"
          >
            Video
          </a>
        </p>
        <p className="p-2 text-lg">
          If you are technical and have a premium spotify account you can clone
          the{" "}
          <a
            href="https://github.com/NachosMKIII/Vibefy"
            className="underline cursor-pointer"
          >
            github repo
          </a>{" "}
          and run it yourself (or also just watch the video above if you want to
          have an idea of what project is like)
        </p>
        <h1 className="p-2 text-3xl">About the project:</h1>
        <p className="p-2 text-lg">
          It's a music player web app that uses the spotify API for
          authentication and viewing and playing songs
          <br></br>
          It was built using NextJS( it was for making token storing safe before
          I knew that the spotify documentation was updated) and therefore
          React, on top of that I also used tailwind for easy-to-read default
          styling across all themes
        </p>
        <h1 className="p-2 pt-3 text-3xl">Context:</h1>
        <p className="p-2 text-lg">
          This is my first "real" project, I built it to learn hands on the
          essentials of software development, eg: UI/UX, interacting with an
          API/backend, third-party services, etc. Also I thought it would be the
          perfect project considering I like music and Spotify has great
          documentation for devs
        </p>
        <h1 className="p-2 pt-3 text-3xl">Features: </h1>
        <p className="p-2 text-lg">
          <li className=" mt-1"> • You can play songs </li>
          <li className=" mt-1">
            • There is a player UI for you to control the track you are playing
          </li>
          <li className=" mt-1">
            • You can create custom playlists that are stored and managed
            locally
          </li>
        </p>
      </div>
    </div>
  );
};

export default Vibefy;
