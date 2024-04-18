import AOS from "aos";
import "aos/dist/aos.css"
import {useEffect} from "react";

function About() {

    useEffect(() => {
        setTimeout(()=>{
            AOS.init({duration: 1000})
        }, 1)
    }, []);

    return (
        <div>
            <br/>
            <div className='container' id='about-me' data-aos="fade-up">
                <div className='row justify-content-center'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <img src="./public/djkhaled.avif" alt="" width="100%"
                                     className='img-fluid rounded'/> <br/>
                            </div>
                            <div className="col-lg-9">
                                <p className='text-center bg-light'>Welcome to the world of DJ Khaled, where music
                                    meets inspiration, and success is not just a goal but a way of life. DJ Khaled,
                                    a name synonymous with innovation, passion, and unrelenting dedication to his
                                    craft, has carved a remarkable path in the music industry and beyond. <br/>
                                    <br/> With a career spanning decades, DJ Khaled has cemented his position as one
                                    of the most influential figures in contemporary music. From his early days as a
                                    DJ and radio personality to becoming a chart-topping producer, acclaimed artist,
                                    and multimedia mogul, Khaled`s journey embodies the spirit of perseverance and
                                    the pursuit of greatness.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About