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

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});


