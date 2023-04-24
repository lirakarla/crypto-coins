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
    <div className="px-60 py-20 bg-gray-10">
      <div className="flex gap-4 mb-8">
        <img className="h-16 w-16 inline" alt="coinLogo" src={coin.image} />
        <div>
          <h1 className="text-purple-5 text-3xl font-extrabold text-left">
            {coin.symbol.toUpperCase()}
          </h1>
          <h2 className="text-white-5 text-xl font-bold">{coin.id}</h2>
        </div>
      </div>
      <p className="text-white-5 text-left text-lg">
        PRICE: $ {new Intl.NumberFormat().format(coin.price)}
      </p>
      <p className="text-white-5 text-left text-lg">
        SUPPLY: {new Intl.NumberFormat().format(coin.supply)}
      </p>
      <div className="text-justify mt-6 ">
        <span className="text-gray-1  text-lg break-words text-justify">
          {coin.description}
        </span>
      </div>
    </div>
  );
};

export default CoinView;
