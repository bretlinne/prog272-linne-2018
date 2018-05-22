import React from 'react';
import ReactDOM from 'react-dom';
import Address from './components/Address'
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import addresses from './address-list'
// configure the adapter
configure({adapter: new Adapter()});



describe('Address tests', , function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Address/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and displays the default first name', () => {
        const wrapper = shallow(<Address/>);
        //console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').firstName).toEqual('unknown');
    });

    it('renders state of firstName after button click', () => {
        const wrapper = shallow(<Address addressList={AddressList}/>);
        wrapper.instance().setAddress();
        setImmediate(() => {
            wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').firstName).toEqual('Patty');
        });
    });

    // YOU WRITE TESTS FOR THE OTHER PROPERTIES SUCH AS LASTNAME, CITY, ETC...
});
