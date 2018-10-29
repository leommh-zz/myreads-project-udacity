import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';

describe('[Component] Home', () => {
    const booksUser = [
        {
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
    ]

    const defineStatus = () => console.log('Updated');
    const loading = false;

    const wrapper = shallow(
        <Home 
            booksUser={booksUser} 
            loading={loading} 
            defineStatus={defineStatus} 
        />
    );

    it('Display Home Component with props', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});