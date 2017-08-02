//import css for webpack
require('../sass/base.sass');

import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import CreateUser from './components/user/CreateUser';

render(
	<Router>
		<div>
			<header className="header">
				<div>
					<h1>Rohabit</h1>
					<nav>
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/user/new">New User</Link></li>
						</ul>
					</nav>
				</div>
			</header>
			<Route exact path="/" component={ Home } />
			<Route path="/user/new" component={ CreateUser } />
		</div>
	</Router>,
	document.getElementById('app')
);
