import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
    onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search" data-testid="text-input-label">
          Inclui o texto
          <input id="search" type="text" data-testid="text-input" value={ searchText } onChange={ onSearchTextChange } />
        </label>
      </form>
    );
  }
}

export default SearchBar;
