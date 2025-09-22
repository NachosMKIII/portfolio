import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Games = () => {
  const scrollRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(true);

  //this config gets overwritten by the one in App.jsx
  const scrollbarConfig = {
    trackColor: "#0a0a0a",
    thumbColor: "#171717",
    thumbHover: "#171717",
    thumbActive: "#171717",
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 176;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-[50vw] z-10">
      <h1
        className={`${isExpanded ? null : "opacity-70"} ml-12 mt-5 w-54 text-xl
          bg-neutral-950 p-2 pb-3 px-6  text-neutral-200 cursor-pointer`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        Games i really like
      </h1>
      <div
        className={`flex gap-4 ml-2 w-[49vw] mt-4 ${
          isExpanded ? null : "hidden hide-scrollbar"
        }`}
      >
        <button
          onClick={() => scroll("left")}
          className="bg-neutral-950 cursor-pointer w-10 h-10 rounded-full relative top-25"
        >
          <ChevronLeft className="text-neutral-200" />
        </button>
        <div
          className="flex gap-4 overflow-x-auto custom-scrollbar"
          ref={scrollRef}
        >
          <a
            href="https://en.wikipedia.org/wiki/Kenshi_(video_game)"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img
              src="/kenshi.jpeg"
              href="https://en.wikipedia.org/wiki/Kenshi_(video_game)"
              className="w-40 mt-4 mb-4 h-52 cursor-pointer"
            />
          </a>
          <a
            href="https://en.wikipedia.org/wiki/The_Elder_Scrolls_V:_Skyrim"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img src="/skyrim.png" className="w-40 h-52 mb-4 mt-4" />
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Stardew_Valley"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img
              src="/stardew-valley.jpeg"
              className="w-40 mt-4 h-52 cursor-pointer"
            />
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Fear_%26_Hunger#Fear_&_Hunger_2:_Termina"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img
              src="/termina.jpeg"
              className="w-40 mt-4 h-52 cursor-pointer"
            />
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Ultrakill"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img
              src="/ultrakill.webp"
              className="w-40 mt-4 h-52 cursor-pointer"
            />
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Devil_May_Cry_3:_Dante%27s_Awakening"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img src="/dmc3.jpg" className="w-40 mt-4 h-52 cursor-pointer" />
          </a>
        </div>
        <button
          onClick={() => scroll("right")}
          className="bg-neutral-950 cursor-pointer w-10 h-10 rounded-full relative top-25"
        >
          <ChevronRight className=" text-neutral-200" />
        </button>
      </div>
      <style>
        {`
        .custom-scrollbar::-webkit-scrollbar {
          width: 18px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: ${scrollbarConfig.trackColor};
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${scrollbarConfig.thumbColor};
          border-radius: 6px;
          border: 2px solid ${scrollbarConfig.trackColor};
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: ${scrollbarConfig.thumbHover};
        }
        .custom-scrollbar-cozy::-webkit-scrollbar-thumb:active {
          background: ${scrollbarConfig.thumbActive};
        }`}
      </style>
    </div>
  );
};

export default Games;
