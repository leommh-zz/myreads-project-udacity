import React from 'react';
import { Chip, Grid } from '@material-ui/core';

export const MapChips = ({ items, Style }) => (
    //Tests whether items exist
    items ? (
        <Grid container direction="row" spacing={8}>
            {items.map( item => (
                <Grid item key={item}>
                    <Chip label={item} style={Style.chip}/>
                </Grid>
            ))}
        </Grid>
    ) : ( 
        false 
    )

)

export const ItemChip = ({ item, Style }) => (
    //Tests whether items exist
    item ? (
        <Grid>
            <Chip label={item} style={Style.chip}/>
        </Grid>
    ) : (
        <Grid>
            <Chip label='None' style={Style.chip}/>
        </Grid>
    )
)


