// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange} = this.props;
    return (
      <div>
        <input type="text" />
      </div>);
  }
}

export default SearchBar;
