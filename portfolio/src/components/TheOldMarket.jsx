import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TheOldMarket = ({ decrementProject, incrementProject, project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [index, setIndex] = useState(0);
  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }
  function handleDecrement() {
    if (project > 0) {
      decrementProject();
    }
  }

  function handleIncrement() {
    if (project < 1) {
      incrementProject();
    }
  }

  const { t } = useTranslation("TheOldMarket");

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center mb-2">
        <div className="flex items-center justify-center gap-10">
          <ChevronLeft
            className="cursor-pointer chevron-button"
            onClick={() => handleDecrement()}
          />

          <div className="flex flex-col items-center justify-center ">
            <img
              src={"/the-old-market/the-old-market.png"}
              className="rounded-t w-[780px] h-[488px] object-cover"
            />
            <h1 className="text-6xl w-[781px] px-2 py-2  project-name relative rounded-b">
              The Old Market
            </h1>
          </div>
          <ChevronRight
            className="cursor-pointer chevron-button"
            onClick={() => handleIncrement()}
          />
        </div>
      </div>
      <div className="mb-10">
        <h1 className="p-2 pt-3 text-3xl">{t("h1-1")};</h1>
        <h1 className="p-2 text-3xl">{t("h1-3")}</h1>
        <p className="p-2 text-lg">
          {t("p-3-1")}
          <br></br>
          {t("p-3-2")}
        </p>
        <h1 className="p-2 pt-3 text-3xl">{t("h1-4")} </h1>
        <p className="p-2 text-lg">
          <li className=" mt-1">{t("li-1")} </li>
          <li className=" mt-1">{t("li-2")}</li>
          <li className=" mt-1">{t("li-3")}</li>
          <li className=" mt-1">{t("li-4")} </li>
          <li className=" mt-1">{t("li-5")}</li>
        </p>
      </div>
    </div>
  );
};

export default TheOldMarket;
