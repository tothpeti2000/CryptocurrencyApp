import { FormControl, NativeSelect } from "@mui/material";
import { ChangeEventHandler, useState } from "react";
import { useQuery } from "react-query";
import { queryOptions } from "../../api/rest/client";
import useAPI from "../../api/rest/useAPI";
import { useUserContext } from "../../context/UserContext";
import Spinner from "../Spinner";
import DialogFrame from "./DialogFrame";

const AddCurrencyDialog = () => {
  const { canAddCurrency, addCurrency } = useUserContext();
  const { getAllAssets } = useAPI();

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedValue !== "") {
      const asset = JSON.parse(selectedValue);
      addCurrency(asset);

      setSelectedValue("");
    }
  };

  const { data: assets, isLoading } = useQuery(
    "assets",
    getAllAssets,
    queryOptions
  );

  return (
    <DialogFrame
      title="Add new currency"
      contentText="Select a currency from the list below"
      onSubmit={handleSubmit}
    >
      {isLoading && <Spinner />}

      {assets && (
        <FormControl fullWidth>
          <NativeSelect value={selectedValue} onChange={handleChange}>
            <option value="">None</option>
            {assets.data.map((asset) => (
              <option
                key={asset.asset_id}
                value={JSON.stringify(asset)}
                disabled={!canAddCurrency(asset.asset_id)}
              >
                {asset.name}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      )}
    </DialogFrame>
  );
};

export default AddCurrencyDialog;
