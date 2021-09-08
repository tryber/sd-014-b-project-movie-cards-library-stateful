// implement SearchBar component here
import React from "react";

class SearchBar extends React.Component {
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
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto
          <input
            type="text"
            data-testid="text-input"
            onChange={onSearchTextChange}
            value={searchText}
          />
        </label>
        <label htmlFor="chekbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmarkedOnly"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
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

/*
Requisito 1: padrão, cria aqui e manda pro app.js
Requisito 2: tag formulario com o atributo necessário
Requisito 3: cria-se a tag formulário
cria-se o rótulo(label) com as atributos necessários
rótulo do label 'inclui o texto' obrigatório
cria-se o input com os requisitos necessários
Requisito 4: quase igual o anterior só que com checkbox
Requisito5: 
*/
