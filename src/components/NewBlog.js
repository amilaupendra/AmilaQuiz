import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
		<div className="add-post">
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
	);
}

export default NewBlog;
