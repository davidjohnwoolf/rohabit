//import css for webpack
require('../sass/base.sass');

import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {

    render() {
        return (
            <section>
                <h1>Rohabit</h1>
            </section>
        );
    }
};


render(<App />, document.getElementById('app'));
