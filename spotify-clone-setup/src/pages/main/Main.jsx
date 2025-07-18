import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Player from "../../components/player/Player";
import Content from "./content/Content";
import { PlaylistProvider } from "../../context/PlaylistContext";

const Main = () => {
  return (
    <div className="w-full flex-1 flex gap-x-2 relative">
      <PlaylistProvider>
        <Sidebar></Sidebar>
        <Content></Content>
        <Player></Player>
      </PlaylistProvider>
    </div>
  );
};

export default Main;
