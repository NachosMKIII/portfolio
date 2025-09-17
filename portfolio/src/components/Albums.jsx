import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Albums = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 208;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className=" w-[50vw]">
      <h1 className="ml-12 mt-5 w-109 line-clamp-2 text-xl rounded-full bg-neutral-950 p-2 px-6 text-neutral-200">
        Albums i really like (from bands i really like)
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
            href="https://open.spotify.com/track/0NCcbiW3kiasTzgg3CiBrf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img
              src="/only-place.jpg"
              className="w-52 mt-4 mb-4 h-52 cursor-pointer"
            />
          </a>
          <a
            href="https://open.spotify.com/album/6EtrZFZ6FMR6fbB82oHUWi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img src="/cassette-city.jpg" className="w-52 h-52 mb-4 mt-4" />
          </a>
          <a
            href="https://open.spotify.com/album/5tTmosmyV33wCiwniZc4Qs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img
              src="/depression-cherry.jpg"
              className="w-52 mt-4 h-52 cursor-pointer"
            />
          </a>
          <a
            href="https://open.spotify.com/album/1CbtBQqibzdxhmpiLD7vzN"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img
              src="/hawaii-part-ii.jpg"
              className="w-52 mt-4 h-52 cursor-pointer"
            />
          </a>
          <a
            href="https://open.spotify.com/album/4XriwpnB6fJm8OMxb7wQcV"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img
              src="/impossible-animals.jpg"
              className="w-52 mt-4 h-52 cursor-pointer"
            />
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Devil_May_Cry_3:_Dante%27s_Awakening"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img src="/lighght.jpg" className="w-52 mt-4 h-52 cursor-pointer" />
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Devil_May_Cry_3:_Dante%27s_Awakening"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img
              src="/next-thing.jpg"
              className="w-52 mt-4 h-52 cursor-pointer"
            />
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Devil_May_Cry_3:_Dante%27s_Awakening"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img src="pop-food.jpg" className="w-52 mt-4 h-52 cursor-pointer" />
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Devil_May_Cry_3:_Dante%27s_Awakening"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img src="/OWUWAYN.jpg" className="w-52 mt-4 h-52 cursor-pointer" />
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Devil_May_Cry_3:_Dante%27s_Awakening"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img
              src="/i-hate-jazz.jpg"
              className="w-52 mt-4 h-52 cursor-pointer"
            />
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
