// src/contexts/GlobalStateContext.jsx
import React, { createContext, useState, useContext } from "react";

// Create a Context for the global state
const GlobalStateContext = createContext();

// Custom hook to use the context easily
export const useGlobalState = () => useContext(GlobalStateContext);

// Provider component to wrap around the app
export const GlobalStateProvider = ({ children }) => {
  const [text, setText] = useState("$97 a month");
  const [price, setPrice] = useState(97);

  const updateText = (newText) => {
    setText(newText);
  };

  const updatePrice = (newPrice) => {
    setPrice(newPrice);
  };

  return (
    <GlobalStateContext.Provider
      value={{
        text,
        price,
        updateText,
        updatePrice,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
