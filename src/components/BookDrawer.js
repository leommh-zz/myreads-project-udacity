import React from 'react';
import { Drawer, Grid, Typography, Button } from '@material-ui/core';
import MapChips from './MapChips';
import ChipStatus from './MapChips';
import StatusInput from  './StatusInput';

const BookDrawer = ({ book, book: { title, description, categories, authors, shelf }, toggleDrawer, stateDrawer, defineStatus }) => {
    const imageDefault='https://openclipart.org/image/2400px/svg_to_png/211479/Simple-Image-Not-Found-Icon.png';
    const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : imageDefault;
    return(

        <Drawer anchor="right" open={stateDrawer} onClose={toggleDrawer('right', false)}>
            <Grid tabIndex={0} style={{padding: 20}}>
                <Grid container direction="column" spacing={8}>

                    <Grid item container direction="column" spacing={8}>
                        <Grid item>
                            <Button color="default" aria-label="Close" onClick={toggleDrawer('right', false)}>
                                X
                            </Button>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">
                                {title}
                            </Typography>
                        </Grid>   
                    </Grid>

                    {/* Image Grid */}
                    <Grid item>
                        <img src={ thumbnail } alt={title} />
                    </Grid>

                    {/* Actions Grid */}
                    <Grid item>
                        <StatusInput defineStatus={defineStatus} book={book} shelf={shelf} />
                    </Grid>

                    {/* Information Grid */}
                    <Grid item xs>
                        <Grid container direction="column">
                    
                            <Grid item container>    
                                <MapChips items={authors} name='Authors'/>
                                <MapChips items={categories} name='Categories' />
                                <ChipStatus item={shelf} />              
                            </Grid>
                            
                            
                            <Grid item style={{maxWidth: 400}}>
                                <p>
                                    Description: {description || 'Not Found!'} 
                                </p>
                            </Grid>
                        </Grid>
                        
                    </Grid>



                </Grid>
            </Grid>
        </Drawer>
    );
}

export default BookDrawer;