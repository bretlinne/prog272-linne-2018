import React from 'react';
import ReactDOM from 'react-dom';
import Address from './components/Address'
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import addresses from './address-list'


describe('AddressShow Shallow Suite', function() {

    const debug = false;

    const addressTest = {
        firstName: 'Curly',
        lastName: 'Howard',
        address: '154 Russell Senate Office Building',
        city: 'Washington',
        state: 'D.C.',
        zip: '20510',
        phone: '(202) 224-2621',
        fax: '(202) 224-0238',
        tollfree: '(866) 481-9186'
    };


    /*
     * Display debug information about a DOM node of a component by index
     * @param {object} wrapper - The HTML generated by your component
     * @param {number} index - Index of HTML element you want to see.
     * @param {boolean} talkToMe - Speak even if quiet is true
     */
    const getIndex = (wrapper, index, talkToMe) => {
        if (debug || talkToMe) {
            const ninep = wrapper.find('div#addressShow').childAt(index).debug();
            console.log('NINEP:', ninep);
        }
    };

    const defaultFieldTest = (name, index, talkToMe) => {
        const wrapper = shallow(<AddressShow address={AddressList[0]}/>);
        const welcome = <p className="App-intro">{name}</p>;
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    const afterClickFieldTest = (name, index, talkToMe) => {
        const wrapper = shallow(<AddressShow address={AddressList[1]}/>);
        const welcome = <p className="App-intro">{name}</p>;
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    it('renders and displays the first name', () => {
        defaultFieldTest('First Name: unknown', 0);
        afterClickFieldTest('First Name: ' + addressTest.firstName, 0);
    });

    // EVENTUALLY YOU WILL NEED TO WRITE MORE TESTS LIKE THE FIRST NAME TEST.
    // THE GOAL WILL BE TO TEST ALL THE PROPERTIES OF OUR COMPONENT.
    // AT FIRST, HOWEVER, JUST KEEP THESE TWO TESTS. WHEN THEY START
    // PASSING, THEN ADD TESTS FOR THE OTHER PROPERTIES SUCH AS LASTNAME...

});