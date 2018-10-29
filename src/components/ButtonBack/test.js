import React from 'react';
import { shallow } from 'enzyme';
import ButtonBack from './index';

describe('[Component] ButtonBack', () => {
  
    it('Display Button Back Component', () => {
        const wrapper = shallow(<ButtonBack />);
        expect(wrapper).toMatchSnapshot();
    });
    
});