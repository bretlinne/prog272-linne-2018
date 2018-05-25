import React, { Component } from 'react';
import '../App.css';
import Address from './Address';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import GetFile from './GetFile';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
              <Header></Header>
              <Route exact path="/" component={Address}/>
              <Route path="/get-file" component={GetFile}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
