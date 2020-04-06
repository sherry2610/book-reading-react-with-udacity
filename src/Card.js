import React from "react";

const imageNotFound = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/No_image_available_450_x_600.svg/768px-No_image_available_450_x_600.svg.png";

const Card = (props) => {
   
  return (
        <li key={props.book.title}>
          <div className="book">
            <div className="book-top">
            
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage:props.book.imageLinks.smallThumbnail?`url(${props.book.imageLinks.smallThumbnail}`:`url(${imageNotFound}`
                }}
              ></div>
              <div className="book-shelf-changer">
                <select value={props.book.shelf} onChange={(e)=>props.bookTransfer(props.book,e.target.value,props.shelf)}>
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
            {props.book.authors.map(author=>(
            <div key={author} className="book-authors">
              {author}
            </div>))}
          </div>
        </li>
  );
};
export default Card;
