import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';


class Header extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">React Address Show Assignment</h1>
                </header>
                <hr/>
            </div>
        );
    }
}

export default Header;
