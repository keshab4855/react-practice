import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ item, deleteBookById, editBookById }) => {
  const [showEdit, setShowEdit] = useState(false);
  const deleteHandler = () => {
    deleteBookById(item.id);
  };

  const editHandler = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    editBookById(id, newTitle);
  };

  let content = <h3>{item.title}</h3>;
  if (showEdit) {
    content = <BookEdit item={item} handleSubmit={handleSubmit}></BookEdit>;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${item.id}/300/200`} alt="books" />
      <div>{content}</div>
      {/* {item.title} */}
      <div className="actions">
        <button className="edit" onClick={editHandler}>
          Edit
        </button>
        <button className="delete" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
