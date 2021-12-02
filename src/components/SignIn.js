import React from 'react'
import allbg from "../img/allbg.jpg";
import bg from "../img/bg.png";
import googleplay from "../img/googleplay.png";
import appstore from "../img/appstore.png";
import Logo from '../img/logo1.png';

function SignIn() {
	
    return (
	

        <div className="contactus"style={{backgroundImage: 'url('+allbg+')'}}> 

            <div className="bg">
                    <img src={bg} height="20%" width="20%" alt="img1"/>
             </div>
			<div className="signin">
				
			 <form >
				
                
				<label>username</label>
				<input type="text"/>

				<label>password</label>
				<input type="text"/>
				

                
				

				<button>Sign In</button>
				<br/>
				<br/>
			</form>

			</div>
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

export default SignIn ;
