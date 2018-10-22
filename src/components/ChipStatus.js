import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { ChipItem } from './Chips';

const ChipStatus = ({ item }) => (
    item ? (
        <Grid item> 
            <Typography variant="subtitle1" color="textSecondary"> 
                Status
            </Typography> 
            <ChipItem item={item} />
        </Grid> 
    ) : (
        false
    )  
)

export default ChipStatus;
