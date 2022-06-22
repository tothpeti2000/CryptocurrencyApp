import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const queryOptions = {
  refetchOnMount: false,
  refetchOnWindowFocus: false,
};

axios.defaults.headers.common = {
  "X-CoinAPI-Key": API_KEY ?? "",
};

export const client = axios.create({
  baseURL: "https://rest-sandbox.coinapi.io",
});

export const get = async <T>(URL: string) => await client.get<T>(URL);
