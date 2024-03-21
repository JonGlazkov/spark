import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { FuelWalletConnector } from "@fuel-wallet/sdk";
import { FuelProvider } from "@fuels/react";
import { BSafeConnector } from "bsafe";

import ThemeWrapper from "@src/themes/ThemeProvider";
import { loadState } from "@src/utils/localStorage";
import { RootStore, storesContext } from "@stores";

import GlobalStyles from "./themes/GlobalStyles";
import App from "./App";

import "normalize.css";
import "rc-dialog/assets/index.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const initState = loadState();

const STORE = RootStore.create(initState);

console.warn(`Version: ${__COMMIT_HASH__}`);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <FuelProvider
      fuelConfig={{
        connectors: [new BSafeConnector(), new FuelWalletConnector()],
        storage: null,
      }}
      theme="dark"
    >
      <storesContext.Provider value={STORE}>
        <ThemeWrapper>
          <Router>
            <App />
          </Router>
          <ToastContainer
            autoClose={5000}
            closeOnClick={false}
            icon={<div />}
            newestOnTop={true}
            position="bottom-right"
            rtl={false}
            theme="dark"
            draggable
            pauseOnFocusLoss
            pauseOnHover
          />
          <GlobalStyles />
        </ThemeWrapper>
      </storesContext.Provider>
    </FuelProvider>
  </React.StrictMode>,
);
