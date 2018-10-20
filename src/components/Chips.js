import React from 'react'
import { Chip } from '@material-ui/core';

const Chips = props => {
    const { items } = props;
    return items ? items.map( item => <Chip label={item}/> ) : ''
}

export default Chips;
