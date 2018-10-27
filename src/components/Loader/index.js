import React from 'react';
import {CircularProgress, Grid} from '@material-ui/core';
import Style from './Style';

const Loader = () => (
    <Grid
        item 
        container   
        direction="row"
        justify="center"
        alignItems="center"
        style={Style.main}
    >  
        <Grid item>
            <CircularProgress style={Style.loading} thickness={7} />
        </Grid>
    </Grid>  
)

export default Loader;