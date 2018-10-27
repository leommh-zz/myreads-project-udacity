import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Style from './Style';

const Header = () => (
    <Grid container direction="row">
        <Grid item>
            <Typography variant="subtitle1" style={Style.title}> 
                MyReads
            </Typography> 
        </Grid>
    </Grid>
)

export default Header;