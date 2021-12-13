import React, { Button } from 'react'
import allbg from "../img/allbg.jpg";
import googleplay from "../img/googleplay.png";
import appstore from "../img/appstore.png";
import Logo from '../img/logo1.png';
import FooterComponent from './footerComponent';
function Registration() {
    return (
        <div className="reg-container" style={{backgroundImage: 'url('+allbg+')'}}>
            

            <h2>Registration For Q-Smart </h2>

			<form >
				<label>Full Name : </label>
				<input type="text"/>

				<label>Email Address :</label>
				<input type="text"/>

				<label>School</label>
				<input type="text"/>

				<label>Grade</label>
				<input type="text"/>

				

                <label> Subject</label>
				ENGLISH <input type="radio" name="year" label="1st year"/>
                MATHEMATICS <input type="radio" name="year" label="2nd year"/>
                SCIENCE <input type="radio" name="3year" label="2nd year"/>
                ICT <input type="radio" name="year" label="3rd yeear"/>
				COMMERCE <input type="radio" name="year" label="3rd yeear"/>
                
				<label>username</label>
				<input type="text"/>

				<label>password</label>
				<input type="text"/>
				
				<label>confirm password</label>
				<input type="text"/>

				<label>Any comment</label>
				<textarea type="text"/>

                
				

				<button>Register Now</button>
			</form>

			<br/>
			<br/>

			<footer>
			<FooterComponent/>
			</footer>
			
        </div>
    )
}

export default Registration
