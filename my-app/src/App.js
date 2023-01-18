import "./App.css";
import "bulma/css/bulma.css";
import ProfileCard from "./components/ProfileCard";
import ALexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <div>Personal Digital Assistance</div>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title={"Alexa"}
                handle={"@alexa99"}
                image={ALexaImage}
              ></ProfileCard>
            </div>
            <div className="column is-3">
              <ProfileCard
                title={"Cortana"}
                handle={"@cortana88"}
                image={CortanaImage}
              ></ProfileCard>
            </div>
            <div className="column is-3">
              <ProfileCard
                title={"Siri"}
                handle={"@siri123"}
                image={SiriImage}
              ></ProfileCard>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
