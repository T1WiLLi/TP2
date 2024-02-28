
function navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-transparent">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html">
                    Ovation Électr<span id="span_lio">ique.</span>
                </a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="toggler-icon top-bar"></span>
                    <span className="toggler-icon middle-bar"></span>
                    <span className="toggler-icon bottom-bar"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-1 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" target="_self" href="#">Accueil</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" target="_self" href="#education">Nos Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" target="_self" href="#equip">Notre équipe</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_self" href="#">À propos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}