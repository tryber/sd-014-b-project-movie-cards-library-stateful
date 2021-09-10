import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputCheckbox from './InputCheckbox';

export default class SearchBar extends Component {
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
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="search-text">
          <p>Inclui o texto:</p>
          <input
            data-testid="text-input"
            name="searchText"
            id="search-text"
            type="text"
            onChange={ onSearchTextChange }
            value={ searchText }
          />
        </label>
        <InputCheckbox checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        <label data-testid="select-input-label" htmlFor="select-input">
          <p>Filtrar por gênero</p>
          <select
            data-testid="select-input"
            id="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
