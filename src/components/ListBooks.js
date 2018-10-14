import React from 'react';
import { Link } from 'react-router-dom';
import GroupBooks from './GroupBooks';

const ListBooks = (props) => {


    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
                <GroupBooks group="reading" />
                <GroupBooks group="want" />
                <GroupBooks group="want" />
            </div>

            <div className="open-search">
                <Link to='/add-book' className='add-contact'>Add a book</Link>
            </div>
    </div>
    )
}

export default ListBooks;