import React from "react";
import Top from "./top/Top";
import Playlist from "./playlist/Playlist";

const Sidebar = () => {
  return (
    <div className="w-[18.5%] h-[100vh] bg-[#000000] text-white p-2 space-y-2 overflow-hidden">
      {/* Top section like Home, Search etc. */}
      <div className="bg-[#121212] rounded-lg p-4">
        <Top />
      </div>

      {/* Playlist/Library Section */}
      <div className="bg-[#121212] rounded-lg h-full overflow-hidden">
        <Playlist />
      </div>
    </div>
  );
};

export default Sidebar;
