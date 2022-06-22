import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {
  Box,
  Divider,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { CurrencyListItemProps } from "../../interfaces/props";

const CurrencyListItem = (props: CurrencyListItemProps) => {
  const [priceHigh, setPriceHigh] = useState(props.currency.price_usd);
  const [priceLow, setPriceLow] = useState(props.currency.price_usd);

  useEffect(() => {
    if (props.wsData) {
      setPriceHigh(props.wsData.price_high);
      setPriceLow(props.wsData.price_low);
    }
  }, [props.wsData]);

  return (
    <>
      <ListItem>
        <ListItemText
          primary={
            <h3>
              {props.currency.name} ({props.currency.asset_id}/USD)
            </h3>
          }
          secondary={
            <Typography component={"div"}>
              <Box>
                <TrendingUpIcon />
                <Typography
                  component="span"
                  variant="body1"
                  color={"text.primary"}
                  ml={2}
                >
                  {priceHigh}
                </Typography>
              </Box>

              <Box>
                <TrendingDownIcon />
                <Typography
                  component="span"
                  variant="body1"
                  color={"text.primary"}
                  ml={2}
                >
                  {priceLow}
                </Typography>
              </Box>
            </Typography>
          }
        />
      </ListItem>
      <Divider />
    </>
  );
};

export default CurrencyListItem;
