import Card from "./card";
import pic from "../assets/images/carousel/ac_odyssey.jpg";

function GamePortfolio() {
    return (
        <>
            <section className="game-portfolio">
                <Card gameImage={pic} gameName={"SWORDS & SCLAES - DRAGON RISING"} gameTags={"Action RPG | PC"} gameDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis rhoncus nibh. Phasellus dignissim luctus consectetur. Fusce viverra est non purus ultrices, vel molestie massa tincidunt."} scores={[8.0, 7.9, 86]}/>
            </section>
        </>
    );
}

export default GamePortfolio;