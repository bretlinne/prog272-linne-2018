import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import dataManager from '../../assets/FakeDataManager'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../components/Header'
import addresses from '../address-list'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import {createMuiTheme} from "@material-ui/core/styles/index";
import Typography from '@material-ui/core/Typography';

let  wrapper = null;

configure({ adapter: new Adapter() })

beforeEach(() => {
    wrapper = shallow(<Header
        dataManager={dataManager}
        addressList={addresses} />);
});

describe('Jest Header Tests', function() {
    const themeDark = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });
    const addressProp = wrapper => wrapper.dive()
        .find('WithStyles(AddressShow)')
        .prop('name');

    it('renders without crashing', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider theme={themeDark}>
                <BrowserRouter>
                    <Header/>
                </BrowserRouter>
            </MuiThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders title and tests with containsMatchingElement', () => {
        const wrapper = shallow(<Header />);
        //console.log(wrapper.dive().debug())
        const target = <Typography>AddressMavenCouchServerFinal</Typography>;
        expect(wrapper.dive().containsMatchingElement(target)).toBe(true);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
}); // END DESCRIBE


