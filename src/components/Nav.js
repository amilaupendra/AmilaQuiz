import { Link } from 'react-router-dom';
import allbg from "../img/allbg.jpg";
import Logo from '../img/logo1.png';

function Nav() {
	return (
		<header>
			<div className="header-container" style={{backgroundImage: 'url('+allbg+')'}}>
				<div className="right-menu">
					<div className="logo">
						<img src={Logo} alt="Logo" />
					</div>
					
					<Link to="/">Q-Smart</Link>
					
				</div>
				<div className="left-menu">
					<Link to="/">Home</Link>
					<Link to="/create" className="button-container">
						Quiz
					</Link>
				</div>

				<div className="left-menu">
					<Link to="/about" className="button-container">
						Leaderboard
					</Link>
				</div>

				<div className="left-menu">
					<Link to="/contact" className="button-container">
						Sign in
					</Link>
				</div>

				<div className="left-menu">
					<Link to="/reg" className="button-container">
						Sign up
					</Link>
				</div>
			</div>
		</header>
	);
}

export default Nav;
