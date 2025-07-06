import React, { useEffect, useRef, useState, useCallback } from "react";
import Audio from "../../../assets/song.mp3";
import { PiShuffleBold } from "react-icons/pi";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { BiRepeat } from "react-icons/bi";
import { IoPauseSharp, IoPlaySharp } from "react-icons/io5";

const Playing = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const updateTime = useCallback(() => {
    const audio = audioRef.current;
    if (audio) setCurrentTime(audio.currentTime);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [updateTime]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeDrag = (e) => {
    const progressBar = e.target;
    const newTime =
      (e.nativeEvent.offsetX / progressBar.offsetWidth) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return (
    <div className="col-span-2 flex items-center justify-center flex-col space-y-2">
      <div className="w-full flex items-center justify-center flex-col space-y-2">
        <div className="flex items-center justify-center gap-x-5">
          <button className="text-neutral-400 hover:text-neutral-200 px-4 py-2 rounded duration-100">
            <PiShuffleBold className="w-5 h-5" />
          </button>
          <button className="text-neutral-400 hover:text-neutral-200 px-4 py-2 rounded duration-100">
            <GiPreviousButton className="w-5 h-5" />
          </button>
          <button
            onClick={togglePlayPause}
            className="w-8 h-8 rounded-full bg-neutral-200 text-neutral-900 flex items-center justify-center"
          >
            {isPlaying ? (
              <IoPauseSharp className="w-5 h-5" />
            ) : (
              <IoPlaySharp className="w-5 h-5" />
            )}
          </button>
          <button className="text-neutral-400 hover:text-neutral-200 px-4 py-2 rounded duration-100">
            <GiNextButton className="w-5 h-5" />
          </button>
          <button className="text-neutral-400 hover:text-neutral-200 px-4 py-2 rounded duration-100">
            <BiRepeat className="w-5 h-5" />
          </button>
        </div>
        <div className="md:w-3/4 w-full flex items-center justify-center gap-x-3">
          <p className="text-xs text-neutral-400 font-medium">
            {formatTime(currentTime)}
          </p>
          <div
            onClick={handleTimeDrag}
            className="flex-1 h-1 bg-neutral-700/60 rounded-full relative cursor-pointer"
          >
            <div
              style={{ width: `${(currentTime / duration) * 100}%` }}
              className="h-1 bg-green-600 rounded-full"
            />
          </div>
          <p className="text-xs text-neutral-400 font-medium">
            {formatTime(duration)}
          </p>
        </div>
      </div>

      {/* audio */}
      <audio ref={audioRef} src={Audio} />
    </div>
  );
};

export default Playing;
