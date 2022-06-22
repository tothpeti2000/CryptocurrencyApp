import { useEffect, useState } from "react";
import { useErrorContext } from "../../context/ErrorContext";
import { WsData } from "../../interfaces/currency";
import { createApiCall, wsURL } from "./client";

const useWebsocket = (assetIDs: string[]) => {
  const [data, setData] = useState<WsData>({
    price_high: 0,
    price_low: 0,
    symbol_id: "",
  });

  const { showError } = useErrorContext();

  useEffect(() => {
    const ws = new WebSocket(wsURL);
    const apiCall = createApiCall(assetIDs);

    ws.onopen = (e) => {
      console.log("WS opened");
      ws.send(JSON.stringify(apiCall));
    };

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setData(data);
    };

    ws.onerror = () => {
      console.log("WS error");
      showError(
        "An error occurred while trying to get live data. Refresh the page or try again later!"
      );
    };

    ws.onclose = () => {
      console.log("WS closed");
    };

    return () => ws.close();
  }, []);

  return data;
};

export default useWebsocket;
