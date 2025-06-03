//Projects.jsx

import { useState, useEffect } from "react";

export default function Projects() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-[30%] mt-40 mb-20 ml-10">
      <div
        className="bg-slate-900/95 border border-indigo-950/90 rounded-lg p-6 transition-transform duration-300"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23020617" fillOpacity="0.05"/><path d="M0 0L100 100M100 0L0 100" stroke="%236d28d9" strokeWidth="0.5" strokeOpacity="0.15"/></svg>\')',
          transform: `translateY(${scrollY * -0.02}px)`,
        }}
      >
        <h2 className="text-xl font-cinzel text-purple-300 mb-4">Projects</h2>
        <div className="space-y-4 text-slate-300 font-crimson">
          <a
            href="http://localhost:5173"
            target="_blank"
            rel="noopener noreferrer"
          >
            Placeholder link text
          </a>
        </div>
      </div>
    </div>
  );
}
