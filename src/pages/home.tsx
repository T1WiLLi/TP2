import Navbar from "../components/navbar";
import "../styles/pages/home.css";
import bg_image from "../assets/images/carousel/ac_mirage.webp";

function Home() {
    return (
        <>
            <Navbar/>
            <section className="landing-section">
                <div className="background-wrapper">
                    <img src={bg_image} alt="" />
                </div>
                <div className="header-quote">
                    <h1>We Make <span>Awesome Games</span></h1>
                </div>
            </section>
        </>
    );
}

export default Home;