import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// configure the adapter
configure({adapter: new Adapter()});



describe('Jest Tests', function () {

    // if you add .only to the 'it' function, it's the only
    // test that runs.
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
    });

    it('renders and reads H2 text', () => {
        // shallow is from enzyme.  THis needs to be installed and imported
        // to work.
        const wrapper = shallow(<App/>);
        // this test orig had <h2> and that's part of why it failed at first
        // the other reason is that app.js has an h2 with a class name.  As a gen
        // rule you change the code, not the test, but we're changing this.
        const welcome = <h2 className="App-title">Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toBe(true);
    });

    it('renders state of File paragraph after button click', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">file: unknown</p>;
        wrapper.find('#getFile').simulate('click');
        expect(wrapper.contains(nineSign)).toBe(true);
    });

    it('renders state of File paragraph after button click', () => {
        const wrapper = shallow(<App />);
        a
    });

});
