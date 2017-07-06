//import css for webpack
require('../sass/base.sass');

import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(<App />, document.getElementById('app'));
