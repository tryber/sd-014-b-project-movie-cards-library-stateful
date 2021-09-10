// implement SearchBar component here
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchBar extends Component {

  render() {
    const { 
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="" >
          Inclui o texto:
          <input
          name="searchText"
          value={ searchText }
          data-testid="text-input"
          onChange={ onSearchTextChange }
          type="text"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="">
          Mostrar somente favoritos
          <input
          name="bookmarkedOnly"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange= { onBookmarkedChange }
          data-testid="checkbox-input"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="">
          Filtrar por gênero
          <select 
          value={ selectedGenre }
          name="selectedGenre"
          id=""
          onChange={ onSelectedGenreChange }
          data-testid="select-input">
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    )
  }
}

/* SearchBar.PropTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;
 */