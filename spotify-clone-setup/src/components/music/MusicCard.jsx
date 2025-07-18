import React from "react";
import { FaApplePay } from "react-icons/fa";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const MusicCard = ({ counter, duration, musicName, views, albumName,musicImg }) => {
  return (
    <div className="w-full grid md:grid-cols-4 grid-cols-3 gap-4 items-center rounded-md px-6 py-2 group hover:bg-neutral-600/40 ease-in-out duration-100">
      {/* Left section with text and icon */}
      <div className="col-span-2 flex items-center gap-x-2">
        <p className="text-neutral-300 text-sm font-medium pt-1 md:block hidden">
          {/* Icon/element that is visible by default but hidden on hover */}
          <span className="group-hover:hidden block w-5 h-5">{counter}</span>
          <span className="group-hover:hidden block w-5 h-5 pt-0.5">
            <FaApplePay></FaApplePay>
          </span>
        </p>
        <img
          src={musicImg}
          alt=""
          className="w-10 h-10 rounded-md object-center object-cover"
        />
        <Link
          to={`/`}
          className="text-sm text-neutral-100 font-medium hover:underline ml-1 ease-in-out duration-100"
        >
          {musicName}
        </Link>
      </div>

      {/* Center section */}
      <div className="col-span-1 md:flex hidden items-center justify-center">
        <p className="text-neutral-400 text-sm font-medium group-hover:text-neutral-200 ease-in-out duration-100">
          {views}
        </p>
        <p className="text-neutral-400 text-sm font-medium group-hover:text-neutral-200 ease-in-out duration-100">
          {albumName}
        </p>
      </div>

      {/* Right section */}
      <div className="col-span-1 md:flex hidden items-center justify-end gap-x-3">
        <p className="text-neutral-400 text-sm font-medium group-hover:text-neutral-200 ease-in-out duration-100">
          <MdFavoriteBorder className="group-hover:block hidden text-xl" />
        </p>
        <p className="text-neutral-400 text-base font-normal ">{duration}</p>
        <p className="text-neutral-400 text-sm font-medium group-hover:text-neutral-200 ease-in-out duration-100">
          <HiEllipsisHorizontal className="group-hover:block hidden text-2xl"></HiEllipsisHorizontal>
        </p>
      </div>
      <div className="col-span-1 md:hidden flex justify-end">
        <p className="text-neutral-400 text-sm font-medium group-hover:text-neutral-200 ease-in-out duration-100">
          <HiEllipsisHorizontal className="group-hover:block hidden text-2xl"></HiEllipsisHorizontal>
        </p>
      </div>
    </div>
  );
};

export default MusicCard;
