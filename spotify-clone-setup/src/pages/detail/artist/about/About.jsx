import React from 'react';

const About = () => {
  return (
    <div className="w-full space-y-6 px-6 py-4 md:block hidden">
      <h1 className="md:text-2xl text-xl text-neutral-50 font-extrabold tracking-tight">
        About
      </h1>

      <div className="w-full max-w-4xl bg-gradient-to-br from-neutral-800/80 to-neutral-700/60 rounded-xl shadow-xl hover:scale-[1.01] relative p-8 flex flex-col items-center text-center space-y-6 transition-transform duration-300 ease-in-out">
        {/* Artist Image */}
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/artist-226519.png"
          alt="Artist"
          className="w-44 h-44 rounded-full object-cover object-center shadow-lg"
        />

        {/* Listener Count */}
        <p className="text-lg text-neutral-100 font-medium">
          40,373,319 <span className="text-neutral-400">monthly listeners</span>
        </p>

        {/* Floating Rank Badge */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-green-500/90 rounded-full shadow-md flex items-center justify-center flex-col text-white">
          <h5 className="text-xl font-bold">#79</h5>
          <p className="text-[10px] font-light">in the world</p>
        </div>
      </div>
    </div>
  );
};

export default About;
