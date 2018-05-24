import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address'
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import addresses from '../address-list'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// configure the adapter
configure({adapter: new Adapter()});



describe('Address tests', function() {

    beforeEach(() => {
        global.fetch = jest.fn().mockImplementation(() => {
            const promise = new Promise((resolve) => {
                resolve({
                    ok: true,
                    json: function() {
                        return [{
                            firstName: 'Curly',
                            lastName: 'Howard',
                            address: '154 Russell Senate Office Building',
                            city: 'Washington',
                            state: 'D.C.',
                            zip: '20510',
                            phone: '(202) 224-2621',
                            fax: '(202) 224-0238',
                            tollfree: '(866) 481-9186'
                        }];
                    }
                });
            });
            return promise;
        });
    });

    const setAddress = (wrapper) => {
        wrapper.instance().getAddress();
        setImmediate(() => {
            wrapper.update();
        });
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MuiThemeProvider><Address/></MuiThemeProvider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

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
    it('renders state of firstName after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').firstName).toEqual('Patty');
        });
    });

    // YOU WRITE TESTS FOR THE OTHER PROPERTIES SUCH AS LASTNAME, CITY, ETC...
});
