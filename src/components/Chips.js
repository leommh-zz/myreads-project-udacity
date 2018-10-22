import React from 'react'
import { Chip, Grid } from '@material-ui/core';

export const Chips = ({ items }) => (
    items ? (
        <Grid container direction="row" spacing={8}>
            { items.map( item => (
                <Grid item key={ item }>
                    <Chip label={ item }/>
                </Grid>
            )) }
        </Grid>
    ) : (
        false
    )
)

export const ChipItem = ({ item }) => (
    item ? (
        <Grid>
            <Chip label={ item }/>
        </Grid>
    ) : (
        <Grid>
            <Chip label='None'/>
        </Grid>
    )
)
