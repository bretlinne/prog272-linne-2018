import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()});

describe('Jest App Tests', function(){
   it('renders foo without crashing', () =>{
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
   });

   it('renders and reads h1 text', () => {
      const wrapper = shallow(<App />);
       const welcome = <h2 className="App-title">Dummy Component</h2>;
      expect(wrapper.contains(welcome)).toBe(true);
   });

   it('renders and reads p text',()=>{
      const wrapper = shallow(<App />);
      const unknownFile = <p className="App-intro">file: unknown</p>;
      expect(wrapper.contains(unknownFile)).toBe(true);
   });

   it('renders state of File paragraph after button click', ()=>{
      const wrapper = shallow(<App />);

      const nineSign = <p className="App-intro">file: url-file.js</p>;
      wrapper.find('#getFile').simulate('click');
      expect(wrapper.contains(nineSign)).toBe(true);
   });
}); // END DESCRIBE


