import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation("Albums");

  const items = [
    {
      href: "https://open.spotify.com/album/02gFZUaqAcQNtV6rmVIsN0",
      src: "/only-place.jpg",
    },
    {
      href: "https://open.spotify.com/album/6EtrZFZ6FMR6fbB82oHUWi",
      src: "/cassette-city.jpg",
    },
    {
      href: "https://open.spotify.com/album/0AL7olZ75pi55q9p1eHaD8",
      src: "/bloom.jpg",
    },
    {
      href: "https://open.spotify.com/album/1CbtBQqibzdxhmpiLD7vzN",
      src: "/hawaii-part-ii.jpg",
    },
    {
      href: "https://open.spotify.com/album/4XriwpnB6fJm8OMxb7wQcV",
      src: "/impossible-animals.jpg",
    },
    {
      href: "https://open.spotify.com/album/3vwhMjwukv3LNZpQu57RWR",
      src: "/lighght.jpg",
    },
    {
      href: "https://open.spotify.com/album/0vhRTvVCv9O5orRMgFjxT1",
      src: "/next-thing.jpg",
    },
    {
      href: "https://open.spotify.com/album/1RHa1VdX6lsLbeedgsV1cb",
      src: "/pop-food.jpg",
    },
    {
      href: "https://open.spotify.com/album/4LileDrFwEUFB5UPA3AEia",
      src: "/OWUWAYN.jpg",
    },
    {
      href: "https://open.spotify.com/album/6WM1HXRTt5MBT5hOie7CGx",
      src: "/i-hate-jazz.jpg",
    },
    {
      href: "https://open.spotify.com/album/5U0MXVHm1WiAfmmwFteqUo",
      src: "/grasp-of-the-undying.jpg",
    },
    {
      href: "https://open.spotify.com/album/5XgUtV3205kTcgoSLNf8ix",
      src: "/last-days-of-oakland.jpg",
    },
    {
      href: "https://open.spotify.com/album/3uP6jwdjhpx1AbElXO6JeF",
      src: "/hot-freaks.jpg",
    },
    {
      href: "https://open.spotify.com/album/08pnia1NUFsyIWfhE9sZz1",
      src: "/imperfect-hatred.jpg",
    },
    {
      href: "https://open.spotify.com/album/19bQiwEKhXUBJWY6oV3KZk",
      src: "/madvillainy.jpg",
    },
  ];

  return (
    <div className="z-10 mb-10">
      <h1 className="mt-5 text-3xl p-2 pb-3 px-6 text-neutral-200 relative right-4">
        {t("h1-1")}
      </h1>
      <div className="flex gap-4 ml-2 w-240 mt-4">
        <div className="flex gap-4 overflow-x-scroll custom-scrollbar">
          {items.map((items, index) => (
            <a
              key={index}
              href={items.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mb-2"
            >
              <img
                src={items.src}
                className="w-52 mt-4 mb-4 h-52 cursor-pointer"
              />
            </a>
          ))}
        </div>
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
