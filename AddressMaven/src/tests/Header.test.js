import React from 'react';
import Header from '../components/Header';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ReactDOM from 'react-dom';

configure({ adapter: new Adapter() });


describe('Jest Header Tests', function() {
    const defaultH1Test = (name, index, talkToMe) => {
        const wrapper = shallow(<Header />);
        const welcome = <h1>{name}</h1>;
        //console.log(welcome);
       //getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    it('renders and displays h1 in AppBar', () => {
        const wrapper = shallow(<Header />);
        //console.log(wrapper.find('div').childAt(0).props().title);
        expect(wrapper
            .find('div').childAt(0).props().title)
            .toBe('Address Maven');

    });

    it('renders and displays menu nav button', () => {
        const wrapper = shallow(<Header />);
        //console.log(wrapper.find('Drawer').childAt(0).props());
        expect(wrapper
            .find('Drawer').childAt(0).props().title)
            .toBe('Navigation');

    });
    it('renders and displays address nav button', () => {
        const wrapper = shallow(<Header />);
        //console.log(wrapper.find('Drawer').childAt(1).props().primaryText);
        expect(wrapper
            .find('Drawer').childAt(1).props().primaryText)
            .toBe('Address');

    });
    it('renders and displays getfile nav button', () => {
        const wrapper = shallow(<Header />);
        //console.log(wrapper.find('Drawer').childAt(2).props().primaryText);
        expect(wrapper
            .find('Drawer').childAt(2).props().primaryText)
            .toBe('GetFile');

    });
    it('renders state of File paragraph after button click', () => {
        const wrapper = shallow(<Header />);
        //console.log(wrapper.find('Drawer').childAt(2).props().primaryText);
        expect(wrapper
            .find('Drawer').childAt(2).props().primaryText)
            .toBe('GetFile');

    });

    // I don't know how to make this work.
    /*
    fit('renders state of Address Link after button click', () => {
        const wrapper = shallow(<Header />);
        console.log(wrapper.find('Drawer').childAt(1).props().id);
        const value = <p className="App-intro">First Name: unknown</p>;
        wrapper.find('#addressButton').simulate('click');
        expect(wrapper
            .find('Drawer') .contains(value)).toBe(true);
    });*/
}); // END DESCRIBE
