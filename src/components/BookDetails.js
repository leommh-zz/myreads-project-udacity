import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import If from './If';

class BookDetails extends Component {

    state={
        book: []
    }

    fecthBook = (id) => {
        BooksAPI.get(id)
        .then( book => this.setState( () => ({ book })) )
        .catch( error => console.log(error) )
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        this.fecthBook(id);
    }

    render(){
        const { book } = this.state;
        console.log('Book -> BookDetails: ', book)

        

        return(
            
            <div>
                <h2> Title: { book.title } </h2>
                <h2> Description: { book.description } </h2>
            </div>
 
        )
    }

}

export default BookDetails;