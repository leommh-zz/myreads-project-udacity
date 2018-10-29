import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'enzyme';
import App from './index';

describe('[Component] App', () => {
   
    const wrapper = render(
        <BrowserRouter>
            <App /> 
        </BrowserRouter> 
    );

    it('Display App Component Mount', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});