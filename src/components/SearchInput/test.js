import React from 'react';
import { shallow } from 'enzyme';
import SearchInput from './index';

describe('[Component] Search', () => {

    const search = () => console.log('Searched');
    const wrapper = shallow(<SearchInput search={search} />);

    it('Display SearchInput Component with props', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('SearchInput onChange event', () => {
        expect(wrapper.simulate('change')).toMatchSnapshot();
    });
    
});