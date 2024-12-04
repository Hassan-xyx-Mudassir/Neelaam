import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import App from "./App.jsx";

import Product from "./components/Product";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <Product></Product>
    </NextUIProvider>
  </StrictMode>
);
