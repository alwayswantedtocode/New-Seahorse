import React from "react";
import TokenCard from "./TokenCard";

const FeatureOne = () => {
  const tokens = ["aave", "aave-usdt"];
  return (
    <article className="Feature-cont p-[1rem] w-[75%] flex flex-col md:flex-row text-blue-100 justify-between items-center text-md leading-7 my-[2rem] pl-[2rem] ">
      <div className="Swap-token-cont  flex flex-col text-white py-[1rem] px-[1rem] border-[1px] w-max h-[100%] rounded-[0.7rem] justify-evenly items-center bg-cyan-900 font-bold">
        {/* bg-teal-950 */}
        <div className="tokens-cont w-[90%] flex flex-col mt-[3px] justify-between mb-[0.5rem] basis-[56%] rounded">
          {tokens.map((token, index) => {
            return <TokenCard key={index} />;
          })}
        </div>
        <button className=" w-[100%] h-[2rem] p-[0.3rem] ml-[1rem] text-center flex items-center  justify-center rounded-[0.5rem] bg-gradient-to-r from-tiffany-blue from-40% to-avocado from-60%... cursor-pointer">
          Swap
        </button>
      </div>
      <div className="Features-desc h-[85%] flex flex-col basis-[40%] justify-between mt-[17px] mb-[12px] leading-8 items-stretch">
        <div className="Features-desc-title text-white">
          <h1 className="text-2xl font-bold mb-[0.5rem]">
            <span className="px-2  text-center rounded bg-gradient-to-r from-tiffany-blue from-40% to-avocado from-60%...">
              Swap
            </span>{" "}
            Any Token, Any Chain
          </h1>
        </div>
        <p className="Feature-desc-parag text-cyan-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae doloremque vero. Quia, voluptatem esse! Dolorem quasi maxime soluta voluptatibus! Soluta perspiciatis quam assumenda maxime vel, aliquam illum eos. Non doloribus similique sit fugiat quae at error aspernatur tempore rem.
        </p>
        <div className="Btn cont">
          <button className="Btn bg-white h-[2.2rem] text-center flex rounded items-center p-[0.4rem] font-medium cursor-pointer">
            <span className="bg-gradient-to-r from-tiffany-blue from-40% to-avocado from-60%... bg-clip-text text-transparent">
              Start Swaping
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default FeatureOne;
