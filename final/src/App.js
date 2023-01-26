import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    console.log("Need to add book with :", title);
  };

  return (
    <div className="app">
      <BookCreate createBook={createBook}></BookCreate>
    </div>
  );
}

export default App;
