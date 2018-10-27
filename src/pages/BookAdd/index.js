import React from 'react';
import { Grid } from '@material-ui/core';
import SearchInput from '../../components/SearchInput';
import ButtonBack from '../../components/ButtonBack';
import BookCase from '../../components/BookCase';
import Style from './Style';

const BookAdd = ({ defineStatus, loading, title, booksSearch, search }) => (
    <Grid 
        container 
        style={Style.main}  
        direction="column" 
        justify="center"
        alignItems="center" 
        spacing={32}
    >
        <ButtonBack />
        <SearchInput search={search}  />
        <BookCase title={title} books={booksSearch} defineStatus={defineStatus} loading={loading} /> 
    </Grid>
)


export default BookAdd;