import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import {Grid} from '@material-ui/core';
import {debounce} from 'throttle-debounce';
import Header from '../components/Header';
import BookAdd from '../pages/BookAdd';
import Home from '../pages/Home';
import Style from './Style';

class BooksApp extends React.Component {

  /**
   * @description - Aplication state
   * @var {object} books - All classified books and their divisions
   * @var {string} searchQuery - Input search content   
   * @var {array} booksSearch - All books searched
   * @var {string} title - Personalized Title of each BookCase
   * @var {boolean} loading - Application load state
   */
  state = {
    books: {
      all: [],
      currentlyReading: [],
      wantToRead: [],
      read: []
    },
    searchQuery: '',
    booksSearch: [],
    title: '',
    loading: true,
  }

  /**
  * @description - Update status book (currentlyReading, wantToRead, read)
  * @param {object} book - Book selected data
  * @param {string} shelf - New status to book (currentlyReading, wantToRead, read)
  * @returns {function} - Execute the function fetchAll and performs the search again to 
  * refresh the updated book in the search screen
  */
  defineStatus = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => this.fetchAll())
    .then(() => this.search(this.state.searchQuery))
  }
  
  /**
  * @description - Brings all classified (currentlyReading, wantToRead, read) books 
  * @returns {function} - Executes the function separateBooks passing the books brought by API
  */
  fetchAll = () => {
    this.setState({ loading: true })
    BooksAPI.getAll()
    .then(res => {
      this.separateBooks(res);
    })
    .catch(error => console.log(error))
  }

  /**
  * @description - Separate status (currentlyReading, wantToRead, read) of books in arrays
  * @param {object} books - Books 
  * @returns {object} - New state books: 
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

    this.setState(() => ({books: {currentlyReading, wantToRead, read, all}, loading: false}))  
  }

  /**
  * @description - Search the books
  * @param {string} query - Input search value
  * @returns {function} - If the parameter is empty it will execute the function 
  * fetchNone clean the books and the search screen, otherwise it will execute the 
  * fetchSearch function passing the parameter 
  */
  search = (query) => {
    this.setState({searchQuery: query, loading: true}, () => {
      console.log(this.state.searchQuery);
      const fetchSearch = debounce(500, this.fetchSearch);
      const fetchNone = debounce(500, () => this.setState({ booksSearch: [], loading: false }))
      query === '' ? (
        fetchNone()
      ) : (
        fetchSearch(query)
      )
    });
  }

  /**
    * @description - Use API Search books
    * @param {string} searchQuery - Search query value
    * @returns {function} - If the API succeeds in fetching the query then it will call the 
    * booksAddShelf function and pass the purely searched books, otherwise it will display 
    * an error message updating the state
  */
  fetchSearch = (searchQuery) => {
    BooksAPI.search(searchQuery)
    .then(booksPure => this.booksAddShelf(booksPure))
    .catch(() => this.setState({ booksSearch: {}, title: 'Books not found!', loading: false }))  
  }

  /**
    * @description - Filters the pure books and adds the shelf property to books that have already been sorted by the user
    * @param {array} books - Pure books response of API
    * @returns {array} - Returns a new state for the booksSearch array that now contains the 
    * searched books that have not been sorted and also those that have been sorted
  */
  booksAddShelf = (booksPure) => {
    const { books } = this.state;
    const booksSearch = booksPure.filter( bookPure => books.all.map( book =>
      bookPure.id === book.id ? ( 
        bookPure.shelf = book.shelf 
      ) : (
        bookPure
      )
    ));
    this.setState({ booksSearch, title: '', loading: false });
  }

  /**
    * @description - Search for classified books when the application starts
  */
  componentDidMount(){
    this.fetchAll();
  }

  render() {
    const { state: { books, booksSearch, loading, title }, defineStatus, separateBooks, search } = this
    return (
      <Grid container direction="column" alignItems="center" style={Style.main}>
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          <Route exact path='/search' render={() =>(
            <BookAdd 
              defineStatus={defineStatus} 
              booksUser={books} 
              loading={loading}
              booksSearch={booksSearch}
              search={search}
              title={title}
            />
          )}/>
        
          <Route exact path='/' render={() => (
            <Home 
              defineStatus={defineStatus}
              separateBooks={separateBooks}  
              booksUser={books}  
              loading={loading}
            />
          )}/>
        </Grid>
      </Grid>
    )
  }
}

export default BooksApp;
