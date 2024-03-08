import Navbar from "../components/navbar";
import "../styles/pages/home.css";
import acMirage from "../assets/images/carousel/ac_mirage.webp";
import acValhalla from "../assets/images/carousel/ac_valhalla.jpeg";
import acOdyssey from "../assets/images/carousel/ac_odyssey.jpg";
import acOrigin from "../assets/images/carousel/ac_origin.jpg";
import GamePortfolio from "../components/gameportfolio";
import CookieConsent from "../utils/cookieconsent";
import BigStat from "../components/bigstats";
import ParticleBackground from "../utils/particles";

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
            <CookieConsent/>
            <Navbar/>
            <section className="landing-section">
                <div className="background-wrapper">
                    <ParticleBackground />
                </div>
                <div className="header-quote" data-aos="zoom-in" data-aos-duration="1500">
                    <h1>We Make <span>Awesome Games</span></h1>
                </div>
            </section>
            <GamePortfolio/>
            <BigStat/>
        </>
    );
}

export default Home;