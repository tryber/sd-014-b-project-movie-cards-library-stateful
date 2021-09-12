import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Checkbox from './Checkbox';

class SearchBar extends Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <form className="formSearchBar" data-testid="search-bar-form">
        <Input
          textLabel="Inclui o texto:"
          testIdLabel="text-input-label"
          type="text"
          id="inputSeach"
          name="inputSearch"
          value={ searchText }
          onChange={ onSearchTextChange }
          dataTestId="text-input"
        />
        <Checkbox
          textLabel="Mostrar somente favoritos"
          testLabel="checkbox-input-label"
          type="checkbox"
          id="inputCheck"
          name="inputCheck"
          onChange={ onBookmarkedChange }
          checked={ bookmarkedOnly }
          dataTestId="checkbox-input"
        />
        <label htmlFor="inputSelect" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="inputSelect"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
