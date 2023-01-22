import React, { useState } from "react";

const SearchBar = ({ handleOnSubmit }) => {
  const [inputVal, setInputVal] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit(inputVal);
  };

  const handleOnChange = (e) => {
    setInputVal(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} action="" type="submit">
        <input type="text" onChange={handleOnChange} />
      </form>
    </div>
  );
};

export default SearchBar;
