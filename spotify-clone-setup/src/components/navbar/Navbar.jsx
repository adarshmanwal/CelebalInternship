import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { useSearch } from "../../context/SearchContext";

const Navbar = ({ className }) => {
  const handleBack = () => {
    window.history.back();
  };

  const handleNext = () => {
    window.history.forward();
  };
  const { query, setQuery } = useSearch();

  return (
    <div
      className={`w-full ${className} flex items-center justify-between bg-[#121212] p-4 rounded-lg shadow-md md:pl-5 pl-4 md:pr-7 sm:pr-5 pr-4 py-2 z-50`}
    >
      {/* navigation button */}
      <div className="flex items-center gap-x-2">
        <button
          onClick={handleBack}
          className="w-8 h-8 rounded-full bg-neutral-950/70 text-neutral-40 flex items-center justify-center"
        >
          <GoChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="w-8 h-8 rounded-full bg-neutral-950/70 text-neutral-40 flex items-center justify-center"
        >
          <GoChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* search bar */}
      <div className="flex-1 mx-4 max-w-md hidden sm:flex">
        <div className="relative w-full">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for songs or albums"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-neutral-800 text-white placeholder:text-gray-400 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition"
          />
        </div>
      </div>

      {/* Auth buttons */}
      <div className="flex items-center gap-x-4">
        <button className="px-5 h-8 rounded-full bg-white text-black font-semibold hover:scale-105 hover:bg-neutral-100 transition">
          <span className="text-sm">Sign up</span>
        </button>
        <button className="px-5 h-8 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-black transition">
          <span className="text-sm">Login</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
