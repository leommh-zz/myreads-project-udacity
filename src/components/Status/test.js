import React from 'react';
import { shallow } from 'enzyme';
import Status from './index';

describe('[Component] Status', () => {

    const defineStatus = (book, shelf) => console.log('Status Updated');
    const book = {
        id: 1,
        title: "Test Book"
    };
    const shelf = "read";

    const wrapper = shallow(<Status defineStatus={defineStatus} book={book} shelf={shelf} />);

    it('Display Status Component with props', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});