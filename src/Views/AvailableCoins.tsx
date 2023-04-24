import React, { FC, useState, useEffect } from "react";
import { useDebounce } from "usehooks-ts";
import { CoinGeckoClient } from "../Clients/CoinGeckoClient";
import { CoinCard } from "../Types/CoinType";
import CoinsCard from "../Components/CoinsCard";

interface AvailableCoinsProps {}
const AvailableCoinsView: FC<AvailableCoinsProps> = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [cardslimit, setCardsLimit] = useState(16);
  const [loading, setLoading] = useState(false);
  const debouncedSearch = useDebounce(search, 500);
  useEffect(() => {
    setLoading(true);
    CoinGeckoClient.search(debouncedSearch).then((response) => {
      setCoins(response);
      setCardsLimit(16);
      setLoading(false);
    });
  }, [debouncedSearch]);

  return (
    <div className="px-11 py-20 bg-gray-10">
      <h1 className="text-purple-10 text-3xl font-bold">AVAILABLE COINS</h1>
      <input
        type="text"
        className="w-full mt-16 h-10 rounded-md focus:outline-none bg-gray-10 border-solid border border-white-10 text-zinc-300 p-2.5 "
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid xxl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  flex justify-between gap-x-32 gap-y-12 pt-4">
        {coins.slice(0, cardslimit).map((coin: CoinCard) => (
          <CoinsCard key={coin.id} coin={coin}></CoinsCard>
        ))}
      </div>
      {loading && <span className="loader"></span>}
      {coins.length > cardslimit && (
        <p
          className="text-purple-10 font-bold pt-32 cursor-pointer"
          onClick={() =>
            setCardsLimit((currentLimit: number) => currentLimit + 16)
          }
        >
          Show more ▼
        </p>
      )}
    </div>
  );
};

export default AvailableCoinsView;
