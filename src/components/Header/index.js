import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import style from './style';

const Header = () => (
    <Grid container direction="row">
        <Grid item>
            <Typography variant="subtitle1" style={style.title}> 
                MyReads
            </Typography> 
        </Grid>
    </Grid>
)

export default Header;