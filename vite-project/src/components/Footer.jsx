import '@fortawesome/fontawesome-free/css/all.css';
function Footer(){
    return(
        <footer className="text-center text-lg-start custom-bg-primary text-muted" id="footerkhaled">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block custom-text-primary">
                    <span>Social Links:</span>
                </div>
                <div>
                    <a href="https://www.facebook.com/officialdjkhaled/?locale=rw_RW" target='blank' className="me-4 text-reset">
                        <i className="fab fa-facebook-f custom-text-primary"></i>
                    </a>
                    <a href="https://twitter.com/djkhaled?lang=de" target='blank' className="me-4 text-reset">
                        <i className="fab fa-twitter custom-text-primary"></i>
                    </a>
                    <a href="https://www.instagram.com/djkhaled/?hl=de" target='blank' className="me-4 text-reset">
                        <i className="fab fa-instagram custom-text-primary"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UC0Kgvj5t_c9EMWpEDWJuR1Q" target='blank' className="me-4 text-reset">
                        <i className="fab fa-youtube custom-text-primary"></i>
                    </a>
                    <a href="https://music.apple.com/us/artist/dj-khaled/157749142" target='blank' className="me-4 text-reset">
                        <i className="fab fa-apple custom-text-primary"></i>
                    </a>
                    <a href="https://open.spotify.com/intl-de/artist/0QHgL1lAIqAw0HtD7YldmP" target='blank' className="me-4 text-reset">
                        <i className="fab fa-spotify custom-text-primary"></i>
                    </a>
                </div>
            </section>
        </footer>
    )
}

export default Footer;
