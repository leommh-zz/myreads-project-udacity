import React from 'react';
import { Grid, Button } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import style from './style';

const ButtonBack = () => (
    <Grid item>
        <Link to="/">
            <Button variant="fab" aria-label="Close" style={style.close}>
                <ArrowBack />
            </Button>
        </Link>
    </Grid>
)

export default ButtonBack;