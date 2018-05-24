import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Address from '../components/Address';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import addresses from "../address-list";
configure({adapter: new Adapter()});

describe('Jest Address Tests', function(){
   it('renders foo without crashing', () =>{
      const div = document.createElement('div');
       ReactDOM.render(<Address addressList={addresses} />, div);
   });

   it('renders and reads h1 text', () => {
      const wrapper = shallow(<Address addressList={addresses} />);
       const welcome = <h1 className="App-title">Address Info</h1>;
      expect(wrapper.contains(welcome)).toBe(true);
   });

}); // END DESCRIBE


