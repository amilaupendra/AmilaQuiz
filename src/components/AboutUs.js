import React from 'react'
import Logo from '../img/logo1.png';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../img/about1.jpg";
import img2 from "../img/about2.jpg";
import img3 from "../img/about3.jpg";
import allbg from "../img/allbg.jpg";
import cover from "../img/cover.jpg";
import googleplay from "../img/googleplay.png";
import appstore from "../img/appstore.png";


function AboutUs() {
    return (
        <div className="about-image" style={{backgroundImage: 'url('+allbg+')'}}> 
        
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
            
            <br/>
            <br/>
            
            <footer>
			<div className="footer-container" >
			<div className="right-menu">
				<div className="logo">
						<img src={Logo} alt="Logo" />
					</div>
					
				</div>
				<div className="left-menu">
					
					<hr/>
                
                    <address>
						Q-Smart<br/>
						A.M.A.U.Adhikari<br/>
                        No :465/1,<br />
                        Nadalagamuwa dakuna<br />
                        Wadumunnegedara.<br />
                        <i className="fa fa-phone"></i>: +94 705988366<br />
                        <i className="fa fa-envelope"></i>: <a href="amilaupendra5@gmail.com">amilaupendra5@gmail.com</a>
						<br/>
						<br/>
                    </address>
					<br/>
					<br/>
				</div>
				
					<div className="logo1">
						<img src={googleplay} alt="Logo" width="60%" height="10%" />
					</div>
					<div className="logo1">
						<img src={appstore} alt="Logo" width="110%" height="10%" />
					</div>
				
				
            </div>
			</footer>
        </div>
        
    )
}

export default AboutUs
