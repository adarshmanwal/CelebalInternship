import React from "react";

const Tag = ({ title, link }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <h1 className="md:text-xl text-lg text-white font-bold">{title}</h1>
      <a
        href={link}
        className="text-sm text-neutral-400 hover:text-white transition-all duration-300"
      >
        See All
      </a>
    </div>
  );
};

export default Tag;
