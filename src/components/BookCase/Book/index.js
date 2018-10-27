import React, { Component } from 'react';
import { Card, CardActionArea, CardContent, Grid, Typography } from '@material-ui/core';
import BookDrawer from './BookDrawer';
import MultiChips from '../../MultiChips';
import BookImage from './BookImage';
import Style from './Style';

class Book extends Component{
    
    state={
        drawer: false,
    };

    toggleDrawer = (open) => () => {
        this.setState(() => ({ drawer: open }))
    };

    render(){
        const { props: {data, data: {title, categories}, defineStatus}, state: { drawer }, toggleDrawer } = this;

        return (
            <li>
                <Card style={Style.card}>
                    <CardActionArea style={Style.cardActionArea} onClick={ this.toggleDrawer(true) } >
                        <Grid container direction="row" justify="center" alignItems="center">
                            {/* Image Book Grid */}
                            <Grid item>
                                <BookImage images={data.imageLinks} />
                            </Grid>  

                            {/* Informations Book Grid */}
                            <Grid item style={Style.details}>
                                <CardContent style={Style.content}>
                                    <Typography style={Style.title} variant="h6" noWrap={true}>
                                        {title}
                                    </Typography>
                                    <MultiChips items={categories} name="Categories"/>
                                </CardContent>
                            </Grid>
                            
                        </Grid>
                    </CardActionArea>
                </Card>

                {/* BookDrawe component */}
                <BookDrawer 
                    data={data} 
                    toggleDrawer={toggleDrawer} 
                    stateDrawer={drawer} 
                    defineStatus={defineStatus} 
                />
            </li>
        );
    }
    
}

export default Book;