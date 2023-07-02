import React from "react";
import Feature from "./Data2nd";
const Card = ({ title, imgUrl, children }) => {
  return (
    <article className="Card-Container text-cyan-600 rounded-[10px]  grid  md:grid-cols-2 gap-[2rem] w-[75%] my-[2rem]">
      {Feature.map((features, index) => {
        const { srcs, title, description } = features;
        return (
          <div
            className="Image-parag-cont p-[1rem] border-[2px] rounded-[9px] border-green-700 bg-cyan-900"
            key={index}
          >
            <div className="Image-cont w-[5rem] h-[5rem] ">
              <img src={srcs} alt={title} />
            </div>
            <h1 className="title my-[0.5rem] font-bold text-lg text-white">
              {title}
            </h1>
            <p>{description}</p>
          </div>
        );
      })}
    </article>
  );
};

export default Card;
