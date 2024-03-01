import "../styles/components/card.css";

interface CardProps {
    id: number;
    gameImage: string;
    gameName: string;
    gameTags: string;
    gameDescription: string;
    scores: [number, number, number];
    onReadMoreClick?: (id: string) => void;
}

const Card: React.FC<CardProps> = ({ id, gameImage, gameName, gameTags, gameDescription, scores, onReadMoreClick }) => {
    const handleReadMoreClick = () => {
        if (onReadMoreClick) {
            onReadMoreClick(id.toString());
        }
    };

    return (
        <div className="game-card" data-aos="fade-right" data-aos-duration="500" data-aos-delay={100 * id}>
            <div className="game-img">
                <img src={gameImage} alt=""/>
            </div>
            <div className="game-header">
                <h2 className="header-header">{gameName}</h2>
                <p className="tags"><span>{gameTags}</span></p>
                <p className="game-description">
                    {gameDescription}
                    <span onClick={handleReadMoreClick} data-target={id}> Read More</span>
                </p>
                <div className="wrapper">
                    <div className="steam-btn box-shadow">
                        <a href="#">
                            <i className="fa-brands fa-steam"></i>
                            <p>
                                GET IT ON
                                <br />
                                <span>STEAM</span>
                            </p>
                        </a>
                    </div>
                    <div className="reviews">
                        <a href="#">
                            <div className="score-card box-shadow">
                                <p className="score">{scores[0]}</p>
                                <p>Gamespot</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="score-card box-shadow">
                                <p className="score">{scores[1]}</p>
                                <p>IGN</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="score-card box-shadow">
                                <p className="score">{scores[2]}</p>
                                <p>Metacritic</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
