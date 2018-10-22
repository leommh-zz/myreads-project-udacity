import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { Chips } from './Chips';

const MapChips = ({ items, name }) => (
    items ? (
        <Grid item>
            <Grid container>
                <Typography variant="subtitle1" color="textSecondary"> 
                    { name }
                </Typography> 
                <Chips items={ items } /> 
            </Grid>
        </Grid>
    ) : (
        false
    )
)

export default MapChips;
