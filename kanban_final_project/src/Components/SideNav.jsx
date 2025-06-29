import React from "react";
import { Form, Link } from "react-router-dom";
import { FiHome, FiClipboard, FiLogOut } from "react-icons/fi";

const SideNav = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col p-4 fixed">
      <h2 className="text-2xl font-bold mb-6 text-center">Kanban</h2>

      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="flex items-center gap-3 hover:text-blue-400"
            >
              <FiHome /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/boards"
              className="flex items-center gap-3 hover:text-blue-400"
            >
              <FiClipboard /> Boards
            </Link>
          </li>
        </ul>
      </nav>
      <Form method="post" action="/logout" className="flex items-center gap-3 mt-auto hover:text-red-400">
        <FiLogOut />
        <button type="submit">Logout</button>
      </Form>

      {/* <button className="flex items-center gap-3 mt-auto hover:text-red-400">
        Logout
      </button> */}
    </div>
  );
};

export default SideNav;
