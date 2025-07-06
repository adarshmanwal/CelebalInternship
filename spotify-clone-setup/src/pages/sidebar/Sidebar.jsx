import React from "react";
import Top from "./top/Top";
import Playlist from "./playlist/Playlist";

const Sidebar = () => {
  return (
    <div className="w-[18.5%] max-h-[calc(100vh-12ch)] h-[calc(100vh-12ch)] min-h-[12ch] bg-gray-800 text-white p-4">
      <Top></Top>
      <Playlist></Playlist>
    </div>
  );
};

export default Sidebar;
