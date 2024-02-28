import Navbar from "../components/navbar";
import "../styles/pages/home.css";
import bg_image from "../assets/images/carousel/ac_mirage.webp";

function Home() {
    return (
        <>
            <Navbar/>
            <header>
                <div className="header__background"><img src={bg_image} alt="" /></div>
                <div className="header__intro">
                    <h1>WeSoft <span>Pixelating Imagination</span></h1>
                </div>
            </header>
        </>
    );
}

export default Home;