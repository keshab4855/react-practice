import React from "react";

const SearchBar = ({ handleOnSubmit }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    handleFormSubmit(e.target.value);
    console.log("I need to submit the form");
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} action="" type="submit">
        <input type="text" />
      </form>
    </div>
  );
};

export default SearchBar;
