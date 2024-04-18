import "bootstrap"
import './App.css'
import Header from "./components/Header.jsx";
import Albums from "./components/albums.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";


function HeaderHero() {
    return (
        <>
            <Header/>
            <Albums/>
            <About/>
            <br/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default HeaderHero