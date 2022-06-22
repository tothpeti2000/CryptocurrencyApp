import { Asset, ExchangeRate } from "../../interfaces/currency";

export interface Response<T> {
  data: T;
  isLoading: boolean;
  isError: boolean;
  error?: { message: string };
}

export const assets: Response<Asset[]> = {
  data: [
    {
      asset_id: "BTC",
      name: "Bitcoin",
      price_usd: 20519,
    },
    {
      asset_id: "ARK",
      name: "Ark",
      price_usd: 0.4,
    },
    {
      asset_id: "BTG",
      name: "Bitgem",
      price_usd: 15.53,
    },
    {
      asset_id: "ADA",
      name: "Cardano",
      price_usd: 0.46,
    },
    {
      asset_id: "USD",
      name: "Dollar",
      price_usd: 1,
    },
    {
      asset_id: "BTC2",
      name: "Bitcoin2",
      price_usd: 20519,
    },
    {
      asset_id: "ARK2",
      name: "Ark2",
      price_usd: 0.4,
    },
    {
      asset_id: "BTG2",
      name: "Bitgem2",
      price_usd: 15.53,
    },
    {
      asset_id: "ADA2",
      name: "Cardano2",
      price_usd: 0.46,
    },
    {
      asset_id: "USD2",
      name: "Dollar2",
      price_usd: 1,
    },
    {
      asset_id: "BTC3",
      name: "Bitcoin2",
      price_usd: 20519,
    },
    {
      asset_id: "ARK3",
      name: "Ark3",
      price_usd: 0.4,
    },
    {
      asset_id: "BTG3",
      name: "Bitgem3",
      price_usd: 15.53,
    },
    {
      asset_id: "ADA3",
      name: "Cardano3",
      price_usd: 0.46,
    },
    {
      asset_id: "USD3",
      name: "Dollar3",
      price_usd: 1,
    },
    {
      asset_id: "ETH",
      name: "Eth",
      price_usd: 1.6,
    },
  ],
  isLoading: false,
  isError: false,
};

export const ohlcv: Response<ExchangeRate[]> = {
  data: [
    {
      time_period_start: "2022-06-12T00:00:00.0000000Z",
      rate_high: 28523.06,
      rate_low: 26500.0,
    },
    {
      time_period_start: "2022-06-13T00:00:00.0000000Z",
      rate_high: 26845.63,
      rate_low: 21910.26,
    },
    {
      time_period_start: "2022-06-14T00:00:00.0000000Z",
      rate_high: 23288.88,
      rate_low: 20816.35,
    },
    {
      time_period_start: "2022-06-15T00:00:00.0000000Z",
      rate_high: 22756.0,
      rate_low: 20079.72,
    },
    {
      time_period_start: "2022-06-16T00:00:00.0000000Z",
      rate_high: 22957.01,
      rate_low: 20200.0,
    },
    {
      time_period_start: "2022-06-17T00:00:00.0000000Z",
      rate_high: 21325.06,
      rate_low: 20220.16,
    },
    {
      time_period_start: "2022-06-18T00:00:00.0000000Z",
      rate_high: 20758.0,
      rate_low: 17592.78,
    },
    {
      time_period_start: "2022-06-19T00:00:00.0000000Z",
      rate_high: 20000.0,
      rate_low: 17930.7,
    },
  ],
  isLoading: false,
  isError: false,
};
