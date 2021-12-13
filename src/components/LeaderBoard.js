import React from 'react'
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import allbg from "../img/allbg.jpg";
import cover from "../img/cover.jpeg";
import FooterComponent from './footerComponent';


function LeaderBoard() {
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
                    <img src={ cover} height="400px" width="100%" alt="img1"/>
                    
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
              <FooterComponent/>
            </footer>
            
            
 
        </div>
        
    )
}

export default LeaderBoard;
