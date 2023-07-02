import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Navsidebar from "../Navbar/Navsidebar";
import Footer from "../Footer/Footer";
const NavLayout = () => {
  return (
    <>
      <Navbar />
      <Navsidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default NavLayout;
