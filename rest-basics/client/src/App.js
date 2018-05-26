import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
    constructor() {
        super();
        this.state = {
            file: 'File name will be placed here.',
            status: 'waiting for server'
        };
    }

    queryServer = () => {
        const that = this;
        fetch('/api/foo')
            // DID HTTP TALK TO THE SERVER? BLOWS UP IF NETWORK DOWN, URL BAD, ETC.
            // CHECK response.ok TO SEE IF THE CALL SUCCEEDED ON THE SERVER SIDE.
            // response.ok will be false if we return a 404 or 500 error.
            .then(function(response) {
                return response.json();
            })
            // IF WE SUCCEED, WE GET RESULT HERE. TYPICALLY SOME JSON.
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(foo => (json));
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    render() {
        return (
            <div className="App">
            <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to React</h2>
        </div>

        <p className="App-intro">
            state: {this.state.status} file: {this.state.file}
    </p>
        <button onClick={this.queryServer}>Bar</button>
        </div>
    );
    }
}

export default App;