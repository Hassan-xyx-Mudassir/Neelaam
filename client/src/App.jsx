import { useState } from "react";
import { Button } from "./components/ui/button";
import { Tooltip, Switch, Button as btn } from "@nextui-org/react";
import Faq from "./faq";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Faq />
    </>
  );
}

export default App;
