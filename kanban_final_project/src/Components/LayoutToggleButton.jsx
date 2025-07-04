import { useState } from "react";
import { FaThLarge, FaList } from "react-icons/fa";

export default function LayoutToggleButton({ onToggle }) {
  const [isGrid, setIsGrid] = useState(true);

  const handleClick = () => {
    setIsGrid(!isGrid);
    onToggle(!isGrid); // inform parent to change layout
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 shadow-sm"
    >
      {isGrid ? <FaList /> : <FaThLarge />}
      {isGrid ? "List View" : "Grid View"}
    </button>
  );
}
