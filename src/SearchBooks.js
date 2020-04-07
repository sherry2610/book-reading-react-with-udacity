import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search, getAll } from "./BooksAPI";
import SearchResults from "./SearchResults";
import PropTypes from "prop-types";

const initialState = {
  books: [],
  noResults: false,
  booksToSetStatus: [],
  query: "",
};

class SearchBooks extends Component {
  static propTypes = {
    bookTransfer: PropTypes.func.isRequired,
    booksOnShelf: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  async componentDidMount() {
    const { booksOnShelf } = this.props;
    if (booksOnShelf.length === 0) {
      const books = await getAll();
      this.setBooksToSetStatus([...books]);
    } else {
      this.setBooksToSetStatus([...booksOnShelf]);
    }
  }

  setBooksToSetStatus = (booksToSetStatus) => {
    this.setState({
      booksToSetStatus,
    });
  };

  search = (query) => {
    this.setState(
      {
        query: query,
      },
      async () => {
        try {
          const results = await search(query.trim());
          this.setState(() => {
            if (results !== undefined && !results.error) {
              return {
                books: results.filter((book) =>
                  this.state.booksToSetStatus.map((shelfBook) => {
                    if (shelfBook.id === book.id) {
                      return (book.shelf = shelfBook.shelf);
                    }
                    return book;
                  })
                ),
                noResults: false,
              };
            }
            return {
              books: [],
              noResults: true,
            };
          });
        } catch (error) {
          console.log("error", error);
        }
      }
    );
  };

  render() {
    const { books, noResults, query } = this.state;
    return (
      <div className="app">
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                value={query}
                onChange={(e) => this.search(e.target.value)}
                placeholder="Search by title or author"
              />
            </div>
          </div>
          <div className="search-books-results">
            {noResults && query !== "" ? (
              <p className="no-results">No results found...</p>
            ) : (
              <ol className="books-grid">
                <SearchResults
                  bookTransfer={this.props.bookTransfer}
                  books={books}
                />
              </ol>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
