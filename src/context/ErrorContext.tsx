import { createContext, FC, useContext, useState } from "react";
import { useToggleContext } from "./ToggleContext";

const useErrorContextValue = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const { open } = useToggleContext();

  const showError = (...errorMessages: string[]) => {
    setErrors(errorMessages);
    open();
  };

  return {
    errors,
    showError,
  };
};

const ErrorContext = createContext(
  {} as ReturnType<typeof useErrorContextValue>
);

const ErrorProvider: FC = ({ children }) => {
  return (
    <ErrorContext.Provider value={useErrorContextValue()}>
      {children}
    </ErrorContext.Provider>
  );
};

const useErrorContext = () => useContext(ErrorContext);

export { ErrorProvider, useErrorContext };
