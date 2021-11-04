import React from 'react'
import Logo from '../img/logo1.png';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../img/about1.jpg";
import img2 from "../img/about2.jpg";
import img3 from "../img/about3.jpg";
import facebook from "../img/facebook.png";
import linkedin from "../img/linkedin.png";
import youtube from "../img/youtube.png";
import insta from "../img/insta.png";
import cover from "../img/cover.jpg";



function AboutUs() {
    return (
        <div className="about-image"> 
             <Carousel>
                <Carousel.Item>
                    <img src={cover} height="400px" width="100%" alt="img1"/>
                    
                </Carousel.Item> 
                <Carousel.Item>
                    <img src={cover} height="400px" width="100%" alt="img1"/>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img src={cover} height="400px" width="100%" alt="img1"/>
                    
                </Carousel.Item>
                </Carousel>  
            <h1 ></h1>
            

            <hr/>
            <h2 align="center" className="aboutus-h1-1">PURPOSE</h2>
            <p>•	Creative Code Software Company is a startup organization with a vision for businesses and educational institutions to create the software they need for their organizations.</p>
            
            <hr/>
            <h2 className="aboutus-h1-1">OUR SERVICES</h2>
            <br/>

            <p></p>
            <Carousel>
                <Carousel.Item>
                    <h2>web Development</h2>
                    <img src={img1} height="400px" width="50%" alt="img1"/>
                    <br/>
                    <br/>
                    <h4>more details..</h4>
                    <p>contact us</p>
                    <h3><a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> videos</a></h3>

                </Carousel.Item>
                <Carousel.Item>
                    <h2>moblie App developmnet</h2>
                    <img src={img2} height="400px" width="50%" alt="img1"/>
                    <br/>
                    <br/>
                    <h4>more details..</h4>
                    <p>contact us</p>
                    <h3><a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> videos</a></h3>
                
                </Carousel.Item>
                <Carousel.Item>
                    <h2>General </h2>
                    <img src={img3} height="400px" width="50%" alt="img1"/>
                    <br/>
                    <br/>
                    <h4>more details..</h4>
                    <p>contact us </p>
                    <h3><a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> videos</a></h3>
                
                </Carousel.Item>
            </Carousel>
            
            <hr/>
            
            <hr/>
            <h2 align="center" className="aboutus-h1-1">PAST SERVICES</h2>
            <p>Pricing depends on the needs of the business.Software development can be done by our company for a lifetime warranty  after the sale and only service charges will be levied.</p>
            
            <hr/>
            <br/>
            <img src={Logo}  alt="Logo" width="450" height="300"/>
            <br/>
            <br/>
            <h2 className="aboutus-h1-1"> SOCIAL MEDIA</h2>
            
            <img src={facebook} height="50px" width="50px" alt="img1"></img>
            {/*<p background color="black"><a  href ="https://www.facebook.com/CsupFB/"> facebook</a></p>*/}
            <br/>
            <br/>

            <img src={linkedin} height="50px" width="50px" alt="img1"></img>
            {/*<p background color="black"><a href ="https://www.linkedin.com/company/computer-society-university-of-peradeniya-csup/mycompany/"> <t/> linkedin</a></p>*/}
            <br/>
            <br/>

            <img src={youtube} height="50px" width="50px" alt="img1"></img>
            {/*<p background color="black"><a href ="https://www.youtube.com/c/CSUPComputerSocietyUniversityofPeradeniya"> <t/> youtube</a></p>*/}
            <br/> <br/>

            <img src={insta} height="50px" width="50px" alt="img1"></img>
            {/*<p background color="black"><a href ="https://www.instagram.com/csup_insta/"> <t/> Instagram</a></p>*/}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="">
                <hr/>
                <h4>Contact Us</h4>
                <br/>
                <h5>Our Address</h5>
                    <address>
                        No :460/2<br />
                        Mankada Road<br />
                        Kadawatha.<br />
                        <i className="fa fa-phone"></i>: +94 77 198 5367<br />
                        
                        <i className="fa fa-envelope"></i>: <a href="shonalinethmika998@gmail.com">shonalinethmika998@gmail.com</a>
                    </address>
                
            </div>
        </div>
        
    )
}

export default AboutUs
