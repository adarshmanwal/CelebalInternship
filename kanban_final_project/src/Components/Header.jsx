import React from "react";
import { FiUser, FiBell, FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
      {/* Left side: title or menu */}
      <div className="flex items-center gap-4">
        <FiMenu className="text-xl md:hidden" />
        <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      </div>

      {/* Right side: icons or profile */}
      <div className="flex items-center gap-6">
        <FiBell className="text-xl text-gray-600 cursor-pointer" />
        <div className="flex items-center gap-2">
          <FiUser className="text-xl text-gray-600" />
          <span className="text-sm text-gray-800">Hello, User</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
