import React from "react";

const Tools = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-5 mt-2">
        {/* JavaScript tools */}
        <div className="bg-neutral-800 w-[480px] pb-8 rounded">
          <p className="text-3xl grid-group w-[483px] relative right-[2px] tracking-wide mb-5 rounded-t flex items-center justify-center">
            JavaScript
          </p>

          <div className="flex justify-center items-center gap-5">
            <div>
              <img
                src="javascript-logo.png
            "
                className="h-30 w-30 block"
              />
              <h1 className="flex text-xl tracking-wide items-center justify-center">
                JavaScript
              </h1>
            </div>
            <div>
              <img
                src="nextjs-logo.jpg
            "
                className="h-30 w-30"
              />
              <h1 className="flex text-xl tracking-wide items-center justify-center">
                Next
              </h1>
            </div>
            <div>
              <img
                src="react-logo.png
            "
                className="h-30 w-30"
              />
              <h1 className="flex text-xl tracking-wide items-center justify-center">
                React
              </h1>
            </div>
          </div>
        </div>
        {/* basic tools */}
        <div className="bg-neutral-800 w-[480px] pb-8 rounded">
          <p className="text-3xl grid-group w-[483px] relative right-[2px] tracking-wide mb-5 rounded-t flex items-center justify-center">
            Basics of web development
          </p>
          <div className="flex justify-center items-center gap-5">
            <div>
              <img
                src="html-logo.png
            "
                className="h-30 w-30 overflow-hidden"
                style={{
                  objectFit: "cover",
                  transform: "scale(1.35)",
                }}
              />
              <h1 className="flex text-xl tracking-wide  items-center justify-center">
                HTML
              </h1>
            </div>
            <div>
              <img
                src="css-logo.png
            "
                className="h-30 w-30 object-contain"
                style={{
                  objectFit: "cover",
                  transform: "scale(1.12)",
                }}
              />
              <h1 className="flex text-xl tracking-wide items-center justify-center">
                CSS
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd row*/}
      <div className="flex mt-10 justify-center items-center gap-20">
        <div className="">
          <img src="github-logo.png" className="w-30 h-30" />
          <h1 className="flex text-xl tracking-wide items-center justify-center">
            Github
          </h1>
        </div>
        <div className="">
          <img src="vscode.png" className="w-30 h-30" />
          <h1 className="flex text-xl tracking-wide items-center justify-center">
            VScode
          </h1>
        </div>
        <div className="">
          <img src="tailwind-icon.svg" className="w-30 h-30" />
          <h1 className="flex text-xl tracking-wide items-center justify-center">
            Tailwind
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Tools;
