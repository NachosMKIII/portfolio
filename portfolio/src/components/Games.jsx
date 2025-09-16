import React from "react";

const Games = () => {
  return (
    <div className=" w-[50vw]">
      <h1 className="ml-12 mt-2 w-30 rounded bg-neutral-950 p-2 text-neutral-200">
        Games i like
      </h1>
      <div className="flex gap-4 w overflow-hidden w-[48vw]">
        <img src="/termina.jpeg" className="w-44 mt-4 mb-4 h-52 ml-12" />
        <img src="/termina.jpeg" className="w-44 mt-4 h-52" />
        <img src="/termina.jpeg" className="w-44 mt-4 h-52" />
        <img src="/termina.jpeg" className="w-44 mt-4 h-52" />
        <img src="/termina.jpeg" className="w-44 mt-4 h-52" />
        <img src="/termina.jpeg" className="w-44 mt-4 h-52" />
      </div>
    </div>
  );
};

export default Games;
