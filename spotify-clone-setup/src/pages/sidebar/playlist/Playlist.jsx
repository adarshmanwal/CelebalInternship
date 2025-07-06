import React from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { IoLibrary } from "react-icons/io5";

const Playlist = () => {
  return (
    <div className="w-full h-[calc(88vh-10rem)] bg-neutral-800/30 rounded-md space-y-4 pb-3">
      <div className="w-full flex items-center justify-between px-6 py-3">
        <div className="w-full flex items-center gap-x-3.5 text-neutral-400">
          <IoLibrary className="w-6 h-6" />
          <p className="text-sm font-semibold">Your Library</p>
        </div>
        <div className="w-9 h-8 hover:bg-neutral-700/15 rounded-full flex items-center justify-center text-neutral-300 cursor-pointer ease-in-out duration-300">
          <HiOutlinePlus className="text-xl"></HiOutlinePlus>
        </div>
      </div>

      <div className="w-full h-full overflow-y-scroll overflow-x-hidden px-2 space-y-2">
        <div className="bg-neutral-700/40 w-full rounded-md px-5 py-3 space-y-5">
          <div className="space-y-2">
            <h6 className="text-sm font-semibold text-neutral-50 -tracking-wide">
              create new playlist
            </h6>
            <p className="text-xs text-neutral-100 font-medium">
              Create a playlist with your favorite songs. You can add, remove,
              and reorder songs as you like.
            </p>
            <button className="bg-neutral-50 text-neutral-950 hover:bg-neutral-600/50 transition-colors rounded-md px-4 py-2 text-sm font-semibold">
              Create Playlist
            </button>
          </div>
        </div>
        <div className="bg-neutral-700/40 w-full rounded-md px-5 py-3 space-y-5">
          <div className="space-y-2">
            <h6 className="text-sm font-semibold text-neutral-50 -tracking-wide">
              Lets find some new podcasts to follow
            </h6>
            <p className="text-xs text-neutral-100 font-medium">
                Discover new podcasts and shows that match your interests. You can
                follow them to get updates on new episodes.
            </p>
            <button className="bg-neutral-50 text-neutral-950 hover:bg-neutral-600/50 transition-colors rounded-md px-4 py-2 text-sm font-semibold">
              Create Playlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
