import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Card from './Card'

class BookShelf extends Component{
    render(){
      const {current,want,read} = this.props.booksOnShelf;
        return(
          <div className="app">
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  
    <div className="bookshelf-books">
      <ol className="books-grid">
                  {current.map(current=><Card book={current} key={current.id} />)}
                  </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {want.map(want=><Card book={want} key={want.id} />)}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {read.map(read=><Card book={read} key={read.id} />)}
                                        </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
            <Link to='/search'><button>Add a book</button></Link>
            </div>
          </div>  
          </div>
        )
    }
}

export default BookShelf