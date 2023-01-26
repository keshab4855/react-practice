import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

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
      {books.length}
      <BookCreate createBook={createBook}></BookCreate>
    </div>
  );
}

export default App;
