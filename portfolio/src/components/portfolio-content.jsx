"use client";

import { useState, useEffect } from "react";

export default function PortfolioContent() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-8 space-y-6">
      <div
        className="bg-slate-900/95 border border-indigo-950/90 rounded-lg p-6 transition-transform duration-300"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23020617" fillOpacity="0.05"/><path d="M0 0L100 100M100 0L0 100" stroke="%236d28d9" strokeWidth="0.5" strokeOpacity="0.15"/></svg>\')',
          transform: `translateY(${scrollY * -0.02}px)`,
        }}
      >
        <h2 className="text-xl font-cinzel text-purple-300 mb-4">
          Portfolio Showcase
        </h2>
        <div className="space-y-4 text-slate-300 font-crimson">
          <p>
            Welcome to my mystical portfolio realm, where code meets magic and
            creativity knows no bounds.
          </p>
          <p>
            Scroll through this enchanted interface to discover the arcane arts
            of web development, where each project is a spell carefully crafted
            with modern technologies.
          </p>
          <p>
            From React incantations to Next.js enchantments, every line of code
            is imbued with purpose and passion.
          </p>
          <p>
            The scrollbar itself is a testament to attention to detail - notice
            how it glows with ethereal purple light as you navigate through the
            content.
          </p>
          <p>
            This portfolio demonstrates not just technical skills, but an eye
            for design that transforms ordinary interfaces into extraordinary
            experiences.
          </p>
          <p>Continue scrolling to witness more magical creations...</p>
          <p>
            Each project tells a story of innovation, problem-solving, and the
            endless pursuit of digital excellence.
          </p>
          <p>
            The dark theme isn't just aesthetic - it represents the mysterious
            depths of code where true magic happens.
          </p>
        </div>
      </div>
    </div>
  );
}
