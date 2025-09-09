import React from "react";

const AboutMe = () => {
  return (
    <div className="w-[50vw] flex">
      <div className="bg-neutral-900 ml-40 mt-20 grid grid-cols-1 rounded w-50 h-50 overflow-hidden bold text-slate-200">
        <h1 className="bg-neutral-950 pl-3 pt-2 pb-2  rounded">About Me</h1>
        <p className="p-2 pt-3 mb-10">
          I'm a junior software developer from Brazil,
        </p>
        <button className="bg-neutral-800 cursor-pointer place-self-end p-2">
          Hide
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
