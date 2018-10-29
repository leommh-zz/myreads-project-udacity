import React from 'react';
import { shallow } from 'enzyme';
import BookAdd from './index';

describe('[Component] BookAdd', () => {
    const booksSearch = [
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

    const search = () => console.log('Searched');
    const defineStatus = () => console.log('Updated');
    const loading = false;

    const wrapper = shallow(
        <BookAdd 
            title='test' 
            booksSearch={booksSearch} 
            search={search} 
            loading={loading} 
            defineStatus={defineStatus} 
        />
    );

    it('Display Book Component with props', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});