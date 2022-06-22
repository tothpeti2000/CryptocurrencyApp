import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Stack } from "@mui/material";
import { useState } from "react";
import { Asset } from "../../interfaces/currency";
import AmountInput from "./AmountInput";
import { convert, toDollars, toOtherCurrency } from "./utils";

const Converter = (props: Asset) => {
  const [input, setInput] = useState("");
  const [editedCurrency, setEditedCurrency] = useState("dollar");

  const handleDollarChange = (input: string) => {
    setEditedCurrency("dollar");
    setInput(input);
  };

  const handleOtherCurrencyChange = (input: string) => {
    setEditedCurrency(props.asset_id);
    setInput(input);
  };

  // If we're editing the Dollar input field currently, simply set the dollar amount to the input value, otherwise, do the conversion
  const dollars =
    editedCurrency === "dollar"
      ? input
      : convert(input, props.price_usd, toDollars);

  const otherAmount =
    editedCurrency === props.asset_id
      ? input
      : convert(input, props.price_usd, toOtherCurrency);

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      <AmountInput
        currencyName="Dollar"
        amount={dollars}
        onChange={handleDollarChange}
      />
      <CompareArrowsIcon />
      <AmountInput
        currencyName={props.name}
        amount={otherAmount}
        onChange={handleOtherCurrencyChange}
      />
    </Stack>
  );
};

export default Converter;
