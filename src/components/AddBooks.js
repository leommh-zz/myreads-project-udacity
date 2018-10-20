import React, { Component } from 'react';
import SearchInput from './SearchInput';
import BookCase from './BookCase';
import * as BooksAPI from '../BooksAPI';


class AddBooks extends Component{
    state = ({
        booksSearch: {},
        empty: false
    })

    search = (query) => {
        this.fetchQuery(query.target.value.trim())
    }

    fetchQuery = (query) => {
        BooksAPI.search(query)
        .then(res => this.separateBooks(res))
        .catch(() => this.setState( () => ({ empty: true }) ))
    }

    separateBooks = (books) => {
        const { booksUser } = this.props;
        console.log(this.props);
        // const separatedBooks = books.map(book => booksUser.filter( bookUser => ( bookUser.id !== book.id )));

        
        // console.log('Books -> AddBook: ', separatedBooks);
        this.setState( () => ({ booksSearch: books, empty: false }) )
    }

    render(){  
        const { search, state: { booksSearch, empty }, props: { defineState }}  = this;
        return(
            <div>
                <SearchInput search={search}  />
                <BookCase type='' books={booksSearch} empty={empty} defineState={defineState} />
            </div>
        );
    }
}

export default AddBooks;