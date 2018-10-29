import React from 'react';
import { shallow } from 'enzyme';
import If from './index';

describe('[Component] If', () => {
  
    const children = () => console.log('If Test Children True');

    it('Display If Component test true response', () => {
        const wrapper = shallow(
            <If test={true} children={children} />
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('Display If Component test false response', () => {
        const wrapper = shallow(
            <If test={false} children={children} />
        );
        
        expect(wrapper).toMatchSnapshot();
    });
    
});