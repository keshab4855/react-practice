import searchImages from "./api";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const handleOnSubmit = async (term) => {
    const result = await searchImages(term);
    console.log(result);
  };
  return (
    <div className="app">
      <SearchBar handleOnSubmit={handleOnSubmit}></SearchBar>
    </div>
  );
}

export default App;
