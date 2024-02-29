import "../styles/components/card.css";

interface Props {
    gameImage: string;
    gameName: string;
    gameTags: string;
    gameDescription: string;
    scores: [number, number, number];
}

function Card({gameImage, gameName, gameTags, gameDescription, scores}: Props) {
    return (
        <div className="game-card">
            <div className="game-img">
                <img src={gameImage} alt=""/>
            </div>
            <div className="game-header">
                <h2 className="header-header">{gameName}</h2>
                <p className="tags"><span>{gameTags}</span></p>
                <p className="game-description">
                    {gameDescription}
                    <span data-target="">Read More</span>
                </p>
                <div className="wrapper">
                    <div className="steam-btn">
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
                            <div className="score-card">
                                <p className="score">{scores[0]}</p>
                                <p>Gamespot</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="score-card">
                                <p className="score">{scores[1]}</p>
                                <p>IGN</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="score-card">
                                <p className="score">{scores[2]}</p>
                                <p>Metacritic</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;