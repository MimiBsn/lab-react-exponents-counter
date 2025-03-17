import { useState } from "react";

const Counter = ({ counterValue, incrFunction, decrFunction }) => {
  return (
    <div className="counter-container">
      <p className="counter-value">{counterValue}</p>
      <button className="counter-button" onClick={decrFunction}>
        -
      </button>
      <button className="counter-button" onClick={incrFunction}>
        +
      </button>
    </div>
  );
};

export default Counter;
