import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === "change-value-to-add") {
    return {
      ...state,
      valueToAdd: action.payload,
    };
  }
  return state;
};
const CounterPage = ({ count, handleOnSubmit }) => {
  const [state, dispatch] = useReducer(reducer, {
    count: count,
    valueToAdd: 0,
  });
  const increment = () => {
    dispatch({
      type: "increment",
    });
  };
  const decrement = () => {
    const updatedCount = count - 1;
    return handleOnSubmit(updatedCount);
  };

  const handleChange = (e) => {
    const finalValue = parseInt(e.target.value);

    dispatch({
      type: "change-value-to-add",
      payload: finalValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handleOnSubmit(count + valueToAdd);
    // setValueToAdd(0);
  };
  return (
    <div>
      <div>
        <h1>Count is {state.count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
        />
        <button>Add it</button>
      </form>
    </div>
  );
};

export default CounterPage;
