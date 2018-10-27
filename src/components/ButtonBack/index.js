import React from 'react';
import { Grid, Button } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import Style from './Style';

const ButtonBack = () => (
    <Grid item>
        <Link to="/">
            <Button variant="fab" aria-label="Close" style={Style.close}>
                <ArrowBack />
            </Button>
        </Link>
    </Grid>
)

export default ButtonBack;