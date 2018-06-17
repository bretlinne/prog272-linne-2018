import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import addresses from '../address-list';
configure({ adapter: new Adapter() });
import dataManager from '../assets/FakeDataManager';


let  wrapper = null;

beforeEach(() => {
    wrapper = shallow(<Address
        dataManager={dataManager}
        addressList={addresses} />);
});


const setAddress = (wrapper) => {
    wrapper.instance().getAddress();
    setImmediate(() => {
        wrapper.update();
    });
};

const addressProp = wrapper => wrapper
    .find('WithStyles(AddressShow)')
    .prop('address');

const afterClickFieldTest = (wrapper, finder) => {
    setImmediate(() => {
        wrapper.update();
        wrapper.instance().setAddress(0);
        setImmediate(() => {
            wrapper.update();
            try {
                finder();
            } catch (e) {
                console.log(e);
            }
        });
    });
};



//------------------------------------------------------------
describe('Jest Address Tests', function() {
/*    it('renders foo without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Address addressList={addresses} />, div);
    });
*/
    fit('renders and displays the default first name', () => {
        expect(addressProp(wrapper).firstName).toEqual('unknown');
    });


    /*
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MuiThemeProvider><Address/></MuiThemeProvider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders state of firstName after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').firstName).toEqual('Patty');
        });
    });
    it('renders and reads h1 text', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const welcome = <h1 className="App-title">Address Info</h1>;
        expect(wrapper.contains(welcome)).toBe(true);
    });
    */
}); // END DESCRIBE
