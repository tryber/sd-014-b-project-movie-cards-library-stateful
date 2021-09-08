// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto
          <input
            type="text"
            data-testid="text-input"
            onChange={ onSearchTextChange }
            value={ searchText }
          />
        </label>
        <label htmlFor="chekbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input 
            type="checkbox"
            name="bookmarkedOnly"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
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
Requisito 3: cria-se a tag formulário
cria-se o rótulo(label) com as atributos necessários
rótulo do label 'inclui o texto' obrigatório
cria-se o input com os requisitos necessários
Requisito 4: 
*/
