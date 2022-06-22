import { Delete } from "@mui/icons-material";
import { Box, Fab, Stack } from "@mui/material";
import { useToggleContext } from "../../context/ToggleContext";
import { TabPanelProps } from "../../interfaces/props";
import Converter from "../converter/Converter";
import DeleteDialog from "../dialog/DeleteDialog";
import Chart from "./Chart";

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, currency, ...other } = props;
  const { open } = useToggleContext();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`currency-tabpanel-${index}`}
      aria-labelledby={`currency-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Stack p={3} bgcolor="white" alignItems={"center"}>
          <Chart assetID={currency.asset_id} />

          <Box alignSelf={"stretch"}>
            <Converter {...currency} />
          </Box>

          <Box alignSelf={"flex-end"}>
            <Fab color="error" onClick={open}>
              <Delete />
            </Fab>
          </Box>

          <DeleteDialog assetID={currency.asset_id} />
        </Stack>
      )}
    </div>
  );
};

export default TabPanel;
