import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto:
          <input data-testid="text-input" type="text" onChange={"onSearchTextChange"} value={"texto"} />
        </label>
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input data-testid="checkbox-input" type="checkbox" onChange={"onBookmarkedChange"} checked={"bookmarkedOnly"}/>
        </label>
        <label data-testid="select-input-label">
          Filtrar por gênero
          <select data-testid="select-input" onChange={"onSelectedGenreChange"} value={"selectedGenre"}>
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
