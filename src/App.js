import { useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const inputRef = useRef();
  const divRef = useRef();

  const onFocusButton = () => {
    inputRef.current.focus();
  };

  const onDivBorder = () => {
    divRef.current.style.border = "5px solid black";
    divRef.current.style.backgroundColor = "blue";
    divRef.current.style.color = "white";
  };

  useEffect(() => {
    console.log(inputRef.current);
  });
  return (
    <div ref={divRef} className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input ref={inputRef} placeholder="Buraya yazılır" />
      <button onClick={onFocusButton}>Input'a Focus ol</button>
      <button onClick={onDivBorder}>Div'e border ekle</button>
    </div>
  );
}
