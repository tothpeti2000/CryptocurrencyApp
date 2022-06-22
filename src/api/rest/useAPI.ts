import { useErrorContext } from "../../context/ErrorContext";
import { Asset, ErrorMessage, ExchangeRate } from "../../interfaces/currency";
import { client } from "./client";
import { subtractWeekFromCurrentDate } from "./utils";

const useAPI = () => {
  const { showError } = useErrorContext();

  const getAllAssets = async () => {
    console.log("Fetching assets");

    try {
      return await client.get<Asset[]>("v1/assets");
    } catch (err) {
      showError((err as ErrorMessage).message);
    }
  };

  const getExchangeRates = async (assetID: string) => {
    console.log(`Fetching ${assetID}/USD exchange rates`);
    const intervalStart = subtractWeekFromCurrentDate();

    try {
      return await client.get<ExchangeRate[]>(
        `v1/exchangerate/${assetID}/USD/history?period_id=6HRS&time_start=${intervalStart}`
      );
    } catch (err) {
      showError((err as ErrorMessage).message);
    }
  };

  return { getAllAssets, getExchangeRates };
};

export default useAPI;
