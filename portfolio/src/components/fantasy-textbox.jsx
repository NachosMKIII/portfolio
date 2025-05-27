"use client";

import React, { useState, useEffect } from "react";
import { Scroll } from "lucide-react";

export default function FantasyTextbox() {
  const [message, setMessage] = useState("");
  const [isGlowing, setIsGlowing] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const defaultText =
    "The ancient texts shall appear here, once you've inscribed your message below...";

  useEffect(() => {
    setIsGlowing(message.length > 0);
  }, [message]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="relative">
        {/* Ornate Border */}
        <div
          className={`absolute inset-0 border-8 border-indigo-950/90 rounded-lg transition-all duration-300 ${
            isFocused ? "shadow-lg shadow-purple-500/30" : ""
          }`}
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><rect width="20" height="20" fill="none" stroke="%234c1d95" strokeWidth="1" strokeOpacity="0.3"/></svg>\')',
            boxShadow: `inset 0 0 20px 5px rgba(79, 70, 229, 0.2), 0 0 15px rgba(79, 70, 229, 0.3) ${
              isFocused ? ", 0 0 25px rgba(139, 92, 246, 0.4)" : ""
            }`,
          }}
        />

        {/* Corner Ornaments */}
        {[
          { top: "-top-3", left: "-left-3" },
          { top: "-top-3", left: "-right-3" },
          { top: "-bottom-3", left: "-left-3" },
          { top: "-bottom-3", left: "-right-3" },
        ].map((position, index) => (
          <div
            key={index}
            className={`absolute ${position.top} ${position.left} w-8 h-8 bg-indigo-900 rounded-full border-2 border-purple-700 flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer`}
          >
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
          </div>
        ))}

        {/* Textbox Content */}
        <div
          className="relative z-10 bg-slate-900/95 p-6 rounded-lg min-h-[200px]"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23020617" fillOpacity="0.05"/><path d="M0 0L100 100M100 0L0 100" stroke="%236d28d9" strokeWidth="0.5" strokeOpacity="0.15"/></svg>\')',
          }}
        >
          <div className="text-center mb-4">
            <h3 className="text-purple-300 font-cinzel text-xl tracking-wide">
              ~ Arcane Grimoire ~
            </h3>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-500/70 to-transparent mt-1"></div>
          </div>

          <div
            className={`font-crimson text-slate-300 leading-relaxed mb-4 min-h-[100px] transition-all duration-300 ${
              isGlowing ? "text-shadow-glow" : ""
            }`}
            style={{
              textShadow: isGlowing ? "0 0 10px rgba(139, 92, 246, 0.6)" : "",
            }}
          >
            {message || defaultText}
          </div>

          <div className="flex items-center gap-2 mt-4">
            <Scroll className="h-5 w-5 text-purple-400" />
            <textarea
              value={message}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Write thy message here..."
              className={`w-full bg-slate-800/90 border border-purple-900/70 rounded px-3 py-2 text-slate-200 font-crimson placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-600/50 min-h-[80px] resize-none transition-all duration-300 ${
                isFocused ? "shadow-lg shadow-purple-500/20" : ""
              }`}
              style={{
                backgroundImage:
                  'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23020617" fillOpacity="0.05"/><path d="M0 0L100 100M100 0L0 100" stroke="%236d28d9" strokeWidth="0.5" strokeOpacity="0.1"/></svg>\')',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
