import React, { useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({
  isOpen,
  onClose,
  playlistName,
  setPlaylistName,
  description,
  setDescription,
  onSave,
}) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div
        ref={modalRef}
        className="bg-[#121212] text-white rounded-lg p-6 w-[480px] relative space-y-4"
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-2xl font-bold">Edit details</h2>

        <div className="flex gap-4">
          <div className="w-[120px] h-[120px] bg-[#2a2a2a] flex items-center justify-center rounded">
            <span className="text-3xl text-gray-500">🎵</span>
          </div>

          <div className="flex-1 space-y-3">
            <input
              type="text"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              className="w-full bg-[#2a2a2a] p-2 rounded text-white placeholder:text-gray-400 focus:outline-none"
            />
            <textarea
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add an optional description"
              className="w-full bg-[#2a2a2a] p-2 rounded text-white placeholder:text-gray-400 focus:outline-none resize-none"
            ></textarea>
          </div>
        </div>

        <button
          onClick={onSave}
          className="bg-white text-black font-semibold rounded-full px-5 py-2 mt-3 hover:scale-105 transition-transform"
        >
          Save
        </button>

        <p className="text-[10px] text-gray-400 pt-2">
          By proceeding, you agree to give Spotify access to the image you
          choose to upload. Please make sure you have the right to upload the
          image.
        </p>
      </div>
    </div>
  );
};

export default Modal;
