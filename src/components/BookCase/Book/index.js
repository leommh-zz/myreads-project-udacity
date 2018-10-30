import React, { PureComponent } from 'react';
import { Card, CardActionArea, CardContent, Grid, Typography } from '@material-ui/core';
import ReactStars from 'react-stars';
import BookDrawer from './BookDrawer';
import MultiChips from '../../MultiChips';
import BookImage from './BookImage';
import style from './style';

class Book extends PureComponent{
    
    state={
        drawer: false,
    };

    toggleDrawer = (open) => () => {
        this.setState(() => ({ drawer: open }))
    };

    render(){
        const { props: {data, data: {title, categories, averageRating}, defineStatus}, state: { drawer }, toggleDrawer } = this;
        return (
            <li>
                <Card style={style.card}>
                    <CardActionArea style={style.cardActionArea} onClick={ this.toggleDrawer(true) } >
                        <Grid container direction="row" justify="center" alignItems="center">
                            {/* Image Book Grid */}
                            <Grid item>
                                <BookImage images={data.imageLinks} />
                            </Grid>  

                            {/* Informations Book Grid */}
                            <Grid item style={style.details}>
                                <CardContent style={style.content}>
                                    <Typography style={style.title} variant="h6" noWrap={true}>
                                        {title}
                                    </Typography>
                                    <ReactStars
                                        value={averageRating}
                                        count={5}
                                        edit={false}
                                        size={25}
                                        color2={'#ffd700'} 
                                    />
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