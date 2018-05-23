import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()});

describe('Jest Header Tests', function(){
   fit('renders and reads h1 text', () => {
      const wrapper = shallow(<Header />);
       const welcome = <h1 className="App-title">React Address Show Assignment</h1>
      expect(wrapper.contains(welcome)).toBe(true);
   });

   it('renders and reads p text',()=>{
      const wrapper = shallow(<Header />);
      const unknownFile = <p className="App-intro">file: unknown</p>;
      expect(wrapper.contains(unknownFile)).toBe(true);
   });

   it('renders state of File paragraph after button click', ()=>{
      const wrapper = shallow(<Header />);

      const nineSign = <p className="App-intro">file: url-file.js</p>;
      wrapper.find('#getFile').simulate('click');
      expect(wrapper.contains(nineSign)).toBe(true);
   });
}); // END DESCRIBE


