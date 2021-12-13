import React from 'react';
import allbg from "../img/allbg.jpg";
import quiz2 from "../img/quiz2.jpg";
import FooterComponent from './footerComponent';
function NewBlog() {
		
	return (
		<div className="add-post" style={{backgroundImage: 'url('+allbg+')'}}>
			<h1 >WELCOME</h1>
		
			<div>
			<div class="container my-4">
				<p class="font-weight-bold">choose subject</p>

  				<select class="mdb-select md-form" searchable="Search here..">
    			<option value="" disabled selected>Choose your subject</option>
    			<option value="1">English</option>
    			<option value="2">Mathematics</option>
    			<option value="3">Science</option>
    			<option value="4">ICT</option>
    			<option value="5">Commerce</option>
				
    			
  				</select>

			</div>

			<div class="container my-4">
				<p class="font-weight-bold">choose quiz</p>

  				<select class="mdb-select md-form" searchable="Search here..">
    			<option value="" disabled selected>Choose your quiz</option>
    			<option value="1">Quiz 1</option>
    			<option value="2">Quiz 2</option>
    			<option value="3">Quiz 3</option>
    			<option value="4">Quiz 4</option>
    			
  				</select>

			</div>
			</div>
			<h2>English</h2>
		<div class="card-group">
			
  				<div class="card">
				  <p></p>
  					<img src={quiz2} alt="Logo" width="50%" height="50%" />
    				<div class="card-body">
						
      				<h5 class="card-title">Quiz 1</h5>
    				</div>
  				</div>
			

			
				<div class="card">
	  				<p></p>
	  				<img src={quiz2} alt="Logo" width="50%" height="50%" />
    				<div class="card-body">
      					<h5 class="card-title">Quiz 2</h5>
      
    				</div>
  				</div>

				  <div class="card">
	  				<p></p>
	  				<img src={quiz2} alt="Logo" width="50%" height="50%" />
    				<div class="card-body">
      					<h5 class="card-title">Quiz 3</h5>
      
    				</div>
  				</div>

				  <div class="card">
	  				<p></p>
	  				<img src={quiz2} alt="Logo" width="50%" height="50%" />
    				<div class="card-body">
      					<h5 class="card-title">Quiz 4</h5>
      
    				</div>
  				</div>
 
		</div>
		<h2>Mathematics</h2>
		<div class="card-group">
  				<div class="card">
				  <p></p>
  					<img src={quiz2} alt="Logo" width="50%" height="50%" />
    				<div class="card-body">
						
      				<h5 class="card-title">Quiz 1</h5>
    				</div>
  				</div>
			

			
				<div class="card">
	  				<p></p>
	  				<img src={quiz2} alt="Logo" width="50%" height="50%" />
    				<div class="card-body">
      					<h5 class="card-title">Quiz 2</h5>
      
    				</div>
  				</div>

				  <div class="card">
	  				<p></p>
	  				<img src={quiz2} alt="Logo" width="50%" height="50%" />
    				<div class="card-body">
      					<h5 class="card-title">Quiz 3</h5>
      
    				</div>
  				</div>

				  <div class="card">
	  				<p></p>
	  				<img src={quiz2} alt="Logo" width="50%" height="50%" />
    				<div class="card-body">
      					<h5 class="card-title">Quiz 4</h5>
      
    				</div>
  				</div>
 
		</div>
		<h2>Science</h2>
		<div class="card-group">
			
  				<div class="card">
				  <p></p>
  					<img src={quiz2} alt="Logo" width="50%" height="50%" />
    				<div class="card-body">
						
      				<h5 class="card-title">Quiz 1</h5>
    				</div>
  				</div>
			

			
				<div class="card">
	  				<p></p>
	  				<img src={quiz2} alt="Logo" width="50%" height="50%" />
    				<div class="card-body">
      					<h5 class="card-title">Quiz 2</h5>
      
    				</div>
  				</div>

				  <div class="card">
	  				<p></p>
	  				<img src={quiz2} alt="Logo" width="50%" height="50%" />
    				<div class="card-body">
      					<h5 class="card-title">Quiz 3</h5>
      
    				</div>
  				</div>

				  <div class="card">
	  				<p></p>
	  				<img src={quiz2} alt="Logo" width="50%" height="50%" />
    				<div class="card-body">
      					<h5 class="card-title">Quiz 4</h5>
      
    				</div>
  				</div>
 
		</div>	

		<h2>ICT</h2>
		<div class="card-group">
			
  				<div class="card">
				  <p></p>
  					<img src={quiz2} alt="Logo" width="50%" height="50%" />
    				<div class="card-body">
						
      				<h5 class="card-title">Quiz 1</h5>
    				</div>
  				</div>
			

			
				<div class="card">
	  				<p></p>
	  				<img src={quiz2} alt="Logo" width="50%" height="50%" />
    				<div class="card-body">
      					<h5 class="card-title">Quiz 2</h5>
      
    				</div>
  				</div>

				  <div class="card">
	  				<p></p>
	  				<img src={quiz2} alt="Logo" width="50%" height="50%" />
    				<div class="card-body">
      					<h5 class="card-title">Quiz 3</h5>
      
    				</div>
  				</div>

				  <div class="card">
	  				<p></p>
	  				<img src={quiz2} alt="Logo" width="50%" height="50%" />
    				<div class="card-body">
      					<h5 class="card-title">Quiz 4</h5>
      
    				</div>
  				</div>
 
		</div>

		<h2>Commerce</h2>
		<div class="card-group">
			
  				<div class="card">
				  <p></p>
  					<img src={quiz2} alt="Logo" width="50%" height="50%" />
    				<div class="card-body">
						
      				<h5 class="card-title">Quiz 1</h5>
    				</div>
  				</div>
			

			
				<div class="card">
	  				<p></p>
	  				<img src={quiz2} alt="Logo" width="50%" height="50%" />
    				<div class="card-body">
      					<h5 class="card-title">Quiz 2</h5>
      
    				</div>
  				</div>

				  <div class="card">
	  				<p></p>
	  				<img src={quiz2} alt="Logo" width="50%" height="50%" />
    				<div class="card-body">
      					<h5 class="card-title">Quiz 3</h5>
      
    				</div>
  				</div>

				  <div class="card">
	  				<p></p>
	  				<img src={quiz2} alt="Logo" width="50%" height="50%" />
    				<div class="card-body">
      					<h5 class="card-title">Quiz 4</h5>
      
    				</div>
  				</div>
 
		</div>
		<footer>
			<FooterComponent/>
		</footer>

		</div>
			
			
				
				

	);
}

export default NewBlog;
