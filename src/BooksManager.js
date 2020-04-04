import React from 'react';
import SearchBooks from './SearchBooks';
import BookShelf from './BookShelf';
import {Route} from 'react-router-dom'

class BooksManager extends React.Component{
    
      
render(){
    

    return (
    <div>
    <Route exact path="/" ><BookShelf /></Route>
    <Route path="/search" ><SearchBooks /></Route>
    </div> 
    
    )
}
}
export default BooksManager;