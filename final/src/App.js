import Button from "./Button";

function App() {
  return (
    <div className="app">
      <div>
        <Button primary rounded outline>
          Click Here
        </Button>
      </div>
      <div>
        <Button secondar outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success outline>
          See Deal!
        </Button>
      </div>
      <div>
        <Button warning outline>
          Hide Adds{" "}
        </Button>
      </div>
      <div>
        <Button danger outline>
          Something
        </Button>
      </div>
    </div>
  );
}

export default App;
