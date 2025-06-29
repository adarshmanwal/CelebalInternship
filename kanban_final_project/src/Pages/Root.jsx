import React, { use, useEffect, useState } from "react";
import SideNav from "../Components/SideNav";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Components/firebase";

const Root = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Check if the user is logged in
    console.log("Checking user authentication state...");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, store user in local storage
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        console.log("User is logged in:", user);
      } else {
        // User is signed out, remove user from local storage
        localStorage.removeItem("user");
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <ToastContainer />
      {user && (
        <aside className="w-64 fixed h-full z-10">
          <SideNav />
        </aside>
      )}

      <div className={`flex-1 ${user ? "ml-64" : ""}`}>
        {user && <Header />}
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Root;
