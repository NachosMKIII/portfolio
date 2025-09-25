import React, { useState, useEffect } from "react";
import Vibefy from "./Vibefy";

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
    <div className="">
      <div className="mt-4">
        <div className="flex items-center justify-center">
          <div className="w-[780px]">
            <img src={slides[index]} className="rounded-t " />
            <h1 className="text-6xl w-[781px] px-2 py-2  project-name relative rounded-b">
              Vibefy
            </h1>
          </div>
        </div>
        <Vibefy />
      </div>
    </div>
  );
};

export default Projects;
