import React, { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Artist from "./artist/Artist";
import Album from "./album/Album";
import Radio from "./radio/Radio";
import Footer from "../../../components/footer/Footer";
import { useSearch } from "../../../context/SearchContext";
import musicData from "../../../constant/musicData"; // Assuming you have a musicData file with song details
import { usePlaylist } from "../../../context/PlaylistContext";
import MusicCard from "../../../components/music/MusicCard";

const Content = () => {
  const { query } = useSearch();
  const { playlists, addSongToPlaylist } = usePlaylist();

  const filteredSongs = musicData.filter(
    (song) =>
      song.musicName.toLowerCase().includes(query.toLowerCase()) ||
      song.albumName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex-1 h-[calc(100vh-8.5ch)] overflow-y-scroll overflow-x-hidden bg-[#121212] text-white p-4">
      {/* NavBar */}
      <div className="w-full sticky top-0 z-50">
        <Navbar className={"bg-[#121212]"} />
      </div>

      {/* Content or Search songs */}
      <div className="w-full h-full py-6 bg-gradient-to-b from-neutral-700/30 via-transparent to-[#121212] md:px-6 px-4 space-y-12">
        {query ? (
          <>
            <h2 className="text-xl font-bold mb-4">
              Search Results for "{query}"
            </h2>
            <div>
              {filteredSongs.length ? (
                filteredSongs.map((song) => (
                  <MusicCard
                    key={song.counter}
                    counter={song.counter}
                    duration={song.duration}
                    musicName={song.musicName}
                    views={song.views}
                    albumName={song.albumName}
                    musicImg={song.musicImg}
                    showAddToPlaylist={true}
                    playlists={playlists}
                    songObj={song}
                    onAddToPlaylist={addSongToPlaylist}
                  />
                ))
              ) : (
                <p className="text-gray-400">
                  No songs found matching your search.
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <Artist />
            <Album />
            <Radio />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default Content;
