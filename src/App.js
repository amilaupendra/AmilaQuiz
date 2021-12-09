import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';
import NewBlog from './components/NewBlog';
import Blog from './components/Blog';
import LeaderBoard from './components/LeaderBoard';
import Registration from './components/Registration';
import SignIn from './components/SignIn';

function App() {
	return (
		<Router>
			<Nav />
			<Switch>

				<Route path="/create">
					<NewBlog />
				</Route>

				<Route path="/posts/:id">
					<Blog />
				</Route>

				<Route path="/LeaderBoard">
					<LeaderBoard />
				</Route>

				<Route path="/reg">
					<Registration />
				</Route>

				<Route path="/Signin">
					<SignIn />
				</Route>

				<Route  path="/">
					<Home />
				</Route>

			</Switch>
		</Router>
	);
}

export default App;
