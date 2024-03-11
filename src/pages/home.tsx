import Navbar from "../components/navbar";
import "../styles/pages/home.css";
import GamePortfolio from "../components/gameportfolio";
import CookieConsent from "../utils/cookieconsent";
import BigStat from "../components/bigstats";
import ParticleBackground from "../utils/particles";

function Home() {
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