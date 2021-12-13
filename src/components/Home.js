import MyCard from './MyCard';
import useFetch from './useFetch';
import {Carousel} from 'react-bootstrap';
import img1 from "../img/about1.jpg";
import img2 from "../img/about2.jpg";
import img3 from "../img/about3.jpg";
import img4 from "../img/about4.jpg";
import img5 from "../img/about5.jpg";
import quiz from "../img/quiz.png";
import allbg from "../img/allbg.jpg";
import FooterComponent from './footerComponent';


function Home() {

	const name="amila";
	

	return (
		<div className="quizhome" style={{backgroundImage: 'url('+allbg+')'}}>  
			
            <Carousel>
                <Carousel.Item>
                    <figure classname="position-relative">
                    <img src={img1} height="50%" width="100%" alt="img1"/>
                    <figcaption>
                    <h1>WELCOME TO Q-Smart</h1>
                    <p>Knowledge is the dawn of your future world. Let's learn</p>
					
					
					
					</figcaption> 
					</figure>
                </Carousel.Item>
                <Carousel.Item>
					<figure classname="position-relative">
                    <img src={img2} height="50%" width="100%" alt="img2"/>
                    <figcaption>
                    <h1>WELCOME TO Q-Smart</h1>
                    <p>whether you plan or crem, find your study jam.</p>
					</figcaption>
                    
					</figure>
                </Carousel.Item>
                <Carousel.Item>
					<figure >
                    <img src={img3} height="50%" width="100%" alt="img3"/>
                    <figcaption classname="position-relative1">
                    <h1>WELCOME TO Q-Smart</h1>
                    <p>whether you plan or crem, find your study jam.</p>
					</figcaption>
					
                    
					</figure>
                </Carousel.Item>
				<Carousel.Item>
					<figure classname="position-relative">
                    <img src={img4} height="50%" width="100%" alt="img4"/>
                    <figcaption>
                    <h1>WELCOME TO Q-Smart</h1>
                    <p>Knowledge is the dawn of your future world. let's learn</p>
					</figcaption>
                    
					</figure>
                </Carousel.Item>
                <Carousel.Item>
					<figure classname="position-relative">
                    <img src={img5} height="50%" width="100%" alt="img5"/>
					<figcaption>
                    <h1>WELCOME TO Q-Smart</h1>
                    <p>whether you plan or crem, find your study jam.</p>
					</figcaption>
                    
					</figure>
                </Carousel.Item>
            </Carousel>	
			
			<Carousel>
                		<Carousel.Item>
						<div  className="subjects" style={{backgroundImage: 'url('+img1+')'}}>
							<h5>
						<img src={quiz }  height="40%" width="10%" alt="img1"/>
						 <a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> English Quiz </a> <t/>
						<img src={quiz} height="40%" width="10%" alt="img1"/>
						<a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> Mathematics Quiz </a>
						<img src={quiz} height="40%" width="10%" alt="img1"/>
						<a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> Science Quiz </a>
						<img src={quiz} height="40%" width="10%" alt="img1"/>
						<a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> ICT Quiz </a>
						<img src={quiz} height="40%" width="10%" alt="img1"/>
						<a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> Commerce Quiz </a>
						
						</h5>
						</div>
						</Carousel.Item>

						<Carousel.Item>
						<div  className="subjects" style={{backgroundImage: 'url('+img2+')'}}>
						<h5>
						<img src={quiz }  height="20%" width="10%" alt="img1"/>
						 <a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> English Quiz... </a> <t/>
						<img src={quiz} height="20%" width="10%" alt="img1"/>
						<a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> Mathematics Quiz... </a>
						<img src={quiz} height="20%" width="10%" alt="img1"/>
						<a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> Science Quiz... </a>
						<img src={quiz} height="20%" width="10%" alt="img1"/>
						<a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> ICt Quiz... </a>
						<img src={quiz} height="20%" width="10%" alt="img1"/>
						<a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> Commerce Quiz... </a>
						
						</h5>
						</div>
						</Carousel.Item>

						<Carousel.Item>
						<div  className="subjects" style={{backgroundImage: 'url('+img3+')'}}>
						<h5>
						<img src={quiz }  height="20%" width="10%" alt="img1"/>
						 <a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> English Quiz... </a> <t/>
						<img src={quiz} height="20%" width="10%" alt="img1"/>
						<a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> Mathematics Quiz... </a>
						<img src={quiz} height="20%" width="10%" alt="img1"/>
						<a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> Science Quiz... </a>
						<img src={quiz} height="20%" width="10%" alt="img1"/>
						<a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> ICT Quiz... </a>
						<img src={quiz} height="20%" width="10%" alt="img1"/>
						<a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> Commerce Quiz... </a>
						
						</h5>
						</div>
						</Carousel.Item>

						<Carousel.Item>
						<div  className="subjects" style={{backgroundImage: 'url('+img4+')'}}>
						<h5>
						<img src={quiz }  height="20%" width="10%" alt="img1"/>
						 <a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> English Quiz... </a> <t/>
						<img src={quiz} height="20%" width="10%" alt="img1"/>
						<a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> Mathematics Quiz... </a>
						<img src={quiz} height="20%" width="10%" alt="img1"/>
						<a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> Science Quiz... </a>
						<img src={quiz} height="20%" width="10%" alt="img1"/>
						<a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> ICT Quiz... </a>
						<img src={quiz} height="20%" width="10%" alt="img1"/>
						<a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> Commerce Quiz... </a>
						
						</h5>
						</div>
						</Carousel.Item>

						<Carousel.Item>
						<div  className="subjects" style={{backgroundImage: 'url('+img5+')'}}>
						<h5>
						<img src={quiz }  height="20%" width="10%" alt="img1"/>
						 <a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> English Quiz... </a> <t/>
						<img src={quiz} height="20%" width="10%" alt="img1"/>
						<a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> Mathematics Quiz... </a>
						<img src={quiz} height="20%" width="10%" alt="img1"/>
						<a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> Science Quiz... </a>
						<img src={quiz} height="20%" width="10%" alt="img1"/>
						<a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> ICT Quiz... </a>
						<img src={quiz} height="20%" width="10%" alt="img1"/>
						<a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q"> Commerce Quiz... </a>
						
						</h5>
						</div>
						</Carousel.Item>
				</Carousel>	

				<div className="feedback1">
					<h1> feedback</h1>
					<form >
				<label>Full Name : </label>
				<input type="text"/>

				<label>Email Address :</label>
				<input type="text"/>

				<label>Feedback</label>
				<textarea type="text"/>

				<button>Submit</button>
			</form>
				</div>
				<br/>
				<br/>
				<footer>
					<FooterComponent/>
				</footer>
			
			
		</div>

	);
}

export default Home;
