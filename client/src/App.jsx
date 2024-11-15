import { useState } from "react";
import { Button } from "./components/ui/button";
import { Tooltip, Switch, Button as btn } from "@nextui-org/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/*Checking dependencies*/}
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <Tooltip showArrow={true} content="I am a tooltip">
        <btn>Hover Me</btn>
      </Tooltip>
      <Switch defaultSelected color="secondary">
        Secondary
      </Switch>
    </>
  );
}

export default App;
