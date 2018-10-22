import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import BookDrawer from './BookDrawer';
import MapChips from './MapChips';


const styles = {
    card: {
        display: 'flex',
    },
    cardActionArea: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1',
        flexWrap: 'wrap',
    },
    cover: {
        width: 128,
        height: 193,
    },
    typography: {
        maxWidth: 300
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
        const { props: { data, data: {title, categories, authors}, defineStatus, classes}, state: { drawer }, toggleDrawer } = this;
        const imageDefault='https://openclipart.org/image/2400px/svg_to_png/211479/Simple-Image-Not-Found-Icon.png';
        const thumbnail = data.imageLinks ? data.imageLinks.thumbnail : imageDefault;

        return (
            <li>
                <Card className={classes.card}>
                    <CardActionArea className={classes.cardActionArea} onClick={ this.toggleDrawer('bottom', true) } >
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography className={classes.typography} variant="h6" noWrap={true}>
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

                <BookDrawer book={data} toggleDrawer={toggleDrawer} stateDrawer={drawer} defineStatus={defineStatus} />
            </li>
        );
    }
    
}

export default withStyles(styles)(Book);