import React from 'react';
import { shallow } from 'enzyme';
import MultiChips from './index';

describe('[Component] MultiChips', () => {
  
    const items = [
        "item1", 
        "item2"
    ];

    const name = "title1";
    

    it('Display MultiChips Component with props', () => {
        const wrapper = shallow(<MultiChips items={items} name={name} />);
        expect(wrapper).toMatchSnapshot();
    });
    
});