import { Box, IconButton, Typography } from "@mui/material";
import { UserDisplayProps } from "../interfaces/props";
import LogoutIcon from "@mui/icons-material/Logout";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/styles";

const Header = (props: UserDisplayProps) => {
  const { logoutUser } = useUserContext();
  const navigate = useNavigate();

  const handleClick = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <Box {...styles.boxWithShadow} borderRadius={0}>
      <h1>
        Hello {props.user.userName}!
        <IconButton onClick={handleClick}>
          <LogoutIcon />
        </IconButton>
      </h1>
      <Typography variant="body1">
        Add a new currency or check out the exchange rates of the previously
        added ones
      </Typography>
    </Box>
  );
};

export default Header;
