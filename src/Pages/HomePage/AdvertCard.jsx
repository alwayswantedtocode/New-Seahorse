import React from "react";
import data from "./data";

const SocialMediaCard = () => {
  const filterData = data.filter((item) => item.id > 2);
  return (
    <article className="Advertcard border rounded-[0.4rem] border-green-700 w-[75%] h-[5rem] my-[2rem] flex justify-between flex-row items-center text-2xl p-[0.5rem] md:text-4xl bg-cyan-900">
      <div className="advert-cont text-cyan-600">
        <span className="advert">
          <h2>Join our community</h2>
        </span>
      </div>
      <div className="socials-cont flex">
        {filterData.map((link) => {
          const { id, social } = link;
          return (
            <div className="socials text-4xl text-white" key={id}>
              {social}
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default SocialMediaCard;
