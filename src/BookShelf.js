import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

class BookShelf extends Component {
  render() {
    const { current, want, read } = this.props.booksOnShelf;
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">
                  {this.props.shelfHeading[0]}
                </h2>

                <div className="bookshelf-books" key={this.props.shelfHeading[0]}>
                  <ol className="books-grid">
                    {current.map((current) => (
                      <Card
                        key={current.id}
                        book={current}
                        bid={current.id}
                        bookTransfer={this.props.bookTransfer}
                      />
                    ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf" >
                <h2 className="bookshelf-title">
                  {this.props.shelfHeading[1]}
                </h2>
                <div className="bookshelf-books" key={this.props.shelfHeading[1]}>
                  <ol className="books-grid">
                    {want.map((want) => (
                      <Card
                        key={want.id}
                        book={want}
                        bid={want.id}
                        bookTransfer={this.props.bookTransfer}
                      />
                    ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf" key={this.props.shelfHeading[2]}>
                <h2 className="bookshelf-title">
                  {this.props.shelfHeading[2]}
                </h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {read.map((read) => (
                      <Card
                        key={read.id}
                        book={read}
                        bid={read.id}
                        bookTransfer={this.props.bookTransfer}
                      />
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">
              <button>Add a book</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BookShelf;
