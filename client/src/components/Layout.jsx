import React from "react";
import NavBar from "./ui/NavBar";
import Footer from "./ui/Footer";
import { Outlet } from "react-router-dom";

export default function Layout({ user, handleLogout }) {
  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Outlet />
      <Footer />
    </>
  );
}
