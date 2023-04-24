import React, { FC } from "react";
import { CoinCard } from "../Types/CoinType";

interface CoinsCardProps {
  coin: CoinCard;
}

const CoinsCard: FC<CoinsCardProps> = ({ coin }) => {
  return (
    <a
      className="h-full w-full dark:bg-gray-5 flex flex-col  justify-center text-left shadow-xl shadow-slate-400 dark:shadow-2xl dark:shadow-black rounded p-3 my-6 bg-purple-10"
      href={`/${coin.id}`}
    >
      <h1 className="text-white-5 text-xl font-bold">
        {coin.id.toUpperCase()}
      </h1>
      <p className="text-gray-1">{coin.name}</p>
    </a>
  );
};

export default CoinsCard;
