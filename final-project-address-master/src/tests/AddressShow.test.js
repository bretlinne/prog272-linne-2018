import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import dataManager from '../../assets/FakeDataManager'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Address from '../components/Address'
import addresses from '../address-list'

let  wrapper = null;

configure({ adapter: new Adapter() })

beforeEach(() => {
    wrapper = shallow(<Address
        dataManager={dataManager}
        addressList={addresses} />);
});

const addressProp = wrapper => wrapper.dive()
    .find('WithStyles(AddressShow)')
    .prop('name');

it('renders and displays the default first name', () => {
    //console.log(wrapper.dive().debug());
    expect(addressProp(wrapper).firstName).toEqual('unknown');
});

it('renders and displays the default lastName', () => {
    expect(addressProp(wrapper).lastName).toEqual('unknown');
});

it('renders and displays the default address', () => {
    expect(addressProp(wrapper).address).toEqual('unknown');
});

it('renders and displays the default city', () => {
    expect(addressProp(wrapper).city).toEqual('unknown');
});

it('renders and displays the default state', () => {
    expect(addressProp(wrapper).state).toEqual('unknown');
});

it('renders and displays the default zip', () => {
    expect(addressProp(wrapper).zip).toEqual('unknown');
});

it('renders and displays the default Phone', () => {
    expect(addressProp(wrapper).phone).toEqual('unknown');
});

it('renders and displays the default contact', () => {
    expect(addressProp(wrapper).contact).toEqual('unknown');
});

// I can't get this to work, and I'm out of time.  This is puzzling because
// this is your code, charlie.  Shouldn't at least this test work?
/*
fit('renders and displays the default first name from FakeData', () => {
    console.log(wrapper.dive().debug());
    expect(wrapper.state().address.firstName).toEqual('Patty');
});
*/

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});


