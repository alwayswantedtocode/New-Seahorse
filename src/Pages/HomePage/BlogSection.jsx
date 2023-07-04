import React from "react";

const BlogSection = () => {
  const blogInfo = [
    {
      image: "Images/Blog/Blog-1.png",
      title: "Lorem ipsum dolor sit amet.",
      snipet:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit voluptatum eveniet temporibus sequi unde asperiores voluptatibus, quos est laboriosam dolore aut harum, voluptates eius. Tenetur magnam ipsam rem reiciendis nesciunt repellendus illo impedit, corrupti deserunt a! Blanditiis eligendi perferendis repudiandae?",
    },
    {
      image: "Images/Blog/Blog-2.png",
      title: "Lorem ipsum dolor sit amet.",
      snipet:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe doloribus ex adipisci dolor impedit mollitia animi earum enim ullam sapiente!",
    },
    {
      image: "Images/Blog/Blog-3.jfif",
      title: "Lorem ipsum dolor sit amet.",
      snipet:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe doloribus ex adipisci dolor impedit mollitia animi earum enim ullam sapiente!",
    },
  ];
  return (
    <article className="BlogSection w-[75%] mb-[0.5rem]">
    
      <div className="blog-heading w-[100%] flex justify-between py-[0.3rem] my-[0.5rem]">
        <h1 className="text-sm md:text-xl lg:text-2xl font-bold">
          {" "}
          Learn More about Crypto Seahorse
        </h1>
        <button
          className=" bg-white rounded-[0.5rem] p-[0.3rem] text-xs md:text-base 
 text-black font-medium uppercase cursor-pointer"
        >
          view more
        </button>
      </div>
      <div className="blog-cont grid  md:grid-cols-2  ">
        {blogInfo.map((info, index) => {
          const { image, title, snipet } = info;
          return (
            <div
              className="blog-content-cont relative md:first:row-span-3"
              key={index}
            >
              <div className="image-cont w-[100%] h-[100%]">
                <img
                  src={image}
                  alt="image"
                  className=" w-[100%] h-[100%] object-cover rounded-[0.8rem]"
                />
              </div>
              <div className=" transparent-cover w-[100%] h-[100%] bg-[#00000069] absolute top-[0%] z-2 rounded-[0.8rem] "></div>

              <div className="title-snipet  absolute z-3">
                <h2 className=" font-bold md:text-base lg:text-xl  md:font-bold md:mb-[1rem]  mx-[0.5rem]">
                  {title}
                </h2>
                <p className="snipet mb-[1rem]  mx-[0.5rem] text-cyan-600">
                  {snipet}
                </p>
                <button className="btn uppercase bg-white rounded-[0.4rem] p-[0.2rem] font-medium mx-[0.5rem]">
                  <span className="bg-gradient-to-r from-tiffany-blue from-40% to-avocado from-60%... bg-clip-text text-transparent">
                    read more
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default BlogSection;
