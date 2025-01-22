import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const IncreaseValue = () => {
    setCount(count + 1);
  };
  const DecreaseValue = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <p style={{ color: "magenta" }}>{count}</p>
      <button onClick={IncreaseValue}>Increment</button>
      <button onClick={DecreaseValue}>Decrement</button>
    </div>
  );
}
