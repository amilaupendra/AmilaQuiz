import React, { Button } from 'react'
import allbg from "../img/allbg.jpg";
import googleplay from "../img/googleplay.png";
import appstore from "../img/appstore.png";
import Logo from '../img/logo1.png';

function Registration() {
    return (
        <div className="reg-container" style={{backgroundImage: 'url('+allbg+')'}}>
            

            <h2>Registration For Our services </h2>

			<form >
				<label>Full Name : </label>
				<input type="text"/>

				<label>Email Address :</label>
				<input type="text"/>

                <label> Service</label>
				WEB DEVELOPMENT SERVICES <input type="radio" name="year" label="1st year"/>
                MOBILE APP DEVELOPMENT SERVICES <input type="radio" name="year" label="2nd year"/>
                WEB DEVELOPMENT & MOBILE APP DEVELOPMENT SERVICES <input type="radio" name="3year" label="2nd year"/>
                OTHER <input type="radio" name="year" label="3rd yeear"/>
                

				<label>Any comment</label>
				<textarea type="text"/>

                
				

				<button>Register Now</button>
			</form>

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

export default Registration
