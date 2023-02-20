import { useState } from "react";
import CounterPage from "./components/CounterPage";

function App() {
  const [count, setCount] = useState(10);
  const handleOnSubmit = (updatedCount) => {
    setCount(updatedCount);
  };
  return (
    <div>
      <CounterPage count={count} handleOnSubmit={handleOnSubmit} />
    </div>
  );
}

export default App;
