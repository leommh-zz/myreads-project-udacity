import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {MapChips} from './Chips';
import If from '../If';
import Style from './Style';

const MultiChips = ({ items, name }) =>{
    return(
        // Tests whether items exist
        <If test={items}> 
            <Grid container item>
                <Typography variant="subtitle1" style={Style.typography}> 
                    {name}
                </Typography> 
                <MapChips items={items} Style={Style}/> 
            </Grid>
        </If>
    )
}

export default MultiChips;
