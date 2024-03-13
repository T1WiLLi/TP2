import { useEffect } from "react";
import { qs, qsAll } from "../helper/helper";
import "../styles/components/navbar.css";
import { DarkMode } from "../utils/darkmode";

function Navbar() {

    useEffect(() => {
        new ScrollHandler();
    }, []);

    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html">
                    WeSoft<span id="span_lio">Qc</span>
                </a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="toggler-icon top-bar"></span>
                    <span className="toggler-icon middle-bar"></span>
                    <span className="toggler-icon bottom-bar"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-1 mb-lg-0 align-content-center">
                        <li className="nav-item">
                            <a className="nav-link" target="_self" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" target="_self" href="#games">Games</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" target="_self" href="#team">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_self" href="#">Investors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_self" href="#">Careers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_self" href="#">{<DarkMode/>}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

class ScrollHandler {
    constructor() {
        window.addEventListener('scroll', () => {
            const navbar = qs('.navbar') as HTMLElement;
            const navLinks = qsAll('.nav-link') as NodeListOf<HTMLAnchorElement>;
            const spanLio = qs('#span_lio') as HTMLSpanElement;
            const toggler = qsAll('.toggler-icon') as NodeListOf<HTMLSpanElement>;
            const lsHeight = qs('.landing-section')?.getBoundingClientRect().height as number;
            console.log(lsHeight);
            if (window.scrollY > lsHeight - 100) {
                if (navbar) navbar.classList.add('sticky');
                navLinks.forEach(element => element.classList.add('scroll'));
                if (spanLio) spanLio.classList.add('span-sticky');
                if (toggler) {
                    toggler.forEach(element => element.classList.add('toggle-on'));
                }
            } else {
                if (navbar) navbar.classList.remove('sticky');
                navLinks.forEach(element => element.classList.remove('scroll'));
                if (spanLio) spanLio.classList.remove('span-sticky');
                if (toggler) {
                    toggler.forEach(element => element.classList.remove('toggle-on'));
                }
            }
        });
    }
}

export default Navbar;