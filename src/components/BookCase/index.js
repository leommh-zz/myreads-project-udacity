import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import Book from './Book';
import If from '../If';
import Loader from '../Loader';
import Style from './Style';

const BookCase = ({ title='', books, defineStatus, loading=false }) => (

    <Grid container direction="column" alignItems="center" style={Style.main}>
        
        <If test={title.length > 0}>
            <Grid item style={Style.bookCase}>
                <Paper style={Style.paper} elevation={1}>
                    <Typography variant="h5">
                        {title}
                    </Typography>
                </Paper>
            </Grid>
        </If>

        <Grid item style={Style.books}>
            <Grid container style={Style.booksGrid} spacing={8}>
                <If test={loading === true}>
                    <Loader />
                </If>
                { 
                    loading === false && books !== undefined ?
                    books.length > 0 && books.map((book) => (
                        <Grid key={book.id} item>
                            <Book data={book} defineStatus={defineStatus} />
                        </Grid>
                    ))
                    :
                    false
                }
                
            </Grid>
        </Grid> 

    </Grid>

)

export default BookCase;