import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, Chip, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import BookDrawer from './BookDrawer';
import MapChips from './MapChips';

const styles = {
    card: {
        display: 'flex',
    },
    CardActionArea: {
        display: 'flex',
        maxWitdh: 300
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 128,
        height: 193,
    },
};

  

class Book extends Component{
    
    state = {
        drawer: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState( () => ({ drawer: open }) )
    };

    render(){
        const { props: { data, data: {title, categories, authors, shelf}, defineState, classes}, state: { drawer }, toggleDrawer, mapChips } = this;
        const imageDefault='https://openclipart.org/image/2400px/svg_to_png/211479/Simple-Image-Not-Found-Icon.png';
        const thumbnail = data.imageLinks ? data.imageLinks.thumbnail : imageDefault;

        return (
            <li>
                <Card className={classes.card}>
                    <CardActionArea className={classes.CardActionArea} onClick={ this.toggleDrawer('bottom', true) } >
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h1" variant="h6">
                                    {title}
                                </Typography>
                                <MapChips items={authors} name='Authors'/>
                                <MapChips items={categories} name='Categories' />
                            </CardContent>
                        </div>
                        <CardMedia
                            className={classes.cover}
                            image={thumbnail}                        
                            title={title}
                        />
                    </CardActionArea>
                </Card>

                <BookDrawer book={data} toggleDrawer={toggleDrawer} stateDrawer={drawer} />
            </li>
        );
    }
    
}

export default withStyles(styles)(Book);