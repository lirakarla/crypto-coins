import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CoinGeckoClient } from "../Clients/CoinGeckoClient";
import { Coin } from "../Types/CoinType";

interface CoinProps {}

const CoinView: FC<CoinProps> = () => {
  const { coinId } = useParams();
  const [coin, setCoin] = useState<Coin | null>(null);
  useEffect(() => {
    if (coinId) {
      CoinGeckoClient.getCoin(coinId).then((response) => {
        setCoin(response);
      });
    }
  }, [coinId]);
  if (!coin) {
    return (
      <h1 className="text-purple-10 text-3xl font-bold px-60 py-20">
        Loading...
      </h1>
    );
  }
  return (
    <div className="2xl:px-60 xl:px-40 lg:px-40 md:px-36 px-10 py-10 dark:bg-gray-10 bg-white-10">
      <div className="flex gap-4 mb-8">
        <img className="h-16 w-16 inline" alt="coinLogo" src={coin.image} />
        <div>
          <h1 className="text-purple-5 text-3xl font-extrabold text-left">
            {coin.symbol.toUpperCase()}
          </h1>
          <h2 className="dark:text-white-5 text-xl font-bold text-gray-5">
            {coin.id}
          </h2>
        </div>
      </div>
      <p className="dark:text-white-5 text-left text-lg text-gray-5">
        PRICE: $ {new Intl.NumberFormat().format(coin.price)}
      </p>
      <p className="dark:text-white-5 text-left text-lg text-gray-5">
        SUPPLY: {new Intl.NumberFormat().format(coin.supply)}
      </p>
      <div className="text-justify mt-6 ">
        <span className="dark:text-gray-1  text-lg break-words text-justify text-slate-500">
          {coin.description}
        </span>
      </div>
    </div>
  );
};

export default CoinView;
