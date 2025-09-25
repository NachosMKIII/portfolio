import React from "react";

const Info = () => {
  return (
    <div>
      <div className="w-40">
        <h1>Github</h1>
        <h1>linkedIn</h1>
        <h1>Email</h1>
      </div>
      <div className="flex-col items-center justify-center">
        <img src="resume.png" className="w-60" />
        <button>Download resume as PDF</button>
      </div>
    </div>
  );
};

export default Info;
