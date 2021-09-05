import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="s" data-testid="text-input-label">
          Inclui o texto
          <input id="s" type="text" data-testid="text-input" value={ searchText } onChange={ onSearchTextChange } />
        </label>
        <label htmlFor="c" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input id="c" type="checkbox" data-testid="checkbox-input" onChange={ onBookmarkedChange } checked={ bookmarkedOnly } />
        </label>
        <label htmlFor="se" data-testid="select-input-label">
          Filtrar por gênero
          <select id="se" data-testid="select-input" value={ selectedGenre } onChange={ onSelectedGenreChange }>
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
