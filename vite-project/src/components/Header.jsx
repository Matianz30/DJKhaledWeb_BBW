import {useState} from "react";

function Header () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ${isMenuOpen ? 'show-menu' : ''}">
            <a className="navbar-brand" href="#">DJ Khaled</a>
            <button className="navbar-toggler" type="button" onClick={toggleMenu}
                    style={{color: 'transparent', border: 'none'}}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#headerkhaled">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#recent-songs">Recent Albums</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#slogan">About me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#footerkhaled">Socials</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
