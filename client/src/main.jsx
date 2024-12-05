import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { GlobalStateProvider } from "./contexts/GlobalStateContext";
import "./index.css";
import App from "./App.jsx";

import Product from "./components/Product";
import Payment from "./components/Payment";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <GlobalStateProvider>
        <Payment></Payment>
      </GlobalStateProvider>
    </NextUIProvider>
  </StrictMode>
);
