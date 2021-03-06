import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import AddressShow from '../components/AddressShow';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import AddressList from "../address-list";
configure({adapter: new Adapter()});


import addresses from '../address-list';

describe('AddressShow Shallow Suite', function() {
    const getIndex = (wrapper, index, talkToMe) => {
        if (debug || talkToMe) {
            const ninep = wrapper
                .find('div#addressShow')
                .childAt(index)
                .debug();
            console.log('NINEP:', ninep);
        }
    };

    let wrapper = null;

    const setAddress = () => {
        const address=addresses[1];
        wrapper.setProps({ address: address });
    };

    const addressTest = {
        firstName: 'Curly',
        lastName: 'Howard',
        address: '154 Wiseguy Ave',
        city: 'Washington',
        state: 'D.C.',
        zip: '20510',
        phone: '(555) 555-2621',
        fax: '(555) 555-0238',
        tollfree: '(555) 555-9186'
    };

    // this version has .dive at end of the const wrapper line.  This saves
    // some coding as in below.  We don't have to write .dive() calls where
    // they're used in the commented out version if we've used .dive in the wrapper
    // definition
    const defaultFieldTest = (name, index, talkToMe) => {
        const wrapper = shallow(<AddressShow address={addresses[0]} />).dive();
        console.log(wrapper.debug());
        const welcome = <p className="App-intro">{name}</p>;
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };
    /*const defaultFieldTest = (name, index, talkToMe) => {
        const wrapper = shallow(<AddressShow address={addresses[0]} />);
        const welcome = <p className="App-intro">{name}</p>;
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.dive().contains(welcome)).toEqual(true);
    };*/

    const afterClickFieldTest = (name) => {
        wrapper = shallow(<AddressShow
            address={addresses[0]}
            setAddress={setAddress}/>);
        const firstName = <p className="App-intro">{name}</p>;
        wrapper.dive().find('#setAddress').simulate('click');
        //console.log(wrapper.debug());
        expect(wrapper.dive().contains(firstName)).toBe(true);
    };

    fit('should take an AddressShow snapshot', () => {
        const elfTree = shallow(<AddressShow address={addresses[0]}/>);
        expect(elfTree).toMatchSnapshot();
    });

});

/*
describe('AddressShow Shallow Suite', function() {

    const debug = false;




    // * Display debug information about a DOM node of a component by index
    // * @param {object} wrapper - The HTML generated by your component
    // * @param {number} index - Index of HTML element you want to see.
    // * @param {boolean} talkToMe - Speak even if quiet is true

    const getIndex = (wrapper, index, talkToMe) => {
        if (debug || talkToMe) {
            const ninep = wrapper.find('div#addressShow').childAt(index).debug();
            console.log('NINEP:', ninep);
        }
    };



    const afterClickFieldTest = (name, index, talkToMe) => {
        const wrapper = shallow(<AddressShow address={AddressList[1]}/>);
        const welcome = <p className="App-intro">{name}</p>;
     //   console.log("being passed: ", name);
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    it('renders and displays the first name', () => {
        defaultFieldTest('First Name: unknown', 0);
        afterClickFieldTest('First Name: ' + AddressList.firstName, 0);
    });

    it('renders and displays the last name', () => {
        defaultFieldTest('Last Name: unknown', 0);
        afterClickFieldTest('Last Name: ' + AddressList.lastName, 0);
    });

    it('renders and displays the address', () => {
        defaultFieldTest('Address: unknown', 0);
        afterClickFieldTest('Address: ' + AddressList.address, 0);
    });

    it('renders and displays the address', () => {
        //const addressTestValue = <p className="App-intro">'Address: unknown'</p>
        defaultFieldTest('Address: unknown', 0);
        afterClickFieldTest('Address: 154 Wiseguy Ave', 0);
    });

    it('renders and displays the city', () => {
        defaultFieldTest('City: unknown', 0);
        afterClickFieldTest('City: ' + AddressList.city, 0);
    });

    it('renders and displays the state', () => {
        defaultFieldTest('State: unknown', 0);
        afterClickFieldTest('State: ' + AddressList.state, 0);
    });

    it('renders and displays the zip', () => {
        defaultFieldTest('Zip: unknown', 0);
        afterClickFieldTest('Zip: ' + AddressList.zip, 0);
    });
    it('renders and displays the phone', () => {
        defaultFieldTest('Phone: unknown', 0);
        afterClickFieldTest('Phone: ' + AddressList.phone, 0);
    });
    it('renders and displays the fax', () => {
        defaultFieldTest('Fax: unknown', 0);
        afterClickFieldTest('Fax: ' + AddressList.fax, 0);
    });
    it('renders and displays the tollfree', () => {
        defaultFieldTest('Toll Free: unknown', 0);
        afterClickFieldTest('Toll Free: ' + AddressList.tollfree, 0);
    });
    // EVENTUALLY YOU WILL NEED TO WRITE MORE TESTS LIKE THE FIRST NAME TEST.
    // THE GOAL WILL BE TO TEST ALL THE PROPERTIES OF OUR COMPONENT.
    // AT FIRST, HOWEVER, JUST KEEP THESE TWO TESTS. WHEN THEY START
    // PASSING, THEN ADD TESTS FOR THE OTHER PROPERTIES SUCH AS LASTNAME...

});


*/