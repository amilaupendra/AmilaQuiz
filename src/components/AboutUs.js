import React from 'react'
import Logo from '../img/logo1.png';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import allbg from "../img/allbg.jpg";
import cover from "../img/cover.jpeg";
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
            <h2 align="center" className="aboutus-h1-1">LEADERBOARD</h2>
        <div className="table" >   
        <table>
        <tr>
          <th>Name</th>
          <th>Marks</th>
          <th>Grade</th>
        </tr>
        <tr>
          <td>Makena Reid</td>
          <td>100</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Jaeden Richard</td>
          <td>100</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Paisley Bell</td>
          <td>95</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Roger Parks</td>
          <td>90</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Amara Jarvis</td>
          <td>85</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Nelson Gonzales</td>
          <td>80</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Anastasia Brooks</td>
          <td>80</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Esperanza Osborn</td>
          <td>75</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Mekhi Alvarez</td>
          <td>74</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Kallie Farrell</td>
          <td>70</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Mattie Martin</td>
          <td>69</td>
          <td>B</td>
        </tr>
      </table>
      </div>
            <hr/>
            <h2 className="aboutus-h1-1">More subjects</h2>
            <br/>

            <p></p>
            <Carousel>
                <Carousel.Item>
                    <h2>ict</h2>
                </Carousel.Item>
                <Carousel.Item>
                    <h2>commerce</h2>
                </Carousel.Item>
                <Carousel.Item>
                    <h2>science </h2>
                </Carousel.Item>
                <Carousel.Item>
                    <h2>english </h2>
                </Carousel.Item>
                <Carousel.Item>
                    <h2>mathematics </h2>
                </Carousel.Item>
            </Carousel>
            
            <hr/>
            
            <hr/>
            
            
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
