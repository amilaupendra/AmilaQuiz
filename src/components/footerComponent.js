import React from "react";
import googleplay from "../img/googleplay.png";
import appstore from "../img/appstore.png";
import Logo from '../img/logo1.png';


function FooterComponent(){
    return(
        <div>
				<div className="footer-container" >
					<div className="right-menu">
						<div className="logo">
								<img src={Logo} alt="Logo" />
						</div>
							
					</div>
					
					<div className="left-menu">
							
						<hr/>
						
						<address>	
							A.M.A.U.Adhikari<br/>
							No :460/1,<br />
							Nadalagamuwa South<br />
							Wadumunnegedara.<br /><br/>
							<i className="fa fa-phone"></i>:   +94 705988366<br />
							<i className="fa fa-envelope"></i>:<a href="amilaupendra5@gmail.com">amilaupendra5@gmail.com</a>

						</address>
							<br/>
							<br/>
						
						
							<div className="logo1">
								<img src={googleplay} alt="Logo" width="60%" height="10%" />
							</div>
							<div className="logo1">
								<img src={appstore} alt="Logo" width="110%" height="10%" />
							</div>
						</div>
						
						
				</div>

        </div>
    );

}

export default FooterComponent;
