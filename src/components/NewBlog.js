import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import googleplay from "../img/googleplay.png";
import appstore from "../img/appstore.png";
import Logo from '../img/logo1.png';
import allbg from "../img/allbg.jpg";
function NewBlog() {
	const [title, setTitle] = useState('');

	const [userId, setUserId] = useState('');
	const [body, setBody] = useState('');

	const history = useHistory();

	const addPost = (e) => {
		e.preventDefault();

		const newPost = { title, userId, body };

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(newPost),
		})
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				alert('Added');
				history.push('/');
			});
	};
	return (
		<div className="add-post" style={{backgroundImage: 'url('+allbg+')'}}>
			<h1 >WELCOME</h1>
			<h2>Add Order</h2>

			<form onSubmit={addPost}>
				<label>service type</label>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<label>Email</label>
				<input
					type="text"
					value={userId}
					onChange={(e) => setUserId(e.target.value)}
				/>

				<label>Add Content</label>
				<textarea
					type="text"
					value={body}
					onChange={(e) => setBody(e.target.value)}
				/>

                

				<button>Submit</button>

				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
			</form>
			
			
			
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
			
			</div>
	);
}

export default NewBlog;
