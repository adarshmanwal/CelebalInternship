import React from "react";
import { MdVerified } from "react-icons/md";

const ArtistInfo = () => {
  return (
    <div className="w-full h-auto flex items-center flex-wrap gap-x-7 gap-y-6 md:pl-5 md:pr-7 sm:pr-5 pr-4">
      <img
        src="https://cdn.pixabay.com/photo/2022/04/13/05/38/singer-7129506_1280.jpg"
        alt="Artist"
        className="w-52 aspect-square rounded-full object-center object-cover shadow-xl"
      />
      <div className="space-y-3">
        <div className="md:flex hidden items-center gap-x-2">
          <MdVerified className="w-7 h-7 text-green-500" />
          <span className="text-lg font-semibold">Verified Artist</span>
        </div>
        <h1 className="md:text-8xl sm:text-6xl text-4xl font-black text-neutral-50">
          Kissor kumar
        </h1>
        <p className="text-base text-neutral-100">100000 montly listeners</p>
      </div>
    </div>
  );
};

export default ArtistInfo;
