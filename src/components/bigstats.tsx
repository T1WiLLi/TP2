import "../styles/components/bigstats.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function BigStat() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div className="wrapper-stat">
            <h2 data-aos="fade-up" style={{ color: "var(--primary-color)" }}>WeSoftQc is:</h2>
            <div className="stats">
                <div className="stat" data-aos="fade-up" data-aos-delay="100">
                    <h3 style={{ color: "var(--secondary-color)" }}><span>862k+</span> monthly players</h3>
                </div>
                <div className="stat" data-aos="fade-up" data-aos-delay="200">
                    <h3 style={{ color: "var(--secondary-color)" }}><span>76+</span> Million in Gross revenues annually</h3>
                </div>
                <div className="stat" data-aos="fade-up" data-aos-delay="300">
                    <h3 style={{ color: "var(--secondary-color)" }}><span>230+</span> Proud Developers</h3>
                </div>
            </div>
        </div>
    );
}

export default BigStat;
