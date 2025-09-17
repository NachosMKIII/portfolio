import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Albums = () => {
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
      <h1 className="ml-12 mt-5 w-54 text-xl rounded-full bg-neutral-950 p-2 px-6 text-neutral-200">
        Games i really like
      </h1>
      <div className="flex gap-4 ml-2 w-[49vw] mt-4">
        <button
          onClick={() => scroll("left")}
          className="bg-neutral-950 cursor-pointer w-10 h-10 rounded-full relative top-25"
        >
          <ChevronLeft className="text-neutral-200" />
        </button>
        <div
          className="flex gap-4 overflow-x-auto scrollbar-hide"
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
    </div>
  );
};

export default Albums;
