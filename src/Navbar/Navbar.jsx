import React from "react";
import { NavLink, Link, useLinkClickHandler } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import nav from "./navdata";
import { useGlobalContext } from "../GlobalContext";
import Navsidebar from "./Navsidebar";

const Navbar = () => {
  const { revealMenu, setRevealMenu } = useGlobalContext();
  return (
    <header className=" header w-[100%] h-[5rem] bg-gradient-to-r from-deep-dark-cyan from-10% via-blondi-deep-blue via-45% to-pacific-deep-cyan from-45%... font-slab flex  items-center justify-center bg-cyan-500 shadow-lg z-[10]">
      <nav className=" w-[97%] md:w-[90%] h-[4rem] md:mx-[3rem] flex items-center  text-base text-xl md:text-lg font-semibold ">
        {/* MenuBar */}
        <button
          className=" flex md:hidden lg:hidden mr-[1rem] cursor-pointer text-4xl"
          onClick={() => setRevealMenu(!revealMenu)}
        >
          {revealMenu ? <FiX /> : <FiMenu />}
        </button>

        {/* Logo */}
        <div className="Logo w-max h-max text-slate-50 cursor-pointer">
          <span className="">Crypto</span>
          <span className="">Seahorse</span>
        </div>
        {/* Navigation directory */}
        <div className="Directory-cont text-slate-50 flex justify-center px-[1.5rem] py-[0.3rem] flex-1 hidden  md:flex lg:flex ">
          {nav.map((link) => {
            const { id, path, nav } = link;
            return (
              <button className="Directory mx-[1rem] " key={id}>
                <NavLink to={path} key={path}>
                  {nav}
                </NavLink>
              </button>
            );
          })}
        </div>
        {/* Enter App Button */}
        <div className="Enter-app-cont hidden  md:flex lg:flex">
          <button className=" w-max  Btn cursor-pointer rounded-l-md rounded-r-md bg-white px-[0.4rem] py-[0.4rem]  text-slate-50 bg-gradient-to-r from-tiffany-blue from-40% to-avocado from-60%...">
            Enter App
          </button>
        </div>
      </nav>
      {/* <Navsidebar /> */}
    </header>
  );
};

export default Navbar;
