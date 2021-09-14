import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="Inclui o texto:" data-testid="text-input-label">
          <input
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input">
          </input>
        </label>
      </form>
    );
  }
}

export default SearchBar;
