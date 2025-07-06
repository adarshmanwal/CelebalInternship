import React from "react";
import { Link } from "react-router-dom";

const RadioCard = ({ radio }) => {
  return (
    <Link
      to="/radio-detail"
      className={`group p-4 rounded-lg bg-neutral-800/60 hover:bg-neutral-700/70 transition duration-200 ease-in-out space-y-3`}
    >
      {/* Thumbnails Grid */}
      <div className="grid grid-cols-2 grid-rows-2 gap-1 relative aspect-square overflow-hidden rounded-md">
        <img src={radio.artist1} className="w-full h-full object-cover col-span-1 row-span-1 rounded-md" />
        <img src={radio.artist2} className="w-full h-full object-cover col-span-1 row-span-1 rounded-md" />
        <img src={radio.artist3} className="w-full h-full object-cover col-span-2 row-span-1 rounded-md" />
      </div>

      {/* Radio Details */}
      <div className="space-y-1">
        <h3 className="text-white font-semibold text-sm">{radio.radioTitle}</h3>
        <p className="text-xs text-neutral-400">{radio.artistsNames}</p>
      </div>
    </Link>
  );
};

export default RadioCard;
