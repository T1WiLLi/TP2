import Card from "./components/card";
import Home from "./pages/home"
import pic from "./assets/images/carousel/ac_odyssey.jpg";

function App() {
  return (
    <>
      <Home/>
      <Card gameImage={pic} gameName={"SWORDS & SCLAES - DRAGON RISING"} gameTags={"Action RPG | PC"} gameDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis rhoncus nibh. Phasellus dignissim luctus consectetur. Fusce viverra est non purus ultrices, vel molestie massa tincidunt."} scores={[8.0, 7.9, 86]}/>
    </>
  );
}

export default App
