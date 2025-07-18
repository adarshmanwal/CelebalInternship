import React from "react";
import { Link } from "react-router-dom";
import MusicCard from "../../../../components/music/MusicCard";
import musicData from "../../../../constant/musicData";
const MusicList = () => {
  return (
    <div className="w-full space-y-4">
      <h1 className="md:text-xl text-lg text-neutral-50 font-bold">Popular</h1>

      <div className="space-y-0">
        {musicData.map((music, index) => (
          <MusicCard
            key={index}
            counter={music.counter}
            musicImg={music.musicImg}
            duration={music.duration}
            musicName={music.musicName}
            views={music.views}
            albumName={music.albumName}
          />
        ))}
      </div>

      <Link
        to={"/"}
        className="px-6 block text-sm text-neutral-400 font-medium ease-in-out duration-100 hover:text-neutral-200"
      >
        See more
      </Link>
      <div className="space-y-4">
        <h1 className="md:text-xl text-lg text-neutral-50 font-bold">
          Artist Pick
        </h1>
        <div className="space-y-0">
          <div className="flex items-start gap-x-3">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/artist-226519.png"
              alt=""
              className="w-24 h-24 rounded-md object-cover object-center"
            />

            <div className="space-y-1.5">
              <div className="flex items-center gap-x-1.5">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/artist-226519.png"
                  alt=""
                  className="w-6 h-6 rounded-full object-cover object-center"
                />
                <h6 className="text-sm text-neutral-400 font-medium">
                  Posted by Artist Name
                </h6>
              </div>

              <h5 className="text-sm text-neutral-100 font-medium">
                Song Name
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicList;
