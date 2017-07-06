import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <header id="header">
                <h1>{this.props.value}</h1>
            </header>
        );
    }
}

export default Header;
