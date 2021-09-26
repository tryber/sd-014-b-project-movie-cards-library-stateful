import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './text-input';
import CheckBoxInput from './checkboxInput';

class SearchBar extends Component {
  render() {
    const {
      selectedGenre,
      onSelectedGenreChange,
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <TextInput onSearchTextChange={ onSearchTextChange } searchText={ searchText } />
        <CheckBoxInput
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <label
          htmlFor="genre-filter"
          data-testid="select-input-label"
        >
          Filtrar por gênero
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
            id="genre-filter"
            name="selectedGenre"
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
  onSearchTextChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
}.isRequired;
export default SearchBar;
