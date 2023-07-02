import React from "react";
import data from "./data";
import { BiSearchAlt2 } from "react-icons/bi";
import hero from "../../Svg.images/hero.svg";
const Hero = () => {
  const filterdata = data.filter((item) => item.id < 5);
  return (
    <article className="Hero-cont md:flex w-[100%] pt-[1rem] justify-between items-stretch self-end leading-9">
      <div className="Hero-info-wrapper w-[100%] md:w-[35%] px-[2rem] items-stretch justify-between  basis-[47%]">
        <div className="Hero-info-text mb-[1rem] ">
          <h1 className="text-2xl font-bold mb-[0.5rem]">
            The{" "}
            <span className="px-1 rounded bg-gradient-to-r from-tiffany-blue from-40% to-avocado from-60%...">
              Decentralized
            </span>{" "}
            Cross-Chain Exchange
          </h1>
          <p className="text-blue-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            incidunt sunt aliquam quis vel voluptate.
          </p>
        </div>
        <div className="Hero-info-search h-max flex items-center border-[2px] rounded mb-[0.5rem]">
          <BiSearchAlt2 className="mx-[0.3rem] text-lg" />
          <input
            type="text"
            placeholder="Search 5000+ tokens across 9 Chains"
            className=" w-[100%] bg-transparent text-sky-200 border-0"
          />
        </div>
        <button className="Start-swap bg-gradient-to-r from-tiffany-blue from-40% to-avocado from-60%... cursor-pointer text-center px-[0.2rem] rounded">
          Start Swapping
        </button>
        <div className="Social-link flex my-[0.5rem]">
          {filterdata.map((link) => {
            const { id, social } = link;
            return (
              <span className="text-xl mx-1 cursor-pointer" key={id}>
                {social}
              </span>
            );
          })}
        </div>
      </div>
      <div className="Hero-image w-[100%] md:w-[65%] ">
        <img src={hero} alt="" className="w-[100%] h-[100%]" />
      </div>
    </article>
  );
};

export default Hero;
