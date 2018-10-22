import React from 'react';
import { Link } from 'react-router-dom';
import BookCase from './BookCase';

const HomeBooks = ({ booksUser, defineStatus }) => (
    <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
            <BookCase type='Currently Reading' books={booksUser.currentlyReading} empty={false} defineStatus={defineStatus} />
            <BookCase type='Want to Read' books={booksUser.wantToRead} empty={false} defineStatus={defineStatus} />
            <BookCase type='Read' books={booksUser.read} empty={false} defineStatus={defineStatus} />
        </div>

        <div className="open-search">
            <Link to='/search' className='add-contact'>Add a book</Link>
        </div>
    </div>
)

export default HomeBooks;