//import css for webpack
require('../sass/base.sass');

import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Habit from './components/habit/Habit';

render(
	<Router>
		<div>
			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/habit">Habits</Link></li>
				</ul>
			</nav>


			<Route exact path="/" component={ Home } />
			<Route path="/habit" component={ Habit } />
		</div>
	</Router>,
	document.getElementById('app')
);
