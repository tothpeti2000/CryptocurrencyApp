import { Box, List } from "@mui/material";
import useWebsocket from "../../api/websocket/useWebsocket";
import { UserDisplayProps } from "../../interfaces/props";
import { styles } from "../../styles/styles";
import CurrencyListItem from "./CurrencyListItem";

const CurrencyList = (props: UserDisplayProps) => {
  const assetIDs = props.user.currencies.map((c) => c.asset_id);
  const data = useWebsocket(assetIDs);

  const shouldUpdate = (assetID: string) => {
    return data.symbol_id.includes(`${assetID}_USD`);
  };

  return (
    <Box {...styles.boxWithShadow}>
      <h1>Exchange Rates</h1>
      {
        <List>
          {props.user.currencies.map((c) => (
            <CurrencyListItem
              key={c.asset_id}
              currency={c}
              wsData={shouldUpdate(c.asset_id) ? data : undefined}
            />
          ))}
        </List>
      }
    </Box>
  );
};

export default CurrencyList;
