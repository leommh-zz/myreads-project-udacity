import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookCase from './BookCase';
import * as BooksAPI from '../BooksAPI';

class HomeBooks extends Component {
    
    render(){
        const { booksUser, defineState } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
    
                <div className="list-books-content">
                    <BookCase type='Currently Reading' books={booksUser.currentlyReading} empty={false} defineState={defineState} />
                    <BookCase type='Want to Read' books={booksUser.wantToRead} empty={false} defineState={defineState} />
                    <BookCase type='Read' books={booksUser.read} empty={false} defineState={defineState} />
                </div>
    
                <div className="open-search">
                    <Link to='/search' className='add-contact'>Add a book</Link>
                </div>
        </div>
        )
    }
    
}

export default HomeBooks;