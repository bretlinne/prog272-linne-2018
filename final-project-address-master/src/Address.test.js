import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import dataManager from '../assets/FakeDataManager'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Address from './components/Address'
import addresses from './address-list'

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
    console.log(wrapper.dive().debug());
    expect(addressProp(wrapper).firstName).toEqual('unknown');
});

it('renders and displays the default lastName', () => {
    console.log(wrapper.dive().debug());
    expect(addressProp(wrapper).lastName).toEqual('unknown');
});

it('renders and displays the default address', () => {
    console.log(wrapper.dive().debug());
    expect(addressProp(wrapper).address).toEqual('unknown');
});

it('renders and displays the default city', () => {
    console.log(wrapper.dive().debug());
    expect(addressProp(wrapper).city).toEqual('unknown');
});

it('renders and displays the default state', () => {
    console.log(wrapper.dive().debug());
    expect(addressProp(wrapper).state).toEqual('unknown');
});

it('renders and displays the default zip', () => {
    console.log(wrapper.dive().debug());
    expect(addressProp(wrapper).zip).toEqual('unknown');
});

it('renders and displays the default Phone', () => {
    console.log(wrapper.dive().debug());
    expect(addressProp(wrapper).phone).toEqual('unknown');
});

it('renders and displays the default contact', () => {
    console.log(wrapper.dive().debug());
    expect(addressProp(wrapper).contact).toEqual('unknown');
});

fit('renders and displays the default first name from FakeData', () => {
    console.log(wrapper.dive().debug());
    expect(wrapper.state.address.firstName).toEqual('Patty');
});

it('renders state of firstName after button click', () => {
    wrapper.instance().setAddress(1);
    expect(wrapper.state().name.firstName).toEqual('Robert');
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});


