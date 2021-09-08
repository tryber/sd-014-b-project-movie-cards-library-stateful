// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

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

SearchBar.propTypes={
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: 'undefined',
  bookmarkedOnly: false,
  onBookmarkedChange: 'undefined',
  selectedGenre: '',
  onSelectedGenreChange: 'undefined',
};

export default SearchBar;

/*
Requisito 1: padrão, cria aqui e manda pro app.js
Requisito 2: tag formulario com o atributo necessário
Requisito 3: cria-se a tag formulário
cria-se o rótulo(label) com as atributos necessários
rótulo do label 'inclui o texto' obrigatório
cria-se o input com os requisitos necessários
Requisito 4: quase igual o anterior só que com checkbox
Requisito5: criar outra label
'filtrar por genero' obrigatório
criar o botão de seleção com os atributos necessários
criar os options com os atributos necessários
Proptype: pro lint não acusar erro nas props, é necessário fazer o proptype
conforme foi descrito lá no requisito 1.
Searchbar recebe um objeto que é seu conteúdo e o tipo do conteúdo, string, func, bool...etc
caso não tenha nada, o conteúdo padrão a ser exibido é linha 64 a 71.
*/
