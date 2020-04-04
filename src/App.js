import React from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksManager from './BooksManager'

class BooksApp extends React.Component {
  
  render() {
    return (
      <div className="app">
        <BooksManager />      
      </div>
    )
  }
}

export default BooksApp
