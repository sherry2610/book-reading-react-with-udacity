import React from 'react';
import {update,getAll} from './BooksAPI'
import SearchBooks from './SearchBooks';
import BookShelf from './BookShelf';
import {Route} from 'react-router-dom'
import {updateNewShelf,removeOldShelf} from './functionRoom'



class BooksManager extends React.Component{
  state={
    books:[],
    current:[],
    want:[],
    read:[],
    }
    

getData=async ()=>{
  const {current,want,read} = this.state;

      const Books = await getAll();
      
      Books.forEach(book => {
        switch (book.shelf) {
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
      });
      this.setState({
        current,
        want,
        read
      });
}


    componentDidMount(){
      this.getData()
    }
    

    bookTransfer = async (book,newShelf,oldShelf) =>{
      const {current,want,read} = this.state;
      updateNewShelf(current,want,read,book,newShelf);
      removeOldShelf(current,want,read,book,oldShelf);
      this.setState({
        current,
        want,
        read
      })
      //TODO:update server
      await update(book,newShelf)
      
      }          
render(){
    
  const {current,want,read,books} = this.state;
    return (
    <div>
      
    <Route exact path="/" ><BookShelf booksOnShelf={{current,want,read,books}} bookTransfer={this.bookTransfer} shelfHeading={["Currently Reading","Want To Read","Read"]}/></Route>
    <Route path="/search" ><SearchBooks books={books} bookTransfer={this.bookTransfer}/></Route>
    </div> 
    
    )
}
}
export default BooksManager;