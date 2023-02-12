import Button from "./Button";
import {
  GoAlert,
  GoBell,
  GoBook,
  GoCloudDownload,
  GoDatabase,
} from "react-icons/go";

function App() {
  return (
    <div className="app">
      <div>
        <Button primary rounded outline>
          <GoBell></GoBell>
          Click Here
        </Button>
      </div>
      <div>
        <Button secondar outline>
          <GoCloudDownload></GoCloudDownload>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success outline>
          <GoDatabase></GoDatabase>
          See Deal!
        </Button>
      </div>
      <div>
        <Button warning outline>
          <GoAlert></GoAlert>
          Hide Adds{" "}
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoBook></GoBook>
          Something
        </Button>
      </div>
    </div>
  );
}

export default App;
