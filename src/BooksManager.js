import React from 'react';
import SearchBooks from './SearchBooks';
import BookShelf from './BookShelf';

class BooksManager extends React.Component{
    state = {
        showSearchPage: false,
      }

      closeSearch=()=>{
          this.setState({showSearchPage:false});
      }
      openSearch=()=>{
        this.setState({ showSearchPage: true });
      }
    
render(){
    const ui = this.state.showSearchPage;
    return (
         ui ? (<SearchBooks closeSearch={this.closeSearch} />) : (
            <BookShelf openSearch={this.openSearch} />
          )        
    )
}
}
export default BooksManager;