import React, { useEffect, useState } from "react";
import SideNav from "../Components/SideNav";
import Header from "../Components/Header";
import { ToastContainer } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Components/firebase";
import ProtectedRoutes from "../utils/ProtectedRoutes";

const Root = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
      } else {
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
          <ProtectedRoutes></ProtectedRoutes>
        </main>
      </div>
    </div>
  );
};

export default Root;
