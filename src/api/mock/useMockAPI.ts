import { useErrorContext } from "../../context/ErrorContext";
import { Asset, ExchangeRate } from "../../interfaces/currency";
import { subtractWeekFromCurrentDate } from "../rest/utils";
import { assets, ohlcv, Response } from "./responses";

const useMockAPI = () => {
  const { showError } = useErrorContext();

  const getAllAssets = () => {
    console.log("Fetching assets");

    try {
      if (Math.random() < 0.5) {
        throw new Error(
          "An error occurred while trying to get the assets. Refresh the page or try again later!"
        );
      }

      return new Promise<Response<Asset[]>>((resolve, reject) => {
        setTimeout(() => resolve(assets), 5000);
      });
    } catch (err) {
      showError(String(err));
    }
  };

  const getExchangeRates = (assetID: string) => {
    console.log(
      `Fetching ${assetID}/USD exchange rates from ${subtractWeekFromCurrentDate()}`
    );

    try {
      if (Math.random() < 0.5) {
        throw new Error(
          "An error occurred while trying to get the exchange rates. Refresh the page or try again later!"
        );
      }

      return new Promise<Response<ExchangeRate[]>>((resolve, reject) => {
        setTimeout(() => resolve(ohlcv), 5000);
      });
    } catch (err) {
      showError(String(err));
    }
  };

  return { getAllAssets, getExchangeRates };
};

export default useMockAPI;
