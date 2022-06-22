import { Box, List } from "@mui/material";
import useWebsocket from "../../api/websocket/useWebsocket";
import { UserDisplayProps } from "../../interfaces/props";
import { styles } from "../../styles/styles";
import CurrencyListItem from "./CurrencyListItem";
import { ErrorMessage, WsData } from "../../interfaces/currency";

const CurrencyList = (props: UserDisplayProps) => {
  const assetIDs = props.user.currencies.map((c) => c.asset_id);
  const data = useWebsocket(assetIDs);
  console.log("WsData:", data);

  const shouldUpdate = (assetID: string) => {
    if ("message" in data) {
      return false;
    }

    console.log(data, data.symbol_id);
    return data.symbol_id.includes(`${assetID}_USD`);
  };
  console.log("CurrencyList");

  return (
    <Box {...styles.boxWithShadow}>
      <h1>Exchange Rates</h1>
      {
        <List>
          {props.user.currencies.map((c) => (
            <CurrencyListItem
              key={c.asset_id}
              currency={c}
              wsData={shouldUpdate(c.asset_id) ? (data as WsData) : undefined}
            />
          ))}
        </List>
      }
    </Box>
  );
};

export default CurrencyList;
