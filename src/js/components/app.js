import React from 'react';
import Header from './Header';
import HomePage from './HomePage';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {

    render() {
        return (
	    <Router>
                <Header value="Rohabit" />
                <div>
                    <ul>
                        <li><Link to="/">Root</Link></li>
                        <li><Link to="/home">Home</Link></li>
                    </ul>
                    <Route path="/home" component={ HomePage } />
                </div>
            </Router>
        );
    }
}

export default App;
