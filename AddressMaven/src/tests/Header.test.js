import React from 'react';
import Header from '../components/Header';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Jest Header Tests', function() {
    it('renders and reads h1 text', () => {
        const wrapper = shallow(<Header />);
        const welcome = (
            <h1 className="App-title">React Address Show Assignment</h1>
        );
        expect(wrapper.contains(welcome)).toBe(true);
    });
}); // END DESCRIBE
