import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import Book from './Book';
import Loader from '../Loader';
import Style from './Style';

const BookCase = ({ title='', books, defineStatus, loading = false }) => (
    // 
    <Grid style={Style.main}>
        {loading === true ? (
            <Loader />
        ) : (
            <Grid container direction="column" alignItems="center">
                { title !== '' && (
                    <Grid item style={Style.bookCase}>
                        <Paper style={Style.paper} elevation={1}>
                            <Typography variant="h5" style={Style.title}>
                                {title}
                            </Typography>
                        </Paper>
                    </Grid>
                )}

                <Grid item style={Style.books}>
                    <Grid container style={Style.booksGrid} spacing={8}>
                        {loading === false && books !== undefined && (
                            books.length > 0 && books.map((book) => (
                                <Grid key={book.id} item>
                                    <Book data={book} defineStatus={defineStatus} />
                                </Grid>
                            ))
                        )}
                    </Grid>
                </Grid> 
            </Grid>
        )}
    </Grid>  

)

export default BookCase;