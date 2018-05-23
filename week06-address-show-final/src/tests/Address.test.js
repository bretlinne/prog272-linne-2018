import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Address from '../components/Address';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import addresses from "../address-list";
configure({adapter: new Adapter()});

describe('Jest Address Tests', function(){
   fit('renders foo without crashing', () =>{
      const div = document.createElement('div');
       ReactDOM.render(<Address addressList={addresses} />, div);
   });

   it('renders and reads h1 text', () => {
      const wrapper = shallow(<Address addressList={addresses} />);
       const welcome = <h1 className="App-title">Address Info</h1>;
      expect(wrapper.contains(welcome)).toBe(true);
   });

   it('renders and reads p text',()=>{
      const wrapper = shallow(<Address addressList={addresses} />);
      const unknownFile = <p className="App-intro">
          First Name: unknown <br />
          Last Name: unknown <br />
          Address: unknown <br />
          City: unknown <br />
          State: unknown <br />
          Zip: unknown <br />
          Phone: unknown <br />
          Fax: unknown <br />
          Toll Free: unknown <br />
      </p>;
      expect(wrapper.contains(unknownFile)).toBe(true);
   });

   it('renders state of Address info after button click', ()=>{
      const wrapper = shallow(<Address addressList={addresses} />);

      const nineSign = <p className="App-intro">
          First Name: Curly <br />
          Last Name: Howard <br />
          Address: 154 Wiseguy Ave <br />
          City: Washington <br />
          State: D.C. <br />
          Zip: 20510 <br />
          Phone: (555) 555-2621 <br />
          Fax: (555) 555-0238 <br />
          Toll Free: (555) 555-9186 <br /></p>;
      wrapper.find('#SetAddress').simulate('click');
      expect(wrapper.contains(nineSign)).toBe(true);
   });
}); // END DESCRIBE


