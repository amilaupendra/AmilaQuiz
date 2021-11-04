import React from 'react'
import facebook from "../img/facebook.png";
import linkedin from "../img/linkedin.png";
import youtube from "../img/youtube.png";
import insta from "../img/insta.png";
import bg from "../img/bg.png";

function SignIn() {
    return (
        <div className="contactus">
            <div className="bg">
                    <img src={bg} height="20%" width="20%" alt="img1"/>
             </div>
            <div className="">
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
            <div className=" ">
                    <h5>Social Media Links</h5>
                    <br/>
            <br/>
            <h2 className="aboutus-h1-1"> SOCIAL MEDIA</h2>
            
            <img src={facebook} height="50px" width="50px" alt="img1"></img>
            {/*<p background color="black"><a  href ="https://www.facebook.com/CsupFB/"> facebook</a></p>*/}
            <br/>
            <br/>

            <img src={linkedin} height="50px" width="50px" alt="img1"></img>
            {/*<p background color="black"><a href ="https://www.linkedin.com/company/computer-society-university-of-peradeniya-csup/mycompany/"> <t/> linkedin</a></p>*/}
            <br/>
            <br/>

            <img src={youtube} height="50px" width="50px" alt="img1"></img>
            {/*<p background color="black"><a href ="https://www.youtube.com/c/CSUPComputerSocietyUniversityofPeradeniya"> <t/> youtube</a></p>*/}
            <br/>
            <br/>
            <img src={insta} height="50px" width="50px" alt="img1"></img>
            {/*<p background color="black"><a href ="https://www.instagram.com/csup_insta/"> <t/> Instagram</a></p>*/}
            <br/>
            <br/>
                    
                </div>
        </div>
    )
}

export default SignIn ;
