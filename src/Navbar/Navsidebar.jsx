import React from "react";
import navdata from "./navdata";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../GlobalContext";
const Navsidebar = () => {
  const { revealMenu } = useGlobalContext();
  return (
    <aside
      className={`fixed top-[5rem] right-0 w-full h-full z-[100] grid place-items-center transition-all duration-500 ease-in-out transform scale-100 bg-black bg-opacity-30 md:hidden ${
        revealMenu ? "visible" : "invisible"
      } `}
    >
      <div
        className={`h-[100%] w-[100%] top-[0rem] left-0 fixed bg-gradient-to-r from-deep-dark-cyan 10%  via-blondi-deep-blue 45%  to-pacific-deep-cyan 45%... transition-all duration-500 ease-in-out md:hidden ${
          revealMenu ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mobileNav flex flex-col justify-center items-center leading-1 text-lg font-medium">
          {navdata.map((mobile) => {
            const { id, path, nav } = mobile;
            return (
              <span
                className=" border-b-[2px] border-gray-200 w-[90%] flex justify-center items-center py-[0.5rem]"
                key={id}
              >
                <NavLink to={path} key={path}>
                  {nav}
                </NavLink>
              </span>
            );
          })}
          <div className="Enter-app-cont  md:flex lg:flex text-sm  mt-[1rem]">
            <button className=" w-max  Btn cursor-pointer rounded-l-md rounded-r-md bg-white px-[0.4rem] py-[0.4rem]  text-slate-50 bg-gradient-to-r from-tiffany-blue from-40% to-avocado from-60%...">
              Enter App
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Navsidebar;
