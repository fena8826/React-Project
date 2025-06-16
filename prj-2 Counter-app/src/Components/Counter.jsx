import React, { useState, useEffect } from "react";


function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count <= 0) {
      alert("Count cannot go below 0!");
      return; 
    }
    setCount(count - 1);
  };

  const reset = () => setCount(0); 

  return (
    <div className="app">
      <div className="title-line">
        <h1>Counter App</h1>
        <span className="count-inline">{count}</span>
      </div>
      <div className="buttons">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>0</button>
      </div>
    </div>
  );
}

export default Counter; 