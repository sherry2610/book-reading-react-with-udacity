import React from 'react';
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks';
import BookShelf from './BookShelf';
import {Route} from 'react-router-dom'
//import {updateNewShelf,removeOldShelf} from './functionRoom'

class BooksManager extends React.Component{
  state={
    books:[],
    current:[],
    want:[],
    read:[],
    }

// bookTransfer = (book,newShelf,oldShelf) =>{
//   const {current,want,read,books} = this.state;
// updateNewShelf(current,want,read,books,newShelf);
// removeOldShelf(current,want,read,books,newShelf)
// }    
    async componentDidMount(){
      const {current,want,read} = this.state;
      //console.log(books)
      const b = await BooksAPI.getAll()
        .then((book)=>{
          this.setState({books:book})  
          return book;
        });
      
      //console.log("before",this.state)
      b.forEach(b=>{
        if(b.shelf==="currentlyReading"){
          current.push(b);
          this.setState({current})
        }
      if(b.shelf==="wantToRead"){
        want.push(b);
        this.setState({want})
      }
      if(b.shelf==="read"){
        read.push(b);
        this.setState({read})
      }
      })
      //console.log("after",this.state)
    }
    
      
render(){
    
  const {current,want,read,books} = this.state;
    return (
    <div>
      
    <Route exact path="/" ><BookShelf booksOnShelf={{current,want,read}}/></Route>
    <Route path="/search" ><SearchBooks books={books}/></Route>
    </div> 
    
    )
}
}
export default BooksManager;