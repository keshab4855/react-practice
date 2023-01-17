import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div>
      <div>Personal Digital Assistance</div>
      <ProfileCard title={"Alexa"} handle={"@alexa99"}></ProfileCard>
      <ProfileCard title={"Cortana"} handle={"@cortana88"}></ProfileCard>
      <ProfileCard title={"Siri"} handle={"@siri123"}></ProfileCard>
    </div>
  );
}

export default App;
