import React from 'react';
import { shallow } from 'enzyme';
import { MapChips, ItemChip } from './index';

describe('[Components] MapChips and ItemChip', () => {
  
    const items = [
        "item1", 
        "item2"
    ];

    const item = [
        "item"
    ];

    const Style = {
        chip: {
            color: "#fff",
        },
    };

    it('Display MapChips Component with props', () => {
        const wrapper = shallow(<MapChips items={items} Style={Style} />);
        expect(wrapper).toMatchSnapshot();
    });
    
    it('Display ItemChip Component with props', () => {
        const wrapper = shallow(<ItemChip item={item} Style={Style} />);
        expect(wrapper).toMatchSnapshot();
    });

});