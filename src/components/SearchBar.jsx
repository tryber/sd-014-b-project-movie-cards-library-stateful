import React from "react";

export default class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, bookmarkedOnly } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input" data-testid="text-input-label">Inclui o texto:
          <input id="input" type="text" value="searchText" data-testid="text-input" onChange={ onSearchTextChange }></input>
        </label>
        <label htmlFor="" data-testid="checkbox-input-label">Mostrar somente favoritos
          <input type="checkbox" checked={ bookmarkedOnly } onChange={ onSearchTextChange } data-testid="checkbox-input"></input>      
        </label>
      </form>
    )
  }
}
