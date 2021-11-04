import { Link } from 'react-router-dom';

import Logo from '../img/logo1.png';

function Nav() {
	return (
		<header>
			<div className="header-container">
				<div className="right-menu">
					<div className="logo">
						<img src={Logo} alt="Logo" />
					</div>

					<Link to="/">Creative Codes</Link>
				</div>
				<div className="left-menu">
					<Link to="/">Home</Link>
					<Link to="/create" className="button-container">
						Add Order
					</Link>
				</div>

				<div className="left-menu">
					<Link to="/about" className="button-container">
						About Us
					</Link>
				</div>

				<div className="left-menu">
					<Link to="/contact" className="button-container">
						Contact Us
					</Link>
				</div>

				<div className="left-menu">
					<Link to="/reg" className="button-container">
						Registration
					</Link>
				</div>
			</div>
		</header>
	);
}

export default Nav;
