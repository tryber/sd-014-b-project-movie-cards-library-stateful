import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

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
      <form data-testid="search-bar-form">
        <Input
          description="Inclui o texto"
          type="text"
          value={ searchText }
          name="searchText"
          onChange={ onSearchTextChange }
          dataTestIdLabel="text-input-label"
          dataTestIdInput="text-input"
        />
        <Input
          description="Mostrar somente favoritos"
          type="checkbox"
          name="bookmarkedOnly"
          id="bookmarkedOnly"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          dataTestIdInput="checkbox-input"
          dataTestIdLabel="checkbox-input-label"
        />
        <label htmlFor="filter-genre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="filter-genre"
            value={ selectedGenre }
            name="selectedGenre"
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
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
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
};

export default SearchBar;
