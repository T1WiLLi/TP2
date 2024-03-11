import "../styles/components/bigstats.css";
import "aos/dist/aos.css";
import acMirage from "../assets/images/carousel/ac_mirage.webp";
import acValhalla from "../assets/images/carousel/ac_valhalla.jpeg";
import acOdyssey from "../assets/images/carousel/ac_odyssey.jpg";
import acOrigin from "../assets/images/carousel/ac_origin.jpg";
import { useEffect } from "react";
import AOS from "aos";
import { Container } from "react-bootstrap";

interface ImageMap {
    [gameNum: string]: string;
}

interface Statistic {
    count: string;
    label: string;
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

    const stats:Statistic[] = [
        { count: "862k+", label: "Monthly players" },
        { count: "$76+", label: "Million in revenues" },
        { count: "230+", label: "Proud Developers" }
    ]

    return (
        <div className="bigstat__wrapper-stat position-relative d-flex flex-column align-items-center justify-content-center">
            <div className="bigstat__background-wrapper position-absolute overflow-hidden">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {Object.values(imageMap).map((image, index) => (
                            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                <img src={image} className="d-block w-100 position-relative d-block" alt="..." />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <h2 className="bigstat__header mb-4" data-aos="zoom-in">We <span>Are</span></h2>
            <Container className="bigstat__stats d-flex justify-content-center">
                {stats.map((item, index) => (
                    <div className="bigstat__stat rounded text-center m-3 p-1 py-4 px-3" data-aos="fade-up" data-aos-delay={`${index * 100 + 100}`} key={index}>
                        <div className="bigstat__stat-content d-flex">
                            <h3 className="m-0 d-flex align-items-center fw-bold">{item.count}</h3>
                            <h3 className="fw-bolder">{item.label}</h3>
                        </div>
                    </div>
                ))}
            </Container>
        </div>
    );
}

export default BigStat;
