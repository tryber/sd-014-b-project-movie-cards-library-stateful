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
          <label
            htmlFor="searchBox"
            data-testid="text-input-label"
          >
            Inclui o texto:
            <input
              id="searchBox"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>

          <label
            htmlFor="checkBox"
            data-testid="checkbox-input-label"
          >
            Mostrar somente favoritos
            <input
              id="checkBox"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
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