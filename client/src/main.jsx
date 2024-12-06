import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { GlobalStateProvider } from "./contexts/GlobalStateContext";
import App from "./App.jsx";
import Payment from "./components/Payment";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <GlobalStateProvider>
        <Payment></Payment>
      </GlobalStateProvider>
    </NextUIProvider>
  </StrictMode>
);
