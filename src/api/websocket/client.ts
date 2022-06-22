export const wsURL = "wss://ws-sandbox.coinapi.io/v1/";

export const createApiCall = (assetIDs: string[]) => {
  const filterIDs = assetIDs.map((ID) => `${ID}/USD`);

  return {
    type: "hello",
    apikey: process.env.REACT_APP_API_KEY,
    heartbeat: false,
    subscribe_data_type: ["ohlcv"],
    subscribe_filter_asset_id: filterIDs,
    subscribe_filter_period_id: ["1MIN"],
  };
};
