import React from "react";
import { IoMdPlay } from "react-icons/io";

const PlayBtn = () => {
  return (
    <div className="absolute bottom-1 right-3 md:w-12 sm:w-10 rounded-full w-8 md:h-12 sm:h-10 h-8 bg-green-500 flex items-center justify-center group-hover:-translate-y-2 hover:scale-105 opacity-0 group-hover:opacity-100 duration-200">
      <IoMdPlay className="md:w-6 md:h-6 sm:w-5 sm:h-5 w-5 h-5 text-neutral-900" />
    </div>
  );
};

export default PlayBtn;
