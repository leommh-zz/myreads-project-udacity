import React from 'react';
import { FormControl, Typography, Select, MenuItem } from '@material-ui/core';
import style from './style';

const Status = ({ defineStatus, book, shelf }) => (
    <FormControl style={style.status}>
        <Typography variant='subtitle1' style={style.title}> 
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