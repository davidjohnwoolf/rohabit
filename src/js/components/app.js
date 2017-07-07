import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default class App extends React.Component {
	render() {

		return (
			<Router>
				<div>
					<nav>
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/contact">Contact</Link></li>
						</ul>
					</nav>


					<Route exact path="/" component={ Home } />
					<Route path="/about" component={ About } />
					<Route path="/contact" component={ Contact } />
				</div>
			</Router>
		);
	}
}