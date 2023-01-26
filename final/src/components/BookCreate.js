import React, { useState } from "react";

const BookCreate = ({ createBook }) => {
  const [title, setTitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };
  const changeHandler = (e) => {
    const typedTitle = e.target.value;
    setTitle(typedTitle);
  };

  return (
    <div>
      <form action="" type="submit" onSubmit={submitHandler}>
        <label htmlFor="">Title</label>
        <input onChange={changeHandler} value={title} type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default BookCreate;
