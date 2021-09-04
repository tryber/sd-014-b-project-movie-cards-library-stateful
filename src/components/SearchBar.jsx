import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid='text-input-label'>
            Inclui o texto:
            <input
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid='text-input'
            />
          </label>
        </form>

        <span>{ bookmarkedOnly }</span>
        <span>{ onBookmarkedChange }</span>
        <span>{ selectedGenre }</span>
        <span>{ onSelectedGenreChange }</span>

      </div>
    );
  }
}

export default SearchBar