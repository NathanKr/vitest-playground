import { useEffect } from "react";
import { sum } from "./logic/utils";

function App() {
  useEffect(() => {
    console.log(sum(1, 2));
  }, []);

  return (
    <div>
      <h2>check sum(1+2) in the console</h2>
    </div>
  );
}

export default App;
