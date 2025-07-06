import React from "react";
import { GoPlusCircle } from "react-icons/go";
import Playing from "./playing/Playing";
import { BsFilePlay } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { PiDevicesBold } from "react-icons/pi";
import { CgMiniPlayer, CgVolume } from "react-icons/cg";
import { FiMaximize2 } from "react-icons/fi";

const Player = () => {
  const [volume, setVolume] = React.useState(0.5);
  const handleVolume = (e) => {
    const volumeValue = e.target.value;
    const newVolume = e.nativeEvent.offsetX / e.target.offsetWidth;
    setVolume(newVolume);
  };

  return (
    <div className="w-full grid md:grid-cols-4 grid-cols-2 absolute left-0 bottom-0 rounded-md px-2">
      {/* artist image song name */}
      <div className="col-span-1 md:flex hidden items-center gap-x-3.5">
        <img
          className="w-12 h-12 rounded-md"
          src="https://cdn.pixabay.com/photo/2015/03/08/17/25/musician-664432_640.jpg"
          alt="Song Cover"
        />
        <div className="space-y-0 5">
          <h6 className="text-sm text-neutral-50 font-semibold">Song</h6>
          <p className="text-xs text-neutral-400 font-normal">Artist</p>
        </div>
        <button className="pt-1.5">
          <GoPlusCircle className="text-neutral-400 w-5 h-5 mb-0"></GoPlusCircle>
        </button>
      </div>
      {/* player control */}
      <Playing></Playing>
      {/* volume controll and more */}
      <div className="w-full col-span-1 md:flex hidden items-center justify-end gap-x-3">
        <button className=" text-neutral-400 hover:text-neutral-200 ease-in-out px-4 py-2 rounded duration-100">
          <BsFilePlay className="w-5 h-5"></BsFilePlay>
        </button>
        <button className=" text-neutral-400 hover:text-neutral-200 ease-in-out px-4 py-2 rounded duration-100">
          <TbMicrophone2 className="w-5 h-5"></TbMicrophone2>
        </button>
        <button className=" text-neutral-400 hover:text-neutral-200 ease-in-out px-4 py-2 rounded duration-100">
          <HiOutlineQueueList className="w-5 h-5"></HiOutlineQueueList>
        </button>
        <button className=" text-neutral-400 hover:text-neutral-200 ease-in-out px-4 py-2 rounded duration-100">
          <PiDevicesBold className="w-5 h-5"></PiDevicesBold>
        </button>
        <button className="w-[30%] flex items-center gap-x-2 text-neutral-400 hover:text-neutral-200 ease-in-out px-4 py-2 rounded duration-100">
          <CgVolume className="w-5 h-5"></CgVolume>
          <div className="flex-1 h-1 bg-neutral-700/60 rounded-full ">
            <div
              onClick={handleVolume}
              className="h-1 bg-green-600 ease-in-out duration-100 rounded-full"
              style={{ width: `${volume * 100}%` }}
            ></div>
          </div>
        </button>
        <button className=" text-neutral-400 hover:text-neutral-200 ease-in-out px-4 py-2 rounded duration-100">
          <CgMiniPlayer className="w-5 h-5"></CgMiniPlayer>
        </button>
        <button className=" text-neutral-400 hover:text-neutral-200 ease-in-out px-4 py-2 rounded duration-100">
          <FiMaximize2 className="w-5 h-5"></FiMaximize2>
        </button>
      </div>
    </div>
  );
};

export default Player;
