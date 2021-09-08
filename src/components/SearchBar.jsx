import React from 'react';

class SearchBar extends React.Component {
  render() {

    const { searchText, bookmarkedOnly, selectedGenre, onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input-text" data-testid="text-input-label">
          Inclui o texto:
          <input type="text" id="input-text" onChange={ onSearchTextChange } value={ searchText } />
        </label>

        <label htmlFor="input-checkbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input type="checkbox" id="input-checkbox" onChange={ onBookmarkedChange } checked={ bookmarkedOnly } />
        </label>
      </form>
    );
  }
}

export default SearchBar;
