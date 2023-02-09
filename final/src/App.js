import Button from "./Button";

function App() {
  return (
    <div className="app">
      <div>
        <Button primary>Click Here</Button>
      </div>
      <div>
        <Button secondary>Buy Now!</Button>
      </div>
      <div>
        <Button success>See Deal!</Button>
      </div>
      <div>
        <Button warning>Hide Adds </Button>
      </div>
      <div>
        <Button danger>Something</Button>
      </div>
    </div>
  );
}

export default App;
