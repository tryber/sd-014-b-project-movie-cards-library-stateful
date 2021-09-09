import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">

        <label htmlFor="search-input" data-testid="text-input-label">
          Inclui o texto:
          <input name="searchText" type="text" id="search-input" onChange={ onSearchTextChange } value={ searchText } data-testid="text-input" />
        </label>

        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input type="checkbox" data-testid="checkbox-input" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        </label>

        <label htmlFor="" data-testid="select-input-label">
          Filtrar por gênero
          <select value={ selectedGenre } onChange={ onSelectedGenreChange } data-testid="select-input">
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

export default SearchBar;
