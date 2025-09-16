import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Games = () => {
  const scrollRef = useRef(null);

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
    <div className=" w-[50vw]">
      <h1 className="ml-12 mt-5 w-40 text-xl rounded-full bg-neutral-950 p-2 px-6 text-neutral-200">
        Games i like
      </h1>
      <div className="flex gap-4 ml-2 w-[49vw] mt-4">
        <button
          onClick={() => scroll("left")}
          className="bg-neutral-950 cursor-pointer w-10 h-10 rounded-full relative top-25"
        >
          <ChevronLeft className="text-neutral-200" />
        </button>
        <div
          className="flex gap-4 overflow-x-hidden no-scrollbar"
          ref={scrollRef}
        >
          <img
            src="/kenshi.jpeg"
            href="https://en.wikipedia.org/wiki/Kenshi_(video_game)"
            className="w-44 mt-4 mb-4 h-52 cursor-pointer"
          />

          <a
            href="https://en.wikipedia.org/wiki/The_Elder_Scrolls_V:_Skyrim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/skyrim.png" className="w-44 mt-4 h-52" />
          </a>
          <img
            src="/stardew-valley.jpeg"
            className="w-44 mt-4 h-52 cursor-pointer"
          />
          <img src="/termina.jpeg" className="w-44 mt-4 h-52 cursor-pointer" />
          <img
            src="/ultrakill.webp"
            className="w-44 mt-4 h-52 cursor-pointer"
          />
          <img src="/dmc.jpg" className="w-44 mt-4 h-52 cursor-pointer" />
        </div>
        <button
          onClick={() => scroll("right")}
          className="bg-neutral-950 cursor-pointer w-10 h-10 rounded-full relative top-25"
        >
          <ChevronRight className=" text-neutral-200" />
        </button>
      </div>
    </div>
  );
};

export default Games;
