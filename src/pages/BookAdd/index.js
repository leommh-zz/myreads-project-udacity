import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import SearchInput from '../../components/SearchInput';
import ButtonBack from '../../components/ButtonBack';
import BookCase from '../../components/BookCase';
import Style from './Style';

class BookAdd extends Component{
    /**
     * @constructor 
     * @description - Clean screen search!
     */
    constructor(props){
        super(props);
        const { search } = props;
        search('');
    }

    render(){
        const { defineStatus, loading, title, booksSearch, search } = this.props;
        return (
            <Grid 
            container 
            style={Style.main}  
            direction="column" 
            justify="center"
            alignItems="center" 
        >
            <Grid item>
                <ButtonBack />
            </Grid>
            <Grid item>
                <SearchInput search={search}  />
            </Grid>
            <Grid item>
                <BookCase title={title} books={booksSearch} defineStatus={defineStatus} loading={loading} /> 
            </Grid>
        
        </Grid>
        );
    }

} 

export default BookAdd;