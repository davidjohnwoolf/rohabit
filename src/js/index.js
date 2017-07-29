//import css for webpack
require('../sass/base.sass');

import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Habits from './components/habit/Habits';
import CreateUser from './components/user/CreateUser';

render(
	<Router>
		<div>
			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/habit">Habits</Link></li>
					<li><Link to="/user/new">New User</Link></li>
				</ul>
			</nav>


			<Route exact path="/" component={ Home } />
			<Route path="/habit" component={ Habits } />
			<Route path="/user/new" component={ CreateUser } />
		</div>
	</Router>,
	document.getElementById('app')
);
