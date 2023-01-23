import React, { useState } from "react";
import "./SearchBar.css";
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
    <div className="search-bar ">
      <form onSubmit={handleFormSubmit} action="" type="submit">
        <label htmlFor="">Enter Search Term</label>
        <input type="text" onChange={handleOnChange} />
      </form>
    </div>
  );
};

export default SearchBar;
