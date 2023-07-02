import React from "react";

const DevSection = () => {
  return (
    <div className="w-[75%] flex flex-col md:flex-row justify-center items-center my-[2rem] p-[0.3rem] ">
      <div className="info-desc-cont w-[80%] md:w-[60%]  px-[1rem]">
        <span className=" ">
          <h1 className="text-3xl font-semibold mb-[2rem]">
            Building Cross-Chain{" "}
            <span className="px-1 rounded bg-gradient-to-r from-tiffany-blue from-40% to-avocado from-60%...">
              Together
            </span>
          </h1>
          <h2 className="text-2xl font-medium  mb-[2rem]">API SDK</h2>
          <p className="leading-[38px] text-cyan-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            porro voluptates maxime. Repudiandae deserunt aut quod delectus
            eligendi facilis itaque, est adipisci perferendis. Qui quam, sint
            ratione sapiente velit explicabo.
          </p>
        </span>
        <div className="Btn-cont gap-[1rem] md:gap-[4rem] flex justify-center items-center [5rem] my-[0.7rem] text-xs  md:text-base font-medium">
          <button className=" w-[8rem] lg:w-[35%] h-[2.3rem] p-[0.3rem] text-center flex items-center  justify-center rounded-[0.5rem] bg-gradient-to-r from-tiffany-blue from-40% to-avocado from-60%... cursor-pointer uppercase">
            learn more
          </button>
          <button className="Btn bg-white w-[8rem] lg:w-[35%] h-[2.3rem] p-[0.3rem] text-center flex items-center  justify-center rounded-[0.5rem] cursor-pointer uppercase  ">
            <span className="bg-gradient-to-r from-tiffany-blue from-40% to-avocado from-60%... bg-clip-text text-transparent">
              get in touch
            </span>
          </button>
        </div>
      </div>
      <div className="info-image w-[25rem] md:w-[30rem]">
        <img src="Images/dev-section-image.png" alt="" className="w-[25rem] md:w-[30rem]" />
      </div>
    </div>
  );
};

export default DevSection;
