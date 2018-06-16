import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import {createMuiTheme} from "@material-ui/core/styles/index";
import Typography from '@material-ui/core/Typography';

configure({ adapter: new Adapter() });


describe('Jest Header Tests', function() {
    const themeDark = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });
    const defaultH1Test = (name, index, talkToMe) => {
        const wrapper = shallow(<Header />);
        const welcome = <h1>{name}</h1>;
        //console.log(welcome);
       //getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

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
        const target = <Typography>AddressMaven-MaterialUI-Update</Typography>;
        expect(wrapper.dive().containsMatchingElement(target)).toBe(true);
    });

    // can't understand how to test more complex elements than just text
    
/*    it('renders title and tests with containsMatchingElement', () => {
        const wrapper = shallow(<Header />);
        //console.log(wrapper.dive().debug())
        const target = <div><ListItem><ListItemText primary="Home" /></ListItem></div>;
        expect(wrapper.dive().containsMatchingElement(target)).toBe(true);
    });
*/
}); // END DESCRIBE
