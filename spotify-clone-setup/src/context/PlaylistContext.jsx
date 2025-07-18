// src/context/PlaylistContext.jsx
import React, { createContext, useContext, useState } from "react";

// Create the context
const PlaylistContext = createContext();

// Custom hook for easier access
export const usePlaylist = () => useContext(PlaylistContext);

// Provider component
export const PlaylistProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);
  const [currentPlaylist, setCurrentPlaylist] = useState(null);

  // Add new playlist
  const addPlaylist = (name) => {
    const newPlaylist = {
      id: Date.now(),
      name,
      songs: [],
    };
    setPlaylists([...playlists, newPlaylist]);
    setCurrentPlaylist(newPlaylist);
  };

  // Add song to a playlist
  const addSongToPlaylist = (playlistId, song) => {
    setPlaylists((prev) =>
      prev.map((p) =>
        p.id === playlistId ? { ...p, songs: [...p.songs, song] } : p
      )
    );
  };

  // Remove song from a playlist
  const removeSongFromPlaylist = (playlistId, songId) => {
    setPlaylists((prev) =>
      prev.map((p) =>
        p.id === playlistId
          ? { ...p, songs: p.songs.filter((s) => s.id !== songId) }
          : p
      )
    );
  };
  const deletePlaylist = (playlistId) => {
    setPlaylists((prev) => prev.filter((p) => p.id !== playlistId));
  };

  const value = {
    playlists,
    currentPlaylist,
    addPlaylist,
    addSongToPlaylist,
    removeSongFromPlaylist,
    setCurrentPlaylist,
    deletePlaylist,
  };

  return (
    <PlaylistContext.Provider value={value}>
      {children}
    </PlaylistContext.Provider>
  );
};
