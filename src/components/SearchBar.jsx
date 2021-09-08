// implement SearchBar component here
import React from "react";

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          TESTE
          <input
            type="text"
            data-testid="text-input"
            onChange={ onSearchTextChange }
            value={ searchText }
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;

/*
Requisito 1: padrão, cria aqui e manda pro app.js
Requisito 2: tag formulario com o atributo necessário
*/
