import AOS from "aos";
import "aos/dist/aos.css"
import {useEffect} from "react";
import Typewriter from "typewriter-effect";


function Albums() {

    useEffect(() => {
        setTimeout(()=>{
            AOS.init({duration: 2000})
        }, 1)
    }, []);

    return (
        <div id='headerkhaled'>
            <div className='p-3 mb-2 bg-light text-dark'>
                <div className="container">
                    <img src="/headersupposed.png" alt="" className='header img-fluid rounded'/>
                </div>
                <div className="text-light bg-dark rounded mt-5">
                    <h1 className="text-center" id='slogan'>
                        <Typewriter
                            options={{
                                strings: ['"We the Best Music"'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                </div>

                <div className="container" data-aos="fade-up">
                    <h2 className="text-center" id='recent-songs'>Recent Songs</h2>
                    <div className="row">
                        <div className="col-sm">
                            <img src="/maxresdefault.jpg" alt="" width="100%" height="auto" className="rounded"/>
                        </div>
                        <div className="col-sm">
                            <img src="/DJ_Khaled_-_God_Did.png" alt="" width="100%" height="auto"
                                 className="rounded"/>
                        </div>
                        <div className="col-sm">
                            <img src="/DJ_Khaled_-_Staying_Alive.jpg" alt="" width="100%" height="auto"
                                 className="rounded"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Albums;
