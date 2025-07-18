import React, { useState, useRef, useEffect } from "react";
import { FaApplePay } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const MusicCard = ({
  counter,
  duration,
  musicName,
  views,
  albumName,
  musicImg,
  showAddToPlaylist = false,
  playlists = [],
  onAddToPlaylist = () => {},
  songObj = {},
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full grid md:grid-cols-4 grid-cols-3 gap-4 items-center rounded-md px-6 py-2 group hover:bg-neutral-600/40 relative">
      {/* Left part */}
      <div className="col-span-2 flex items-center gap-x-2">
        <p className="text-neutral-300 text-sm font-medium pt-1 md:block hidden">
          <span className="group-hover:hidden block w-5 h-5">{counter}</span>
          <span className="group-hover:hidden block w-5 h-5 pt-0.5">
            <FaApplePay />
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

      {/* center part */}
      <div className="col-span-1 md:flex hidden items-center justify-center">
        <p className="text-neutral-400 text-sm font-medium group-hover:text-neutral-200 ease-in-out duration-100">
          {views}
        </p>
        <p className="text-neutral-400 text-sm font-medium group-hover:text-neutral-200 ease-in-out duration-100">
          {albumName}
        </p>
      </div>

      {/* Right part */}
      <div className="col-span-1 md:flex hidden items-center justify-end gap-x-3">
        <MdFavoriteBorder className="group-hover:block hidden text-xl text-neutral-400 hover:text-neutral-200 cursor-pointer" />
        <p className="text-neutral-400 text-base font-normal">{duration}</p>

        {/* Add song to playlist dropdown */}
        {showAddToPlaylist && (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="group bg-[#1db954] p-1.5 rounded-full hover:bg-[#1ed760] transition group-hover:block hidden cursor-pointer"
              title="Add to Playlist"
            >
              <IoMdAdd className="text-black text-lg" />
            </button>

            {dropdownOpen && (
              <div className="absolute top-9 right-0 bg-neutral-900 border border-neutral-700 rounded shadow-lg z-50 w-48">
                {playlists.length > 0 ? (
                  playlists.map((pl) => (
                    <button
                      key={pl.id}
                      onClick={() => {
                        onAddToPlaylist(pl.id, songObj);
                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-neutral-700 text-sm text-white"
                    >
                      {pl.name}
                    </button>
                  ))
                ) : (
                  <p className="text-sm text-gray-400 px-4 py-2">
                    No playlists
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicCard;
