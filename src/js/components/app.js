import React from 'react';
import Header from './header';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header value="Yo" />
        );
    }
};

export default App;
