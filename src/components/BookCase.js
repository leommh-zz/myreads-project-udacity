import React from 'react';
import Book from './Book';

const BookCase = ({ type, books, empty, defineState }) => {
    
    return books !== undefined && books.length > 0 && empty === false ? (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{type}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        { books.map((book) => (<Book key={book.id} data={book} defineState={defineState} />)) }
                    </ol>
                </div>
            </div>
        </div>      
    ) : empty === true ? (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{type}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>Book Not Found</li>  
                    </ol>
                </div>
            </div>            
        </div>    
    ) : (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{type}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li></li>  
                    </ol>
                </div>
            </div>            
        </div>    
    ) 
}

export default BookCase;