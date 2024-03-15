import Navbar from "../components/navbar";
import "../styles/pages/home.css";
import GamePortfolio from "../components/gameportfolio";
import CookieConsent from "../utils/cookieconsent";
import BigStat from "../components/bigstats";
import ParticleBackground from "../utils/particles";
import Team from "../components/team";
import Investor from "../components/investor";
import Hiring from "../components/hiring";
import GetInTouch from "../components/getintouch";
import Footer from "../components/footer";

function Home() {
    return (
        <>
            <CookieConsent/>
            <Navbar/>
            <section className="landing-section position-relative d-flex flex-row justify-content-center">
                <div className="background-wrapper position-absolute overflow-hidden">
                    <ParticleBackground />
                </div>
                <div className="header-quote d-flex justify-content-center align-items-center text-center" data-aos="zoom-in" data-aos-duration="1500">
                    <h1>We Make <span>Awesome Games</span></h1>
                </div>
            </section>
            <GamePortfolio/>
            <BigStat/>
            <Team/>
            <Investor/>
            <Hiring/>
            <GetInTouch/>
            <Footer/>
        </>
    );
}

export default Home;