import BlockIcon from "@mui/icons-material/Block";
import { Link } from "react-router-dom";
import FullScreenCenter from "./FullScreenCenter";

const Redirect = () => {
  return (
    <FullScreenCenter>
      <BlockIcon fontSize="large" color="primary" />
      <h1>You must log in to access this page</h1>
      <Link to={"/"}>Log In</Link>
    </FullScreenCenter>
  );
};

export default Redirect;
