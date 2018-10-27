import React from 'react';
import { FormControl, Typography, Select, MenuItem } from '@material-ui/core';
import Style from './Style';

const Status = ({ defineStatus, book, shelf }) => (
    <FormControl style={Style.status}>
        <Typography variant='subtitle1' style={Style.title}> 
            Status
        </Typography> 
        <Select
            value={shelf || 'none'}
            onChange={(e) => defineStatus(book, e.target.value)}
        >
            <MenuItem value='none'><em>None</em></MenuItem>
            <MenuItem value='currentlyReading'>Currently Reading</MenuItem>
            <MenuItem value='wantToRead'>Want to Read</MenuItem>
            <MenuItem value='read'>Read</MenuItem>
        </Select>
    </FormControl>
)

export default Status;