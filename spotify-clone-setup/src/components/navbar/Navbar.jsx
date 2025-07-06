import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Navbar = ({ className }) => {
  const handleBack = () => {
    window.history.back();
  };
  const handleNext = () => {
    window.history.forward();
  };
  return (
    <div
      className={`w-full ${className} flex items-center justify-between bg-[#121212] p-4 rounded-lg shadow-md md:pl-5 pl-4 md:pr-7 sm:pr-5 pr-4 py-2 z-50`}
    >
      <div className="flex items-center gap-x-2">
        <button
          onClick={handleBack}
          className="2-8 h-8 rounded-full bg-neutral-950/70 text-neutral-40"
        >
          <GoChevronLeft className="w-7 h-7 mr-0.5"></GoChevronLeft>
        </button>
        <button
          onClick={handleNext}
          className="2-8 h-8 rounded-full bg-neutral-950/70 text-neutral-40"
        >
          <GoChevronRight className="w-7 h-7 mr-0.5"></GoChevronRight>
        </button>
      </div>
      <div className="flex items-center gap-x-5">
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
