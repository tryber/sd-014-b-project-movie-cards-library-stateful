// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {searchText, onSearchTextChange, bookmarkedOnly } = this.props;
    const { onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <input type="text" />
        </form>
      </div>);
  }
}

export default SearchBar;
