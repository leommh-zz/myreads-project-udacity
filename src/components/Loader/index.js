import React from 'react';
import {CircularProgress, Grid} from '@material-ui/core';
import style from './style';

const Loader = () => (
    <Grid
        item 
        container   
        direction="row"
        justify="center"
        alignItems="center"
        style={style.main}
    >  
        <Grid item>
            <CircularProgress style={style.loading} thickness={7} />
        </Grid>
    </Grid>  
)

export default Loader;