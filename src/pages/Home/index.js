import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import BookCase from '../../components/BookCase';
import Loader from '../../components/Loader';
import If from '../../components/If';
import style from './style';

const Home = ({ booksUser, defineStatus, loading }) => (

    <Grid container style={style.main}>
        {/* Loading Screen */}
        <If test={loading === true}>
          <Loader />
        </If>

        {/* Books Screen */}
        <If test={loading === false}>
            <Grid item style={style.bookCase}>
                <BookCase title="Currently Reading" books={booksUser.currentlyReading} empty={false} defineStatus={defineStatus} />
                <BookCase title="Want to Read" books={booksUser.wantToRead} empty={false} defineStatus={defineStatus} />
                <BookCase title="Read" books={booksUser.read} empty={false} defineStatus={defineStatus} />
            </Grid>

            <Grid item container justify="flex-end" style={style.openSearch}>
                <Link to="/search" className="add-contact">
                    <Button variant="fab" aria-label="Close" style={style.add}>
                        <Add />
                    </Button>
                </Link>
            </Grid>
        </If>

    </Grid>
)

export default Home;