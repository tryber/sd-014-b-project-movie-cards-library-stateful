import React from "react";

export default class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input" data-testid="text-input-label">Inclui o texto:
          <input id="input" type="text" value={ searchText } data-testid="text-input" onChange={ onSearchTextChange }></input>
        </label>
        <label htmlFor="" data-testid="checkbox-input-label">Mostrar somente favoritos
          <input type="checkbox" checked={ bookmarkedOnly } onChange={ onSearchTextChange } data-testid="checkbox-input"></input>      
        </label>
        <label htmlFor="" data-testid="select-input-label">Filtrar por gênero
          <select value={ selectedGenre } onChange={ onSelectedGenreChange } data-testid="select-input">
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    )
  }
}
