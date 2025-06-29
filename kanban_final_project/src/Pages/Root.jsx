import React from "react";
import SideNav from "../Components/SideNav";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex">
      <SideNav />
      <div className="ml-64 flex-1 min-h-screen bg-gray-100">
        <Header />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Root;
