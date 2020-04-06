import React from "react";
import Card from "./Card";

const SearchResults = ({ books, bookTransfer }) => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book => {
          return (
            <Card bookTransfer={bookTransfer} key={book.id} book={book} />
          );
        })}
      </ol>
    </div>
  );
};


export default SearchResults;
