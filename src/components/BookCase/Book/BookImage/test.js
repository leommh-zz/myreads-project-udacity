import React from 'react';
import { shallow } from 'enzyme';
import BookImage from './index';

describe('[Component] BookImage', () => {

    const wrapper = shallow(<BookImage image='' />);

    it('Display BookImage Component with props', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});