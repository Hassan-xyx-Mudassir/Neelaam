import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { GlobalStateProvider } from "./contexts/GlobalStateContext";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <GlobalStateProvider>
        <App />
      </GlobalStateProvider>
    </NextUIProvider>
  </StrictMode>
);
