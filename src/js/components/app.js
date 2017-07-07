import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';

export default class App extends React.Component {
	render() {

		return (
			<Router>
				<div>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>

					<Route path="/" component={ HomePage } />
					<Route path="/about" component={ About } />
				</div>
			</Router>
		);
	}
}