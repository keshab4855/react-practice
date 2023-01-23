import searchImages from "./api";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const handleOnSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className="app">
      <SearchBar handleOnSubmit={handleOnSubmit}></SearchBar>
      <ImageList images={images}></ImageList>
    </div>
  );
}

export default App;
