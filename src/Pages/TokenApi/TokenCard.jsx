import React, { useState, useEffect } from "react";

const TokenCard = ({ id }) => {
  const solUrl =
    // "https://api.coingecko.com/api/v3/coins/1sol"
    // "https://api.coingecko.com/api/v3/coins/1bch"
    "https://api.coingecko.com/api/v3/coins/aave";
  const [tokenData, setTokenData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(solUrl)
      .then((response) => response.json())
      .then((data) => {
        setTokenData(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <div className="loading">Loading</div>;
  }
  return (
    <div className="Token-cont w-max bg-[#2b90b0] rounded-[9px] flex flex-row basis-[45%] pt-[20px]  pb-[20px] pl-[0] mb-[0.3rem] justify-between items-center font-bold">
      {tokenData && (
        <div className="Token-info w-max h-[50%]   items-center  basis-[42%]justify-between mr-[2px] mb-[2px] pl-[7px] flex rounded-r-md leading-[30px] bg-cyan-900 ">
          <img
            className="Token-logo w-[50px] h-[50px] object-cover"
            src={tokenData.image.small}
            alt=""
          />
          <div className="Token-title-cont flex flex-col justify-between mt-[2px] px-[0.3rem] ">
            <span className="Token-title-abrev text-2xl capitalize ">
              {tokenData.name}
            </span>
            <span className="Token-title-long font-bold text-cyan-600 leading-7 ">
              {tokenData.asset_platform_id}
            </span>
          </div>
        </div>
      )}
      <div className="Token-amount-cont p-[0.2rem]">
        <div className="Token-amount">10</div>
        <div className="Token-amount-long">
          <div className="Token-price">
            {tokenData && tokenData.market_data.current_price.usd}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
