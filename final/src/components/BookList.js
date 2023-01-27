import React from "react";
import BookShow from "./BookShow";

const BookList = ({ books, deleteBookById }) => {
  const renderedBooks = books.map((item, i) => {
    return (
      <BookShow
        key={item.id}
        item={item}
        deleteBookById={deleteBookById}
      ></BookShow>
    );
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
