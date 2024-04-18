import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css"

function Contact() {

    useEffect(() => {
        setTimeout(()=>{
            AOS.init({duration: 1000})
        }, 1)
    }, []);

    return (
        <div className='bg-light' id='contact' data-aos="fade-up">
            <div className='container'>
                <h1>Contact us</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Message</label>
                        <input className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <br/>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <br/>
            </div>
        </div>
    )
}

export default Contact