import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((item, i) => {
      return item.id !== id;
    });
    setBooks(updatedBooks);
  };
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 999), title },
    ];
    setBooks(updatedBooks);
    console.log(books);
  };

  return (
    <div className="app">
      <BookList
        books={books}
        deleteBookById={deleteBookById}
        editBookById={editBookById}
      ></BookList>
      <BookCreate createBook={createBook}></BookCreate>
    </div>
  );
}

export default App;
