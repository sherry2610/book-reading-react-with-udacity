import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    props?
    <li key={props.book.title}>
      
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:`url(${
                props.book.imageLinks
                  ? props.book.imageLinks.smallThumbnail
                  : ""
              })`
              
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={props.book.shelf || "none"}
              onChange={(e) =>
                props.bookTransfer(
                  props.book,
                  e.target.value,
                  props.book.shelf || "none"
                )
              }
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        {props.book.authors &&
          props.book.authors.map((author) => (
            <div key={author} className="book-authors">
              {author}
            </div>
          ))}
      </div>
    </li>:'keyword is invalid'
  );
};

Card.prototype = {
  key: PropTypes.string.isRequired,
  bookTransfer: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
};

export default Card;
