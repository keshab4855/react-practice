import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  return {
    ...state,
    count: state.count + 1,
  };
};
const CounterPage = ({ count, handleOnSubmit }) => {
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: count,
    valueToAdd: 0,
  });
  const increment = () => {
    // const updatedCount = count + 1;
    // return handleOnSubmit(updatedCount);
    dispatch();
  };
  const decrement = () => {
    const updatedCount = count - 1;
    return handleOnSubmit(updatedCount);
  };

  const handleChange = (e) => {
    const finalValue = parseInt(e.target.value);

    // setValueToAdd(finalValue);
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
