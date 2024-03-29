import { useState } from "react";

// Counter.jsx
const Counter = () => {
  let count = 0;
  const [i, setI] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const onClickDiv = () => {
    if (inputValue !== 0) setI(i / inputValue);
    else alert("0말고 다른거 넣어주세요");
  };

  return (
    <div>
      <h1>{i}</h1>
      <input
        type="number"
        onChange={(e) => setInputValue(Number(e.target.value))}
        value={inputValue}
      />
      <br></br>
      <button onClick={() => setI(i + inputValue)}>+</button>
      <button onClick={() => setI(i - inputValue)}>-</button>
      <button onClick={() => setI(i * inputValue)}>x</button>
      {inputValue != 0 ? <button onClick={onClickDiv}>/</button> : null}

      <br></br>
      <br></br>
      <br></br>
      <button onClick={() => setI(i + 1)}>up</button>
      <button onClick={() => console.log(count)}>check</button>
    </div>
  );
};
export default Counter;
