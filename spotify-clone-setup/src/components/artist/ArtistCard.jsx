import React from "react";
import { Link } from "react-router-dom";
import PlayBtn from "../playBtn/PlayBtn";

const ArtistCard = ({ artistImage, artistName, artistTag }) => {
  return (
    <Link
      to={"/artist-detail"}
      className="w-full px-3 py-2 rounded-md bg-transparent hover:bg-neutral-800/15 space-y-3 ease-in-out duration-100 group cursor-pointer "
    >
        <div className="w-full h-auto relative">
            <img
            src={artistImage}
            alt={artistName}
            className="w-full aspect-square object-cover rounded-full"
            />
            <PlayBtn></PlayBtn>
        </div>
        <div className="space-y-1">
            <h3 className="text-sm font-semibold text-white">{artistName}</h3>
            <p className="text-xs text-neutral-400">{artistTag}</p>
        </div>
    </Link>
  );
};

export default ArtistCard;
