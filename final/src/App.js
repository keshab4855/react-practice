import { useState } from "react";
import AnimalShow from "../../final/src/AnimalShow";
import "./App.css";
function getRandomAnimals() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleOnClick = () => {
    setAnimals([...animals, getRandomAnimals()]);
  };
  const renderedAnimals = animals.map((item, index) => {
    console.log(animals);
    return <AnimalShow type={item} key={index}></AnimalShow>;
  });
  return (
    <div className="app">
      <button onClick={handleOnClick}>Add Animal</button>
      <div>{renderedAnimals}</div>
    </div>
  );
}

export default App;
