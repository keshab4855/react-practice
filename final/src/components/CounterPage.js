import React from "react";

const CounterPage = ({ count, handleOnSubmit }) => {
  const increment = () => {
    const updatedCount = count + 1;
    return handleOnSubmit(updatedCount);
  };
  const decrement = () => {
    const updatedCount = count - 1;
    return handleOnSubmit(updatedCount);
  };
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterPage;
