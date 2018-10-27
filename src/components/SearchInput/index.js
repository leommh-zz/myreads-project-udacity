import React from 'react';
import { Grid, TextField, Paper } from '@material-ui/core';
import Style from './Style';

const SearchInput = ({ search }) => (
    <Grid item>
        <Paper style={Style.input} elevation={1}>
            <TextField
                id="search"
                label="Search"
                onChange={(query) => search(query.target.value)}
            />
        </Paper>
    </Grid>
)

export default SearchInput;