import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation("Games");
  const items = [
    {
      href: "https://en.wikipedia.org/wiki/Kenshi_(video_game)",
      src: "/kenshi.jpeg",
    },
    {
      href: "https://en.wikipedia.org/wiki/The_Elder_Scrolls_V:_Skyrim",
      src: "/skyrim.png",
    },
    {
      href: "https://en.wikipedia.org/wiki/Stardew_Valley",
      src: "/stardew-valley.jpeg",
    },
    {
      href: "https://en.wikipedia.org/wiki/Fear_%26_Hunger#Fear_&_Hunger_2:_Termina",
      src: "/termina.jpeg",
    },
    {
      href: "https://en.wikipedia.org/wiki/Ultrakill",
      src: "/ultrakill.webp",
    },
    {
      href: "https://en.wikipedia.org/wiki/Devil_May_Cry_3:_Dante%27s_Awakening",
      src: "/dmc3.jpg",
    },
  ];

  return (
    <div className="z-10 mt-20 mb-10">
      <h1
        className={` mt-5 relative right-4 text-3xl
          p-2 pb-3 px-6 text-neutral-200`}
      >
        {t("h1-1")}
      </h1>
      <div className={`flex gap-4 ml-2 w-240`}>
        <div
          className="flex gap-4 overflow-x-auto custom-scrollbar"
          ref={scrollRef}
        >
          {items.map((items, index) => (
            <a
              href={items.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mb-2"
            >
              <img
                src={items.src}
                className="w-40 mt-4 mb-4 h-52 cursor-pointer"
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

export default Games;
