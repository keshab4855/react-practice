import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

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
      <BookList books={books} deleteBookById={deleteBookById}></BookList>
      <BookCreate createBook={createBook}></BookCreate>
    </div>
  );
}

export default App;
