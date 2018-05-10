import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()});

describe('Jest Create React Tests', function(){
   it('renders foo without crashing', () =>{
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
   });

   it('renders and reads h1 text', () => {
      const wrapper = shallow(<App />);
       const welcome = <h1 className="App-title">Welcome to React RETRY</h1>;
      expect(wrapper.contains(welcome)).toBe(true);
   });

   it('renders and reads p text',()=>{
      const wrapper = shallow(<App />);
      const unknownFile = <p className="App-intro">file: {this.state.file}</p>;
      expect(wrapper.contains(unknownFile)).toBe(true);
   });

   it.only('renders state of File paragraph after button click', ()=>{
      const wrapper = shallow(<App />);

      const nineSign = <p className="App-intro">file: url-file.js</p>;
      wrapper.find('#getFile').simulate('click');
      expect(wrapper.contains(nineSign)).toBe(true);
   });
}); // END DESCRIBE


