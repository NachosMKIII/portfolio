import React from "react";
import CopyText from "../functions/CopyText";

const Info = () => {
  return (
    <div className="pb-10">
      <div className="flex justify-between items-center">
        <div className="text-8xl relative ml-2">
          <div className="">
            <a
              href="https://github.com/NachosMKIII"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <h1 className="inline cursor-pointer">Github</h1>
              <img
                src="github-logo.png"
                className="w-20 h-20 relative bottom-3 ml-4 inline"
              />
            </a>
          </div>
          <div className="mt-10 mb-10">
            <a
              href="https://www.linkedin.com/in/ricardo-lucas-824668331/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <h1 className="inline cursor-pointer">linkedIn</h1>
              <img
                src="LI-In-Bug.png"
                className="w-20 h-20 relative bottom-3 ml-4 inline"
              />
            </a>
          </div>
          <div>
            <CopyText text="workemailreceiver@gmail.com">
              <h1 className="inline cursor-pointer">Email</h1>
              <img
                src="email-icon.png"
                className="w-20 h-20 relative bottom-3 ml-4 inline"
              />
            </CopyText>
          </div>
        </div>
        <a href="/Ricardo Morais Lucas resume.pdf" download>
          <div className="flex-col items-center pdf-container justify-center px-[1px] pb-2">
            <img src="resume2.png" className="w-70" />
            <button className="flex ml-2 pt-2 cursor-pointer justify-center font-extrabold items-center">
              Download resume as PDF
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Info;
