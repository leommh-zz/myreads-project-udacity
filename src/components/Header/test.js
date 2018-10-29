import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('[Component] Header', () => {
  
    it('Display Header Component', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });
    
});