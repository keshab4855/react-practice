import React from "react";
import { useState } from "react";

const CounterPage = ({ count, handleOnSubmit }) => {
  const [valueToAdd, setValueToAdd] = useState(0);
  const increment = () => {
    const updatedCount = count + 1;
    return handleOnSubmit(updatedCount);
  };
  const decrement = () => {
    const updatedCount = count - 1;
    return handleOnSubmit(updatedCount);
  };

  const handleChange = (e) => {
    const finalValue = parseInt(e.target.value);

    setValueToAdd(finalValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit(count + valueToAdd);
    setValueToAdd(0);
  };
  return (
    <div>
      <div>
        <h1>Count is {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Add a lot!</label>
        <input value={valueToAdd || ""} onChange={handleChange} type="number" />
        <button>Add it</button>
      </form>
    </div>
  );
};

export default CounterPage;
