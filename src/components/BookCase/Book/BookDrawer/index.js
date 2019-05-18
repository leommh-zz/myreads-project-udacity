import React from 'react';
import { Drawer, Grid, Typography, Button } from '@material-ui/core';
import ReactStars from 'react-stars';
import ArrowBack from '@material-ui/icons/ArrowBack';
import MultiChips from '../../../MultiChips';
import Status from  '../../../Status';
import BookImage from '../BookImage';
import If from '../../../If';
import style from './style';

const BookDrawer = ({ data, data: {title, description, categories, authors, shelf, averageRating}, toggleDrawer, stateDrawer, defineStatus }) => (
    <Drawer anchor="right" open={stateDrawer} onClose={toggleDrawer(false)}>
        <Grid tabIndex={0} style={style.main}>
            <Grid container direction="column" spacing={8}>

                {/* Header Grid */}
                <Grid item>
                    <Button variant="fab" aria-label="Close" onClick={toggleDrawer(false)} style={style.close}>
                        <ArrowBack />
                    </Button>
                </Grid>
                <Grid item>
                    <Typography variant="h6" align="justify" style={style.title}>
                        {title}
                    </Typography>
                    <ReactStars
                        value={averageRating}
                        count={5}
                        edit={false}
                        size={25}
                        color2={'#ffd700'} 
                    />
                </Grid>   
                
                {/* Image Grid */}
                <Grid item>
                    <BookImage images={data.imageLinks} />
                </Grid>
                

                {/* Actions Grid */}
                <Grid item>

                    <Status defineStatus={defineStatus} book={data} shelf={shelf} />
                </Grid>

                {/* Information Grid */}
                <Grid item>
                    <Grid container direction="column" spacing={16}>

                        <MultiChips items={authors} name="Authors"/>
                        <MultiChips items={categories} name="Categories"/>  
                        <Grid item>
                            <If test={description}>
                                <Typography variant="subtitle1" align="justify" style={style.description}>
                                    <b>Description: </b> {description} 
                                </Typography>
                            </If>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
        </Grid>
    </Drawer>
)

export default BookDrawer;