import React from 'react';
import { shallow } from 'enzyme';
import BookDrawer from './index';

describe('[Component] BookDrawer', () => {
    const data = {
        title: "Title Book",
        description: "This book and the table",
        categories: [
            "action"
        ],
        authors: [
            "Leonardo Morini"
        ],
        shelf: '',
        averageRating: 2
    }

    const toggleDrawer = () => console.log('Toggled');
    const stateDrawer = () => console.log('Stated');
    const defineStatus = () => console.log('Updated');


    const wrapper = shallow(<BookDrawer data={data} toggleDrawer={toggleDrawer} stateDrawer={stateDrawer} defineStatus={defineStatus} />);

    it('Display BookDrawer Component with props', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});