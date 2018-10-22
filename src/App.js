import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import AddBooks from './components/AddBooks';
import HomeBooks from './components/HomeBooks';

class BooksApp extends React.Component {

  state={
    books: {
      all: [],
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }

  /**
  * @description Update status book (currentlyReading, wantToRead, read)
  * @param {object} book - Book selected data
  * @param {string} shelf - New status to book (currentlyReading, wantToRead, read)
  * @returns {function} fetchAll
  */
  defineStatus = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => this.fetchAll())
  }

  
  /**
  * @description Update status book (currentlyReading, wantToRead, read)
  * @param {object} book - Book selected data
  * @param {string} shelf - New status to book (currentlyReading, wantToRead, read)
  * @returns {function} fetchAll
  */
  fetchAll = () => {
    BooksAPI.getAll()
    .then(res => {
      this.separateBooks(res);
    })
    .catch(error => console.log(error))
  }

  /**
  * @description Separate status of books in arrays
  * @param {object} book - Books data
  * @returns {object} New state books: 
      @param {array} currentlyReading - All books in the status currentlyReading
      @param {array} wantToRead - All books in the status wantToRead
      @param {array} read - All books in the status read
      @param {array} all - All books in the status currentlyReading, wantToRead and read
  */
  separateBooks = (books) => {
    const currentlyReading = books.filter(book => book.shelf==='currentlyReading');
    const wantToRead = books.filter(book => book.shelf==='wantToRead');
    const read = books.filter(book => book.shelf==='read');
    const all = books;

    this.setState(() => ({ books: { currentlyReading, wantToRead, read, all }}))  
  }


  componentDidMount(){
    this.fetchAll();
  }

  render() {
    const { state: { books }, defineStatus, separateBooks } = this
    return (
      <div className="app">
        
        <Route exact path='/search' render={() =>(
          <AddBooks 
            defineStatus={defineStatus} 
            booksUser={books} 
          />
        )}/>

        <Route exact path='/' render={() => (
          <HomeBooks 
            defineStatus={defineStatus}
            separateBooks={separateBooks}  
            booksUser={books}  
          />
        )}/>

      </div>
    )
  }
}

export default BooksApp
