import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const SearchResults = ({ books, bookTransfer }) => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => {
          return (
            <Card
              bookTransfer={bookTransfer}
              key={book.id}
              book={book}
            />
          );
        })}
      </ol>
    </div>
  );
};

SearchResults.prototype = {
  books: PropTypes.array.isRequired,
  bookTransfer: PropTypes.func.isRequired,
};

export default SearchResults;
