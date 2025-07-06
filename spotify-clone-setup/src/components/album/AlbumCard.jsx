import React from "react";
import { Link } from "react-router-dom";
import PlayBtn from "../playBtn/PlayBtn";

const AlbumCard = ({ albumImage, albumName, albumArtist }) => {
  return (
    <Link
      to="/album-detail"
      className="w-full px-3 py-2 rounded-md bg-transparent hover:bg-neutral-800/15 space-y-3 ease-in-out duration-100 group cursor-pointer"
    >
      <div className="w-full h-auto relative">
        <img
          src={albumImage}
          alt={albumName}
          className="w-full aspect-square object-cover rounded-md"
        />
        <PlayBtn />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-semibold text-white">{albumName}</h3>
        <p className="text-xs text-neutral-400">{albumArtist}</p>
      </div>
    </Link>
  );
};

export default AlbumCard;
