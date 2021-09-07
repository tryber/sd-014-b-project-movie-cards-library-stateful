import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends Component {
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
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto
            <input
              type="text"
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>

          <label htmlFor="checkbox-input" data-testid="checkbox-input-label"> 
          Mostrar somente favoritos
            <input
               type="checkbox"
               data-testid="checkbox-input"
               checked={ bookmarkedOnly }
               onChange={ onBookmarkedChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
