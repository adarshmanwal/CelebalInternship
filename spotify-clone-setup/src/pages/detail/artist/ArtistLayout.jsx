import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import ArtistInfo from "./artist/ArtistInfo";
import Follow from "./follow/Follow";
import MusicList from "./music/MusicList";
import Album from "../../main/content/album/Album";
import About from "./about/About";

const ArtistLayout = () => {
  return (
    <div className="flex-1 h-[calc(100vh-8.5ch)] overflow-y-scroll overflow-x-hidden bg-[#121212] text-white p-4">
      {/* NavBar */}
      <div className="w-full sticky top-0 z-50">
        <Navbar className="bg-[#121212]" />
      </div>

      {/* Content */}
      <div className="w-full h-full py-6 bg-gradient-to-b from-neutral-700/20 via-transparent to-transparent space-y-11">
        <ArtistInfo />

        <div className="w-full min-h-screen bg-gradient-to-b from-neutral-800/20 via-neutral-800/30 to-via-neutral-800/30 backdrop-blur pl-5 pr-7 py-4 space-y-10">
          <div className="space-y-7">
            <Follow />
            <MusicList />
          </div>

          <Album />
          <About />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ArtistLayout;
