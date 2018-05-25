import React, { Component } from 'react';
import '../App.css';
import RaisedButton from 'material-ui/RaisedButton'
import ActionAndroid from 'material-ui/svg-icons/action/android';
import styles from './styles';

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

          <RaisedButton
              label="Get File"
              labelPosition="before"
              primary={true}
              icon={<ActionAndroid />}
              style={styles.button}
              onClick={this.getFile}
          />
      </div>
    );
  }
}

export default GetFile;
