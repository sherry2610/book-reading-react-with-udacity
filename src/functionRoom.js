


export const updateNewShelf = (current, want, read, book, newShelf) => {
  book.shelf = newShelf;
  switch (newShelf) {
    case "currentlyReading":
      current.push(book);
      break;
    case "wantToRead":
      want.push(book);
      break;
    case "read":
      read.push(book);
      break;
    default:
      break;
  }
};

export const removeOldShelf = (current, want, read, book, oldShelf) => {
    switch (oldShelf) {
        case "currentlyReading":
          current.splice(current.map(b=>b.id).indexOf(book.id),1);
          break;
        case "wantToRead":
          want.splice(want.map(b=>b.id).indexOf(book.id),1);
          break;
        case "read":
          read.splice(read.map(b=>b.id).indexOf(book.id),1);
          break;
        default:
          break;
      }
};

