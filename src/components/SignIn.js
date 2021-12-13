import React from 'react'
import allbg from "../img/allbg.jpg";
import bg from "../img/bg.png";
import FooterComponent from './footerComponent';

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
			 	<FooterComponent/>	
			</footer>
            
        </div>
    )
}

export default SignIn ;
