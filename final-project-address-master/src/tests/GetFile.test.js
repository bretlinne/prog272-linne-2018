import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import dataManager from '../../assets/FakeDataManager'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GetFile from '../components/GetFile'

let  wrapper = null;

configure({ adapter: new Adapter() })

beforeEach(() => {
    wrapper = shallow(<GetFile />);
});


it('renders and displays h2', () => {
    const target = 'Dummy Component';
    console.log(wrapper.dive().debug());
    expect(h2(wrapper).firstName).toEqual('unknown');
});


it('renders and reads H2 text', () => {
    const wrapper = shallow(<GetFile />);
    const target = <h2 className="App-title">Dummy Component</h2>;
    expect(wrapper.contains(target)).toBe(true);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});


