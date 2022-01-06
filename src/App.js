import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [, setDummy] = useState({});
  const value = useRef(0);

  console.log(value);

  const onIncrease = () => {
    setDummy({});
    value.current += 1;
  };

  return (
    <div className="App">
      <h1>Hello Khan</h1>
      <h2>Start your React future!</h2>
      <button onClick={onIncrease}>Increase Ref value</button>
    </div>
  );
}
