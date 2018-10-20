import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import AddBooks from './components/AddBooks';
import HomeBooks from './components/HomeBooks';
import BookDetails from './components/BookDetails';


class BooksApp extends React.Component {

  state={
    books: {
      all: [],
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }


  //Update State Book
  defineState = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => this.fetchAll())
  }

  //Fetch pure data API
  fetchAll = () => {
    BooksAPI.getAll()
    .then(res => {
      this.separateBooks(res);
    })
    .catch(error => console.log(error))
  }

  //Separate state pure data API
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
    // console.log('Estado', this.state)
    const {state: { books }, defineState, separateBooks} = this
    
    return (
      <div className="app">
        
        <Route exact path='/search' render={() =>(
          <AddBooks 
            defineState={defineState} 
            booksUser={books} 
          />
        )}/>

        <Route exact path='/' render={() => (
          <HomeBooks 
            defineState={defineState}
            separateBooks={separateBooks}  
            booksUser={books}  
          />
        )}/>

        <Route exact path='/book/:id' component={ (props) =>  <BookDetails {...props} />  }/>
      </div>
    )
  }
}

export default BooksApp
