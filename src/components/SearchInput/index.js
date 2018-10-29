import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import {DebounceInput} from 'react-debounce-input';
import Style from './Style';

const SearchInput = ({ search }) => (
    <Grid item style={Style.grid}>
        <Paper style={Style.input} elevation={1}>
            <DebounceInput
                debounceTimeout={500}
                placeholder="Search"
                style={Style.input}
                onChange={query => search(query.target.value)} 
            />
        </Paper>
    </Grid>
)

export default SearchInput;