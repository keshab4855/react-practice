import React from "react";
import BookShow from "./BookShow";

const BookList = ({ books }) => {
  const renderedBooks = books.map((item, i) => {
    return <BookShow key={item.id} item={item}></BookShow>;
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
