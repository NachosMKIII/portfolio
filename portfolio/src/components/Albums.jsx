import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Albums = () => {
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
      const scrollAmount = 224;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className=" w-[50vw]">
      {isExpanded ? (
        <h1
          className="ml-12 mt-5 w-125 text-xl bg-neutral-950 p-2 pb-3 px-6 text-neutral-200 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          Albums i really like (from bands/artists i really like)
        </h1>
      ) : (
        <h1
          className="ml-12 mt-5  text-xl bg-neutral-950 p-2 pb-3 px-6 text-neutral-200 cursor-pointer
        opacity-70 w-54 whitespace-nowrap overflow-hidden"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          Albums i really like
        </h1>
      )}
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
            href="https://open.spotify.com/album/02gFZUaqAcQNtV6rmVIsN0"
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
            href="https://open.spotify.com/album/0AL7olZ75pi55q9p1eHaD8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img src="/bloom.jpg" className="w-52 mt-4 h-52 cursor-pointer" />
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
            href="https://open.spotify.com/album/3vwhMjwukv3LNZpQu57RWR"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img src="/lighght.jpg" className="w-52 mt-4 h-52 cursor-pointer" />
          </a>
          <a
            href="https://open.spotify.com/album/0vhRTvVCv9O5orRMgFjxT1"
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
            href="https://open.spotify.com/album/1RHa1VdX6lsLbeedgsV1cb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img src="pop-food.jpg" className="w-52 mt-4 h-52 cursor-pointer" />
          </a>
          <a
            href="https://open.spotify.com/album/4LileDrFwEUFB5UPA3AEia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img src="/OWUWAYN.jpg" className="w-52 mt-4 h-52 cursor-pointer" />
          </a>
          <a
            href="https://open.spotify.com/album/6WM1HXRTt5MBT5hOie7CGx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img
              src="/i-hate-jazz.jpg"
              className="w-52 mt-4 h-52 cursor-pointer"
            />
          </a>
          <a
            href="https://open.spotify.com/album/5U0MXVHm1WiAfmmwFteqUo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img
              src="/grasp-of-the-undying.jpg"
              className="w-52 mt-4 h-52 cursor-pointer"
            />
          </a>
          <a
            href="https://open.spotify.com/album/5XgUtV3205kTcgoSLNf8ix"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img
              src="/last-days-of-oakland.jpg"
              className="w-52 mt-4 h-52 cursor-pointer"
            />
          </a>
          <a
            href="https://open.spotify.com/album/3uP6jwdjhpx1AbElXO6JeF"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img
              src="/hot-freaks.jpg"
              className="w-52 mt-4 h-52 cursor-pointer"
            />
          </a>
          <a
            href="https://open.spotify.com/album/08pnia1NUFsyIWfhE9sZz1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img
              src="/imperfect-hatred.jpg"
              className="w-52 mt-4 h-52 cursor-pointer"
            />
          </a>
          <a
            href="https://open.spotify.com/album/19bQiwEKhXUBJWY6oV3KZk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mb-2"
          >
            <img
              src="/madvillainy.jpg"
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

export default Albums;
