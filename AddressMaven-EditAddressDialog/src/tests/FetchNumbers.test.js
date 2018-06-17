import React from 'react';
import ReactDOM from 'react-dom';
import FetchNumbers from '../components/FetchNumbers';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
import elfLogger from '../elf-logger';

const elfDebugEnzyme = new ElfDebugEnzyme(false, 'App.test.js');
configure({adapter: new Adapter()});

describe('FetchNumbers Tests', function() {

    elfLogger.off();

    it('handles click on foobar with enzyme', () => {
        const wrapper = shallow(<FetchNumbers/>);
        console.log(wrapper.debug());
        wrapper.find('#fetchNumbers').simulate('click');
        expect(wrapper).toMatchSnapshot();
    });

});