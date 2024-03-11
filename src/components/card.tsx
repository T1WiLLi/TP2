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

    const sourceNames:string[] = ['Gamespot', 'IGN', 'Metacritic'];

    return (
        <div className="game-card d-flex" data-aos="fade-right" data-aos-duration="500" data-aos-delay={100 * id}>
            <div className="game-img position-relative">
                <img src={gameImage} alt=""/>
            </div>
            <div className="game-header">
                <h2 className="header-header mt-0">{gameName}</h2>
                <p className="tags"><span>{gameTags}</span></p>
                <p className="game-description">
                    {gameDescription}
                    <span onClick={handleReadMoreClick} data-target={id}> Read More</span>
                </p>
                <div className="wrapper d-flex align-items-center justify-content-between mt-5">
                    <div className="steam-btn box-shadow">
                        <a href="#" className="d-flex align-items-center text-decoration-none border-none p-2">
                            <i className="fa-brands fa-steam me-3"></i>
                            <p className="m-0 fw-bold">
                                GET IT ON
                                <br />
                                <span>STEAM</span>
                            </p>
                        </a>
                    </div>
                    <div className="d-flex" style={{gap: '0.75rem'}}>
                        {scores.map((score:number, index) => (
                            <a key={index} href="#">
                                <div className="score-card box-shadow d-inline-block m-0 p-2">
                                    <p className="score pb-0 fw-bold">{score}</p>
                                    <p>{sourceNames[index]}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
