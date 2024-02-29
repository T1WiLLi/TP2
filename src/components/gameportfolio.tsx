import Card from "./card";
import { GAME_CONFIG } from "../config/gameConfig";
import { GAME_MODAL_CONFIG } from '../config/gameModalConfig'; // Import game modal config
import acMirage from "../assets/images/game-sel/ac-mirage.webp";
import acValhalla from "../assets/images/game-sel/ac-valhalla.jpg";
import acOdyssey from "../assets/images/game-sel/ac-odyssey.jpg";
import acOrigin from "../assets/images/game-sel/ac-origin.jpg";
import acBlackFlag from "../assets/images/game-sel/ac-black_flag.webp";
import "../styles/components/gameportfolio.css";
import { useState } from "react";
import CardModal from "../components/cardmodal";

interface ImageMap {
    [gameNum: string]: string;
}

function GamePortfolio() {
    const imageMap: ImageMap = {
        "1": acMirage,
        "2": acValhalla,
        "3": acOdyssey,
        "4": acOrigin,
        "5": acBlackFlag
    };

    const [openModalId, setOpenModalId] = useState<string | null>(null);

    const handleOpenModal = (gameId: string) => {
        setOpenModalId(gameId);
    };

    const handleCloseModal = () => {
        setOpenModalId(null);
    }

    return (
        <section id="games" className="game-portfolio">
            <div className="container">
                <div className="header-wrapper">
                    <h1 className="header">Our <span>Games</span></h1>
                    <div className="hr"></div>
                </div>
                <p className="desc">At WeSoftQc, we're passionate gamers crafting experiences for fellow enthusiasts. We believe in the magic of gaming to entertain and unite. With each game we create, we strive to immerse players in captivating worlds, sparking joy and excitement with every adventure.</p>
                {Object.entries(GAME_CONFIG).map(([gameNum, game]) => (
                    <Card 
                        key={gameNum}
                        id={parseInt(gameNum)}
                        gameImage={imageMap[gameNum]}
                        gameName={game.name}
                        gameTags={game.tags}
                        gameDescription={game.description}
                        scores={game.scores}
                        onReadMoreClick={handleOpenModal}
                    />
                ))}
            </div>
        {openModalId && (
                <CardModal
                    isOpen={true}
                    onClose={handleCloseModal}
                    gameName={GAME_CONFIG[openModalId].name}
                    gameData={{
                        header1: GAME_MODAL_CONFIG[openModalId].header1,
                        text1: GAME_MODAL_CONFIG[openModalId].text1,
                        header2: GAME_MODAL_CONFIG[openModalId].header2,
                        text2: GAME_MODAL_CONFIG[openModalId].text2
                    }}
                />
            )}
        </section>
    );
}

export default GamePortfolio;
