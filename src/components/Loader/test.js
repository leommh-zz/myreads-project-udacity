import React from 'react';
import { shallow } from 'enzyme';
import Loader from './index';

describe('[Component] Loader', () => {
  
    it('Display Loader Component', () => {
        const wrapper = shallow(<Loader />);
        expect(wrapper).toMatchSnapshot();
    });
    
});