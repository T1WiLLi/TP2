import { useEffect } from "react";
import "../styles/components/preloader.css";
import { qs } from "../helper/helper";

function Preloader() {

    useEffect(() => {
        const preloader = qs(".preloader") as HTMLDivElement;
        preloader.classList.add('shrink');

        setTimeout(() => {
            preloader.style.display = 'none';
        }, 3000);
    }, []);

    return(
        <div className="preloader position-fixed d-flex flex-column justify-content-center align-items-center overflow-hidden">
            <div className="text-container d-flex flex-column align-items-center justify-content-between overflow-hidden">
                <h1>WeSoftQc</h1>
                <span>Bringing your imagination to life, one pixel at a time.</span>
            </div>
            <div className="spinner-border mt-5" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Preloader;
