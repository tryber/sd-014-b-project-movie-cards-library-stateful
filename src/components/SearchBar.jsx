import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="input-text"
            onChange={ onSearchTextChange }
            value={ searchText }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="input-checkbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="input-checkbox"
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="input-select" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="input-select"
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
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

export default SearchBar;
