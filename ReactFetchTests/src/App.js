import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Instructions from './components/Instructions';
import FetchServer from "./components/FetchServer";
import FetchNumbers from "./components/FetchNumbers";

class App extends Component {

    render() {
        return (
            <section>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <FetchServer />
                    <FetchNumbers />
                </div>
                <Instructions />
            </section>
        );
    }
}

export default App;
