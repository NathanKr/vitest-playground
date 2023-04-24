import { useEffect } from "react";
import { sum } from "./lib/utils";

function App() {
  useEffect(() => {
    console.log(sum(1, 2));
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <h2>check sum(1+2) in the console</h2>
    </div>
  );
}

export default App;
