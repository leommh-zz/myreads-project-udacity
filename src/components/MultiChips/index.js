import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {MapChips} from './Chips';
import If from '../If';
import style from './style';

const MultiChips = ({ items, name }) =>{
    return(
        // Tests whether items exist
        <If test={items}> 
            <Grid container item>
                <Typography variant="subtitle1" style={style.typography}> 
                    {name}
                </Typography> 
                <MapChips items={items} style={style}/> 
            </Grid>
        </If>
    )
}

export default MultiChips;
