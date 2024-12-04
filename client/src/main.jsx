import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { GlobalStateProvider } from "./contexts/GlobalStateContext";
import "./index.css";
import App from "./App.jsx";

import Product from "./components/Product";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <GlobalStateProvider>
        <Product></Product>
      </GlobalStateProvider>
    </NextUIProvider>
  </StrictMode>
);
