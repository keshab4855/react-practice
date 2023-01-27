import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ item, deleteBookById }) => {
  const [showEdit, setShowEdit] = useState(false);
  const deleteHandler = () => {
    deleteBookById(item.id);
  };

  const editHandler = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{item.title}</h3>;
  if (showEdit) {
    content = <BookEdit item={item}></BookEdit>;
  }

  return (
    <div className="book-show">
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
