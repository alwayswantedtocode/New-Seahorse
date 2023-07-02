import React from "react";

const Dailystats = () => {
  const data = [
    { id: 1, title: "Token Swap Price", value: "$0.11USD" },
    { id: 2, title: "Supported", value: "9 Chains" },
    { id: 3, title: "Total Liquidity", value: "$100M" },
    { id: 4, title: "Total Trades", value: "$9.123M" },
    { id: 5, title: "Daily Active Users", value: "$100.k+" },
  ];
  return (
    <article className="Daily-stats border rounded-[1rem] border-green-700 w-[75%]  my-[2rem] flex justify-evenly flex-col justify-self-center md:flex-row items-center leading-[43px] font-bold  bg-cyan-900 ">
      {data.map((info) => {
        const { id, title, value } = info;
        return (
          <div
            className="Metric-Cont text-center items-stretch flex justify-between flex-col"
            key={id}
          >
            <span className="Metric-title font-normal text-cyan-600">
              {title}
            </span>
            <span className="Metric-value font-medium text-2xl">{value}</span>
          </div>
        );
      })}
    </article>
  );
};

export default Dailystats;
