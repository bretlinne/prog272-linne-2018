import React, { Component } from 'react';
import '../App.css';


class GetFile extends Component {
    constructor(){
        super();
        this.state = {
          file: 'unknown'
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
          <h2 className="App-title">Dummy Component</h2>
          <p className="App-intro">file: {this.state.file}</p>
          <button id="getFile" onClick={this.getFile}>Get File</button>
      </div>
    );
  }
}

export default GetFile;
