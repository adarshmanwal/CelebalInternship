import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Artist from "./artist/Artist";
import Album from "./album/Album";
import Radio from "./radio/Radio";
import Footer from "../../../components/footer/Footer";

const Content = () => {
  return (
    <div className="flex-1 h-[calc(100vh-8.5ch)] overflow-y-scroll overflow-x-hidden  bg-[#121212] text-white p-4">
      {/* NavBar */}
      <div className="w-full sticky top-0 z-50">
        <Navbar className={"bg-[#121212]"}></Navbar>
      </div>
      {/* content */}
      <div className="w-full h-full py-6 bg-gradient-to-b from-neutral-700/30 via-transparent to-[#121212] md:px-6 px-4 space-y-12">
        <Artist></Artist>

        <Album />

        <Radio />

        <Footer />
      </div>
    </div>
  );
};

export default Content;
