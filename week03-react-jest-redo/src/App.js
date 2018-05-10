import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
          file: 'unknown',
          foo: 'waiting'
        };
    }
    getFile =()=>{
        console.log('state.file: ' + this.state.file);
        console.log('getFile called');
        this.setState({file: 'url-file.js'})
        console.log('state.file: ' + this.state.file);
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React RETRY</h1>
        </header>
          <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <p className="App-intro">file: {this.state.file}</p>
          <button id="getFile" onClick={this.getFile}>Get File</button>
      </div>
    );
  }
}

export default App;
