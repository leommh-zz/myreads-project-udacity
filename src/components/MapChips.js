import React from 'react';
import { Typography } from '@material-ui/core';
import Chips from './Chips';

const MapChips = props => {
    const { items, name } = props;

    return items ? (
        <div>
            <Typography variant="subtitle1" color="textSecondary"> 
                { name }
            </Typography>
            <Chips items={items} /> 
        </div>
    )
    : (
        ''
    )
}

export default MapChips;
