import React, { createContext, useState, useContext } from "react";

// Create the context
const GlobalStateContext = createContext();

// Custom hook to use the context easily
export const useGlobalState = () => useContext(GlobalStateContext);

// Provider component to wrap around the app
export const GlobalStateProvider = ({ children }) => {
  const [text, setText] = useState("$97 a month");
  const [price, setPrice] = useState(97);
  const [plan, setPlan] = useState("Monthly"); // Add state for plan

  // Function to update text
  const updateText = (newText) => {
    setText(newText);
  };

  // Function to update price
  const updatePrice = (newPrice) => {
    setPrice(newPrice);
  };

  // Function to update plan
  const updatePlan = (newPlan) => {
    setPlan(newPlan);
  };

  return (
    <GlobalStateContext.Provider
      value={{
        text,
        price,
        plan, // Provide the 'plan' state
        updateText,
        updatePrice,
        updatePlan, // Provide the function to update 'plan'
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
