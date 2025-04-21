import { useState } from "react";
import "./App.css";

function App() {
  const [counter, methods] = useState(0);

  const addValue = () => {
    methods((prevCounter) => prevCounter + 4);
  };

  const removeValue = () => {
    methods((prevCounter) => prevCounter - 1);
    methods((prevCounter) => prevCounter - 1);
    methods((prevCounter) => prevCounter - 1);
    methods((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <h1>HELLO EVERYONE : {counter}</h1>
      <h2>CURRENT VALUE : {counter}</h2>
      <button onClick={addValue}>ADD</button>{" "}
      <button onClick={removeValue}>REMOVE</button>
      <p>FOOTER : {counter}</p>
    </>
  );
}

export default App;
