import React from 'react';
import Header from '../components/Header';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('Jest Header Tests', function() {
    const defaultH1Test = (name, index, talkToMe) => {
        const wrapper = shallow(<Header />);
        const welcome = <h1>{name}</h1>;
        //console.log(welcome);
       //getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    it('renders AppBar', () => {
        const wrapper = shallow(<Header />);
        const welcome = (
            <h1>Address Maven</h1>
        );
        expect(wrapper.contains(welcome)).toBe(true);
    });
    fit('renders and displays h1 in AppBar', () => {
        const wrapper = shallow(<Header />);
        const welcome = <h1>Address Maven</h1>;
        expect(wrapper.contains(welcome)).toBe(true);
        //afterClickFieldTest('First Name: ' + AddressList.firstName, 0);
    });
}); // END DESCRIBE
