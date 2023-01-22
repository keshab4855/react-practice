import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const handleOnSubmit = (term) => {
    console.log("do a search ", term);
  };
  return (
    <div className="app">
      <SearchBar handleOnSubmit={handleOnSubmit}></SearchBar>
    </div>
  );
}

export default App;
