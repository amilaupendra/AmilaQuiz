import React, { Button } from 'react'



function Registration() {
    return (
        <div className="reg-container">
            

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

			<div className="contactus-new">
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

export default Registration
