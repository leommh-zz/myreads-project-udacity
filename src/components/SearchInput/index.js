import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import {DebounceInput} from 'react-debounce-input';
import style from './style';

const SearchInput = ({ search }) => (
    <Grid item style={style.grid}>
        <Paper style={style.input} elevation={1}>
            <DebounceInput
                debounceTimeout={500}
                placeholder="Search"
                style={style.input}
                onChange={query => search(query.target.value)} 
            />
        </Paper>
    </Grid>
)

export default SearchInput;