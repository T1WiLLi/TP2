import Card from "./card";
import { GAME_CONFIG } from "../config/gameConfig";
import acMirage from "../assets/images/carousel/ac_mirage.webp";
import acValhalla from "../assets/images/carousel/ac_valhalla.jpeg";
import acOdyssey from "../assets/images/carousel/ac_odyssey.jpg";
import acOrigin from "../assets/images/carousel/ac_origin.jpg";
import "../styles/components/gameportfolio.css";

interface ImageMap {
    [gameNum: string]: string;
}

function GamePortfolio() {
    const imageMap: ImageMap = {
        "1": acMirage,
        "2": acValhalla,
        "3": acOdyssey,
        "4": acOrigin
    };

    return (
        <section className="game-portfolio">
            <div className="container">
                <div className="header-wrapper">
                    <h1 className="header">Our <span>Games</span></h1>
                    <div className="hr"></div>
                </div>
                <p className="desc">At WeSoftQc, we're passionate gamers crafting experiences for fellow enthusiasts. We believe in the magic of gaming to entertain and unite. With each game we create, we strive to immerse players in captivating worlds, sparking joy and excitement with every adventure.Here at Strider games we pride ourselves in delivering rich and polished experiences that our fanbase can enjoy and immerse themselve into.</p>
                {Object.entries(GAME_CONFIG).map(([gameNum, game]) => (
                    <Card 
                        key={gameNum}
                        gameImage={imageMap[gameNum]}
                        gameName={game.name}
                        gameTags={game.tags}
                        gameDescription={game.description}
                        scores={game.scores}
                    />
                ))}
            </div>
        </section>
    );
}

export default GamePortfolio;
