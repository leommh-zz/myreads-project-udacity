import React from 'react';
import { shallow } from 'enzyme';
import BookCase from './index';

describe('[Component] BookCase', () => {
    const books = [
        {   
            id: "uidd",
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
        },
        {
            id: "uidd5s5",
            title: "Title Book 2",
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

    const loading = false;
    const defineStatus = () => console.log('Updated');

    const wrapper = shallow(<BookCase title='test' books={books} loading={loading} defineStatus={defineStatus} />);

    it('Display Book Component with props', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});