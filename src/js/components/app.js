import React from 'react';
import Header from './Header';
import HomePage from './HomePage';

class App extends React.Component {

    render() {
        return (
            <div className="inner-wrap">
                <Header value="Rohabit" />
                <HomePage />
            </div>
        );
    }
}

export default App;
