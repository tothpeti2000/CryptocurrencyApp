import { Stack } from "@mui/material";
import FullScreenCenter from "../components/FullScreenCenter";
import LoginForm from "../components/login/LoginForm";
import Title from "../components/Title";
import { ToggleProvider } from "../context/ToggleContext";

const LoginPage = () => {
  return (
    <FullScreenCenter>
      <Stack>
        <Title />
        <ToggleProvider>
          <LoginForm />
        </ToggleProvider>
      </Stack>
    </FullScreenCenter>
  );
};

export default LoginPage;
