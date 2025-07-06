import React from "react";
import { FaSpotify } from "react-icons/fa";
import { GoHomeFill, GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="w-full h-40 bg-neutral-800 rounded-md px-6 py-5 space-y-5">
      <Link to={"/"} className="flex items-center gap-x-0.5 text-neutral-50">
        <FaSpotify className="w-6 h-6"></FaSpotify>
        <p className="text-base font-medium tracking-tighter">Spotify</p>
      </Link>
      <Link className="flex items-center gap-x-0.5 text-neutral-50" to={"/"}>
        <GoHomeFill className="w-6 h-6"></GoHomeFill>
        <p className="text-base font-medium">Home</p>
      </Link>

      <Link className="flex items-center gap-x-0.5 text-neutral-400" to={"/"}>
        <GoSearch className="w-6 h-6"></GoSearch>
        <p className="text-base font-medium">Search</p>
      </Link>
    </div>
  );
};

export default Top;
