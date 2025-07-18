import React, { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { IoLibrary } from "react-icons/io5";
import Modal from "../../../components/ui/Modal";
import { usePlaylist } from "../../../context/PlaylistContext";
import { IoTrashOutline } from "react-icons/io5";

const Playlist = () => {
  const [showModal, setShowModal] = useState(false);
  const [playlistName, setPlaylistName] = useState("My Playlist #1");
  const [description, setDescription] = useState("");
  const { playlists, addPlaylist,deletePlaylist } = usePlaylist();

  console.log("Playlists:", playlists);
  const handleSave = () => {
    if (playlistName.trim() === "") return;

    addPlaylist(playlistName);
    setPlaylistName("");
    setDescription("");
    setShowModal(false);
  };

  return (
    <>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        playlistName={playlistName}
        setPlaylistName={setPlaylistName}
        description={description}
        setDescription={setDescription}
        onSave={handleSave}
      ></Modal>
      <div className="w-full h-[calc(88vh-10rem)] bg-[#121212] rounded-lg space-y-4 pb-3 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-4 text-neutral-400">
            <IoLibrary className="w-6 h-6" />
            <p className="text-sm font-semibold">Your Library</p>
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="w-8 h-8 hover:bg-[#232323] rounded-full flex items-center justify-center text-neutral-300 cursor-pointer transition-all"
          >
            <HiOutlinePlus className="text-xl" />
          </div>
        </div>

        {/* Scrollable content */}
        <div className="h-full overflow-y-auto px-3 space-y-3 scrollbar-hide">
          {playlists.length === 0 ? (
            <div className="bg-[#242424] w-full rounded-md px-5 py-4 space-y-4">
              <div className="space-y-2">
                <h6 className="text-sm font-bold text-white tracking-tight">
                  Create your first playlist
                </h6>
                <p className="text-xs text-neutral-400">
                  It's easy, we'll help you.
                </p>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-white text-black hover:scale-105 transition-transform rounded-full px-4 py-2 text-sm font-semibold"
                >
                  Create playlist
                </button>
              </div>
            </div>
          ) : (
            playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="bg-[#242424] w-full rounded-md px-4 py-3 text-white space-y-1 hover:bg-[#2a2a2a] cursor-pointer transition relative"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold">{playlist.name}</h4>
                    <p className="text-xs text-neutral-400">
                      {playlist.songs?.length || 0} songs
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deletePlaylist(playlist.id);
                    }}
                    className="text-gray-400 hover:text-red-400 transition"
                  >
                    <IoTrashOutline size={18} />
                  </button>
                </div>
              </div>
            ))
          )}

          <div className="bg-[#242424] w-full rounded-md px-5 py-4 space-y-4">
            <div className="space-y-2">
              <h6 className="text-sm font-bold text-white tracking-tight">
                Let’s find some podcasts to follow
              </h6>
              <p className="text-xs text-neutral-400">
                We’ll keep you updated on new episodes.
              </p>
              <button className="bg-white text-black hover:scale-105 transition-transform rounded-full px-4 py-2 text-sm font-semibold">
                Browse podcasts
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playlist;
