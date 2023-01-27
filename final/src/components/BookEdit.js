import React, { useState } from "react";

const BookEdit = ({ item, editBookById }) => {
  const [title, setTitle] = useState(item.title);
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    editBookById(item.id, title);
  };
  return (
    <div>
      <form
        action=""
        onSubmit={handleOnSubmit}
        className="book-edit"
        type="submit"
      >
        <label htmlFor="">Title</label>
        <input onChange={handleOnChange} type="text" value={title} />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
};

export default BookEdit;
