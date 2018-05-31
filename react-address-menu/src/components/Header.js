import React, { Component } from 'react';
import logo from '../Tree-of-Life_Flower-of-Life_Stage.svg';
import '../App.css';
import { Link } from 'react-router-dom';
import '../css/Menu.css';

class Header extends Component {
    render() {
        return (
            <div className="App">
               
                <ul>
                    <li><Link to="/address-part">Address</Link></li>
                    <li><Link to="/get-file">Get File</Link></li>
                </ul>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">React Address Menu</h1>


            </div>
        );
    }
}

/*



                */
export default Header;
