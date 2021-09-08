import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  // noooo comitei na master
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
        <span>{ searchText }</span>
        <span>{ onSearchTextChange }</span>
        <span>{ bookmarkedOnly }</span>
        <span>{ onBookmarkedChange }</span>
        <span>{ selectedGenre }</span>
        <span>{ onSelectedGenreChange }</span>
        <form data-testid="search-bar-form">

          <label data-testid="text-input-label" htmlFor="text-input">
            Inclui o texto
            <input
              data-testid="text-input"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>

          <label data-testid="checkbox-input-label" htmlFor="checbox-input">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>

          <label data-testid="select-input-label" htmlFor="select-input">
            Filtrar por gênero
            <select
              data-testid="select-input"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
            />
          </label>

        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
