import React, { useState, useEffect } from "react";
import Vibefy from "./Vibefy";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TheOldMarket from "./TheOldMarket";

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [project, setProject] = useState(0);

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="">
      <div className="mt-4">
        {project < 1 && (
          <Vibefy
            project={project}
            incrementProject={() => setProject(project + 1)}
            decrementProject={() => setProject(project - 1)}
          />
        )}
        {project >= 1 && (
          <TheOldMarket
            project={project}
            incrementProject={() => setProject(project + 1)}
            decrementProject={() => setProject(project - 1)}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
