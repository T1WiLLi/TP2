import "../styles/components/bigstats.css";
import "aos/dist/aos.css";
import acMirage from "../assets/images/carousel/ac_mirage.webp";
import acValhalla from "../assets/images/carousel/ac_valhalla.jpeg";
import acOdyssey from "../assets/images/carousel/ac_odyssey.jpg";
import acOrigin from "../assets/images/carousel/ac_origin.jpg";
import { useEffect } from "react";
import AOS from "aos";

interface ImageMap {
    [gameNum: string]: string;
}

function BigStat() {
    useEffect(() => {
        AOS.init();
    }, []);

    const imageMap: ImageMap = {
        "1": acMirage,
        "2": acValhalla,
        "3": acOdyssey,
        "4": acOrigin,
    };

    return (
        <div className="wrapper-stat">
            <div className="background-wrapper">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {Object.values(imageMap).map((image, index) => (
                            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                <img src={image} className="d-block w-100" alt="..." />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <h2 className="bg-stat__header" data-aos="zoom-in">We <span>Are</span></h2>
            <div className="stats">
                {[
                    { count: "862k+", label: "Monthly players" },
                    { count: "$76+", label: "Million in revenues" },
                    { count: "230+", label: "Proud Developers" },
                ].map((item, index) => (
                    <div className="stat" data-aos="fade-up" data-aos-delay={`${index * 100 + 100}`} key={index}>
                        <div className="stat-content">
                            <h3>{item.count}</h3>
                            <h3>{item.label}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BigStat;
