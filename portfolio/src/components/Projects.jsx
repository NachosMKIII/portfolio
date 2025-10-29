import React, { useState, useEffect } from "react";
import Vibefy from "./Vibefy";

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="">
      <div className="mt-4">
        <Vibefy />
      </div>
    </div>
  );
};

export default Projects;
