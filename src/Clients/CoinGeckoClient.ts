import { api } from "../Configs/AxiosConfigs";
import { Coin } from "../Types/CoinType";

export const CoinGeckoClient = {
  search: async function (name: string) {
    const response = await api.request({
      url: `/search`,
      params: {
        query: name,
      },
      method: "GET",
    });
    return response.data.coins;
  },
  getCoin: async function (id: string): Promise<Coin> {
    const response = await api.request({
      url: `/coins/${id}`,
      params: {
        tickers: true,
      },
      method: "GET",
    });
    return {
      symbol: response.data.symbol,
      id: response.data.id,
      image: response.data.image.small,
      supply: response.data.market_data.total_supply,
      price: response.data.market_data.current_price.usd,
      description: response.data.description.en,
    };
  },
};
