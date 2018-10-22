import React from 'react';
import Book from './Book';

const BookCase = ({ type = '', books, defineStatus }) => (
    <div>
        <div className="bookshelf">
            <h2 className="bookshelf-title">{type}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    { books.length > 0 ? books.map((book) => (<Book key={book.id} data={book} defineStatus={defineStatus} />)) : false }
                </ol>
            </div>
        </div>
    </div>   
)

export default BookCase;