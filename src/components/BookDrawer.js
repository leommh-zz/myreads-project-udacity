import React from 'react';
import { Drawer, Grid } from '@material-ui/core';

const BookDrawer = props => {
    const { book, book: { title, description }, toggleDrawer, stateDrawer } = props;
    return(

        <Drawer
        anchor="bottom"
        open={stateDrawer}
        onClose={toggleDrawer('bottom', false)}
        >
            <div
                tabIndex={0}
                role="button"
                onClick={toggleDrawer('bottom', false)}
                onKeyDown={toggleDrawer('bottom', false)}
                style={{padding: 20}}
            >
                
                 <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <h2>{ title }</h2>
                        <p>Description: { description }</p>
                        
                    </Grid>
                </Grid>
            </div>
        </Drawer>
    );
}

export default BookDrawer;