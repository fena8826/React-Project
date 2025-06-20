import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "C", "+",
    "="
  ];

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
    
        const evalResult = eval(input);
        setResult(evalResult);
      } catch (e) {
        setResult("Error");
      }
    } else {
   
      if (/[+/.-]$/.test(input) && /[+/.-]/.test(value)) return;

      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
       
        <div className="input">{input|| "0"}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {buttons.map((btn, i) => (
          <button key={i} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;