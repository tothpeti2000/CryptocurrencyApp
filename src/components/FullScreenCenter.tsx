import { Stack } from "@mui/material";
import { FC } from "react";

const FullScreenCenter: FC = ({ children }) => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} height={"100vh"}>
      <Stack alignItems={"center"}>{children}</Stack>
    </Stack>
  );
};

export default FullScreenCenter;
