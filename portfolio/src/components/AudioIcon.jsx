import React from "react";
import { Volume2, VolumeOff } from "lucide-react";

const AudioIcon = () => {
  return (
    <div>
      {/* <Volume2 className="z-30 fixed h-20 w-20 left-355 top-1 cursor-pointer stroke-1 text-neutral-200" /> */}
      <VolumeOff className="z-30 fixed h-20 w-20 left-355 top-1 cursor-pointer stroke-1 text-neutral-200" />
    </div>
  );
};

export default AudioIcon;
