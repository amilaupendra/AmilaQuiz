import MyCard from './MyCard';
import useFetch from './useFetch';
import Logo from '../img/logo1.png';

function Home() {

	const name="Shonali";
	const { data: posts } = useFetch(
		'https://jsonplaceholder.typicode.com/posts'
	);
	console.log(posts);

	return (
		<div>
			<div >
				<div className="logo-details-1">
				<h1>WELCOME TO CREATIVE CODES</h1>
				</div>
				
				<div className="logo-details">
				<img src={Logo}  alt="Logo" width="450" height="300"/>
				</div>
				<br/><br/>
			</div>
		<div className="posts-list">
			
			<div className="posts-container">
				{posts ? (
					posts.map((post) => <MyCard border="light " data={post} key={post.id} />)
				) : (
					<p>Loading page...</p> 
				)}
			</div>
		</div>
		</div>
	);
}

export default Home;
