import React, { Component } from 'react';
import { FormControl, Typography, Select, MenuItem } from '@material-ui/core';
 

const StatusInput = ({defineStatus, book, shelf}) => (

    <FormControl>
        <Typography variant="subtitle1" color="textSecondary"> 
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

export default StatusInput;