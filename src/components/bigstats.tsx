import "../styles/components/bigstats.css";
import "aos/dist/aos.css";
import acMirage from "../assets/images/carousel/ac_mirage.webp";
import acValhalla from "../assets/images/carousel/ac_valhalla.jpeg";
import acOdyssey from "../assets/images/carousel/ac_odyssey.jpg";
import acOrigin from "../assets/images/carousel/ac_origin.jpg";

interface ImageMap {
    [gameNum: string]: string;
}

function BigStat() {

    const imageMap: ImageMap = {
        "1": acMirage,
        "2": acValhalla,
        "3": acOdyssey,
        "4": acOrigin
    };

    return (
        <div className="wrapper-stat">
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
            <h2 data-aos="fade-up">We <span>Are</span></h2>
            <div className="stats">
                <div className="stat" data-aos="fade-up" data-aos-delay="100">
                    <div className="stat-content">
                        <h3>862k+</h3>
                        <h3>Monthly players</h3>
                    </div>
                </div>
                <div className="stat" data-aos="fade-up" data-aos-delay="200">
                    <div className="stat-content">
                        <h3>76+</h3>
                        <h3>Millions in revenues</h3>
                    </div>
                </div>
                <div className="stat" data-aos="fade-up" data-aos-delay="300">
                    <div className="stat-content">
                        <h3>230+</h3>
                        <h3>Proud Developers</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BigStat;
