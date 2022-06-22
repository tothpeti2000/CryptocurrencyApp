import { Link } from "react-router-dom";
import FullScreenCenter from "../components/FullScreenCenter";

const NotFound = () => {
  return (
    <FullScreenCenter>
      <h1>Page Not Found</h1>
      <Link to={"/"}>Back to Login</Link>
      <Link to={"/dashboard"}>Back to Dashboard</Link>
    </FullScreenCenter>
  );
};

export default NotFound;
