import React, { useEffect, useRef, useState } from "react";
import Card from "./card";
import CardModal from "../components/cardmodal";
import { GAME_CONFIG } from "../config/gameConfig";
import { GAME_MODAL_CONFIG } from "../config/gameModalConfig";
import acMirage from "../assets/images/game-sel/ac-mirage.webp";
import acValhalla from "../assets/images/game-sel/ac-valhalla.jpg";
import acOdyssey from "../assets/images/game-sel/ac-odyssey.jpg";
import acOrigin from "../assets/images/game-sel/ac-origin.jpg";
import acBlackFlag from "../assets/images/game-sel/ac-black_flag.webp";
import "../styles/components/gameportfolio.css";
import { Container, Row, Col } from "react-bootstrap";

interface ImageMap {
  [gameNum: string]: string;
}

const imageMap: ImageMap = {
  "1": acMirage,
  "2": acValhalla,
  "3": acOdyssey,
  "4": acOrigin,
  "5": acBlackFlag,
};

const GamePortfolio: React.FC = () => {
  const [openModalId, setOpenModalId] = useState<string | null>(null);
  const hrRef = useRef<HTMLDivElement>(null);
  const [hrVisible, setHrVisible] = useState(false);

  const handleOpenModal = (gameId: string) => {
    setOpenModalId(gameId);
  };

  const handleCloseModal = () => {
    setOpenModalId(null);
  };

  useEffect(() => {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setHrVisible(true);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    if (hrRef.current) {
        observer.observe(hrRef.current);
    }

    return () => {
        if (hrRef.current) {
            observer.unobserve(hrRef.current);
        }
    };
  }, []);

  return (
    <section id="games" className="game-portfolio d-flex">
      <Container className="max-width-container d-flex flex-column">
        <div className="header-wrapper d-flex gap-5">
          <h1 className="header" data-aos="fade-down" data-aos-duration="1500">
            Our <span>Games</span>
          </h1>
          <div className={`hr ${hrVisible ? "grow-from-left show" : "grow-from-left"}`} ref={hrRef}></div>
        </div>
        <p className="desc">
          At WeSoftQc, we're passionate gamers crafting experiences for fellow enthusiasts. We believe in the magic of gaming to entertain and unite. With each game we create, we strive to immerse players in captivating worlds, sparking joy and excitement with every adventure.
        </p>
        <Row className="g-5 d-flex flex-column">
          {Object.entries(GAME_CONFIG).map(([gameNum, game]) => (
            <Col key={gameNum}>
              <Card
                id={parseInt(gameNum)}
                gameImage={imageMap[gameNum]}
                gameName={game.name}
                gameTags={game.tags}
                gameDescription={game.description}
                scores={game.scores}
                onReadMoreClick={handleOpenModal}
              />
            </Col>
          ))}
        </Row>
      </Container>
      {openModalId && (
        <CardModal
          isOpen={true}
          onClose={handleCloseModal}
          gameName={GAME_CONFIG[openModalId].name}
          gameData={GAME_MODAL_CONFIG[openModalId]}
        />
      )}
    </section>
  );
};

export default GamePortfolio;
