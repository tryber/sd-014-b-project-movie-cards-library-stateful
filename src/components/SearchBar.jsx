// implement SearchBar component here
import React, { Component } from 'react';

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
          <label htmlFor="searchText" data-testid="text-input-label">
            Inclui o texto:
            <input
              onChange={ onSearchTextChange }
              data-testid="text-input"
              value={ searchText }
              id="searchText"
              type="text"
            />
            <label
              htmlFor="checkbox-search-bar"
              data-testid="checkbox-input-label"
            >
              Mostrar somente favoritos
              <input
                data-testid="checkbox-input"
                type="checkbox"
                checked={ bookmarkedOnly }
                onChange={ onBookmarkedChange }
                id="checkbox-search-bar"
              />
            </label>
            <label htmlFor="select-search-bar" data-testid="select-input-label">
              Filtrar por gênero
              <select
                data-testid="select-input"
                name="select"
                id="select-search-bar"
                value={ selectedGenre }
                onChange={ onSelectedGenreChange }
              >
                <option value="" data-testid="select-option">
                  Todos
                </option>
                <option value="action" data-testid="select-option">
                  Ação
                </option>
                <option value="comedy" data-testid="select-option">
                  Comédia
                </option>
                <option value="thriller" data-testid="select-option">
                  Suspense
                </option>
              </select>
            </label>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
