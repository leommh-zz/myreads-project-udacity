import React from 'react';
import { CardMedia } from '@material-ui/core';
import style from './style';

const BookImage = ({ images='' }) => {
    const thumbnail = images.thumbnail !== undefined ? images.thumbnail : 'https://i.imgur.com/GZYl7cN.png';

    return (
        <CardMedia
            style={style.cover}
            image={thumbnail}    
            src="img"                    
        /> 
    )
}

export default BookImage;