import React from 'react';

class SearchBar extends React.Component {
  render() {

    const { searchText, bookmarkedOnly, selectedGenre, onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input-includes" data-testid="text-input-label">
          Inclui o texto:
          <input type="text" id="input-includes" onChange={ onSearchTextChange } value={ searchText } />
        </label>
      </form>
    );
  }
}

export default SearchBar;
