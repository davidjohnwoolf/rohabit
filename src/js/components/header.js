import React from 'react';

export default class Header extends React.Component {

    render() {
        return (
            <header id="header">
                <h1>{this.props.value}</h1>
	    </header>
        );
    }
}
