import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "./context/UserContext";
import { ErrorProvider } from "./context/ErrorContext";
import { ToggleProvider } from "./context/ToggleContext";

const root = document.getElementById("root");
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ToggleProvider>
          <ErrorProvider>
            <App />
          </ErrorProvider>
        </ToggleProvider>
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
