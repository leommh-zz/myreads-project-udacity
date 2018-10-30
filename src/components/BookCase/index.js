import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import Book from './Book';
import Loader from '../Loader';
import style from './style';

const BookCase = ({ title='', books, defineStatus, loading = false }) => (
    // 
    <Grid style={style.main}>
        {loading === true ? (
            <Loader />
        ) : (
            <Grid container direction="column" alignItems="center">
                { title !== '' && (
                    <Grid item style={style.bookCase}>
                        <Paper style={style.paper} elevation={1}>
                            <Typography variant="h5" style={style.title}>
                                {title}
                            </Typography>
                        </Paper>
                    </Grid>
                )}

                <Grid item style={style.books}>
                    <Grid container style={style.booksGrid} spacing={8}>
                        {loading === false && books !== undefined && (
                            console.log(books),
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