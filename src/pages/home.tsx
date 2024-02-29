import Navbar from "../components/navbar";
import "../styles/pages/home.css";
import acMirage from "../assets/images/carousel/ac_mirage.webp";
import acValhalla from "../assets/images/carousel/ac_valhalla.jpeg";
import acOdyssey from "../assets/images/carousel/ac_odyssey.jpg";
import acOrigin from "../assets/images/carousel/ac_origin.jpg";
import GamePortfolio from "../components/gameportfolio";

interface ImageMap {
    [gameNum: string]: string;
}

function Home() {
    const imageMap: ImageMap = {
        "1": acMirage,
        "2": acValhalla,
        "3": acOdyssey,
        "4": acOrigin
    };
    return (
        <>
            <Navbar/>
            <section className="landing-section">
                <div className="background-wrapper">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={imageMap[1]} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={imageMap[2]} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={imageMap[3]} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={imageMap[4]} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-quote">
                    <h1>We Make <span>Awesome Games</span></h1>
                </div>
            </section>
            <GamePortfolio/>
        </>
    );
}

export default Home;