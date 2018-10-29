import React from 'react';
import { shallow } from 'enzyme';
import Book from './index';

describe('[Component] Book', () => {
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
    const defineStatus = () => console.log('Updated');

    const wrapper = shallow(<Book data={data} toggleDrawer={toggleDrawer} defineStatus={defineStatus} />);

    it('Display Book Component with props', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});