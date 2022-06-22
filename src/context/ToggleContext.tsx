import { createContext, FC, useContext, useState } from "react";

const useToggleContextValue = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    open,
    close,
  };
};

const ToggleContext = createContext(
  {} as ReturnType<typeof useToggleContextValue>
);

const ToggleProvider: FC = ({ children }) => {
  return (
    <ToggleContext.Provider value={useToggleContextValue()}>
      {children}
    </ToggleContext.Provider>
  );
};

const useToggleContext = () => useContext(ToggleContext);

export { ToggleProvider, useToggleContext };
