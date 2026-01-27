import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Vibefy = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [index, setIndex] = useState(0);
  const slides = ["/vibefy1.png", "/vibefy2.png", "/vibefy3.png"];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);
  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  const { t } = useTranslation("Vibefy");

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center mb-2">
        <img src={slides[index]} className="rounded-t w-[780px] " />
        <h1 className="text-6xl w-[781px] px-2 py-2  project-name relative rounded-b">
          Vibefy
        </h1>
      </div>
      <div className="mb-10">
        <h1 className="p-2 pt-3 text-3xl">{t("h1-1")};</h1>
        <h1 className="p-2 pt-3 text-3xl">{t("h1-2")}</h1>
        <h1 className="p-2 pt-3 text-3xl">{t("TL; DR")} </h1>
        <p className="p-2 text-lg">
          {t("p-1")}
          <a
            className="underline cursor-pointer ml-1"
            href="https://www.youtube.com/watch?v=7db1H4vjcLo"
            target="_blank"
          >
            {t("a-1")}
          </a>
        </p>
        <p className="p-2 text-lg">
          {t("p-2-1")}{" "}
          <a
            href="https://github.com/NachosMKIII/Vibefy"
            className="underline cursor-pointer"
          >
            {t("a-2")} <br></br>
          </a>{" "}
          {t("p-2-2")}
        </p>
        <h1 className="p-2 text-3xl">{t("h1-3")}</h1>
        <p className="p-2 text-lg">
          {t("p-3-1")}
          <br></br>
          {t("p-3-2")}
        </p>
        <h1 className="p-2 pt-3 text-3xl">{t("context:")}</h1>
        <p className="p-2 text-lg">{t("p-4")}</p>
        <h1 className="p-2 pt-3 text-3xl">{t("h1-4")} </h1>
        <p className="p-2 text-lg">
          <li className=" mt-1">{t("li-1")} </li>
          <li className=" mt-1">{t("li-2")}</li>
          <li className=" mt-1">{t("li-3")}</li>
        </p>
      </div>
    </div>
  );
};

export default Vibefy;
