import { Alert, Snackbar } from "@mui/material";
import { Fragment } from "react";
import { useErrorContext } from "../context/ErrorContext";
import { useToggleContext } from "../context/ToggleContext";

const ErrorToast = () => {
  const { isOpen, close } = useToggleContext();
  const { errors } = useErrorContext();

  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={6000}
      onClose={close}
    >
      <Alert severity="error" variant="filled">
        {errors.map((err, idx) => (
          <Fragment key={idx}>
            {err}
            {err.trim().length > 0 && <br />}
          </Fragment>
        ))}
      </Alert>
    </Snackbar>
  );
};

export default ErrorToast;
