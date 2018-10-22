import React, { Component } from 'react';
import SearchInput from './SearchInput';
import BookCase from './BookCase';
import * as BooksAPI from '../BooksAPI';


class AddBooks extends Component{
    state = ({
        booksSearch: {},
        query: ''
    })

    /**
    * @description Search books
    * @param {string} query - Input search value
    * @returns {function} FetchQuery
    */
    search = (query) => {
        this.fetchQuery(query.target.value.trim())
    }

    /**
    * @description Utilize API Search books
    * @param {string} query - Input search value
    * @returns {function} Response API books search
    */
    fetchQuery = (query) => {
        BooksAPI.search(query)
        .then(books => this.booksAddShelf(books, query))
        .catch((error) => console.log(error))
    }

    /**
    * @description Filter books - shelf
    * @param {array} books - Books fetchQuery response
    * @returns {array} New state booksSearch:
    */
    booksAddShelf = (books, query) => {
        const { booksUser } = this.props;
        const booksSearch = books.filter( book => booksUser.all.map( bookUser =>
            book.id === bookUser.id ? ( 
                book.shelf = bookUser.shelf 
            ) : (
                book
            )
        ));
        this.setState( () => ({ booksSearch, query }));
    }

    componentWillReceiveProps(){
        const { state: { query }, fetchQuery  } = this;
        fetchQuery(query);
    }

    render(){  
        console.log('renderizou')
        const { state: { booksSearch }, props: { defineStatus }, search }  = this;
        return(
            <div>
                <SearchInput search={ search }  />
                <BookCase books={ booksSearch } defineStatus={ defineStatus } />
            </div>
        );
    }
}

export default AddBooks;