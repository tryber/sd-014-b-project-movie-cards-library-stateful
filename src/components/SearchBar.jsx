// implement SearchBar component here

/* Requisito 1 - Crie um componente chamado <SearchBar />

Esse componente renderizará uma barra com filtros acima da listagem de cartões.
Quais cartões serão mostrados no componente <MovieList /> dependerá dos filtros escolhidos.
<SearchBar /> deve receber como props:

searchText, uma string          --> text
onSearchTextChange, uma callback --> function
bookmarkedOnly, um boolean      --> checkbox
onBookmarkedChange, uma callback --> function
selectedGenre, uma string       --> select/dropdown
onSelectedGenreChange, uma callback --> function
O que será verificado:

Será validado se o componente <SearchBar />, recebendo as devidas props, renderiza com sucesso
*/

/*
selectedGenre não cabe:
"Method 'render' has too many lines (51). Maximum allowed is 50.eslintmax-lines-per-function"
=> import SelectedGenre from './SelectedGenre';
*/

import React from 'react';
import PropTypes from 'prop-types';
import SelectedGenre from './SelectedGenre';

class SearchBar extends React.Component { // Requisito 1 - Crie um componente chamado <SearchBar
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
        {/* 2 - Renderize um formulário dentro de <SearchBar /> */}
        <form className="form" data-testid="search-bar-form">
          <fieldset>
            <p>teste</p>
            <label htmlFor="searchText" data-testid="text-input-label">
              Inclui o texto
              <input
              // Requisito 3: Será validado que o input de texto contém a label "Inclui o texto"
              // Será validado que 1, e apenas 1, input de texto é renderizado dentro do forms
                data-testid="text-input"
                id="searchText"
                name="searchText"
                value={ searchText } // Será validado se o input de texto tem o valor passado pela props searchText
                type="text"
                onChange={ onSearchTextChange } // Será validado que a props onSearchTextChange é passada para o atributo onChange do input
              />
            </label>

            <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
              Mostrar somente favoritos
              <input
                data-testid="checkbox-input" // Requisito 4: Esse input deve apresentar o atributo data-testid="checkbox-input"
                id="bookmarkedOnly"
                name="bookmarkedOnly"
                value={ bookmarkedOnly }
                type="checkbox"
                checked="bookmarkedOnly" // Requisito 4: A propriedade checked do input deve receber o valor da prop bookmarkedOnly;
                onChange={ onBookmarkedChange } // Requisito 4: A propriedade onChange do input deve receber o valor da prop onBookmarkedChange.
              />
            </label>
            <SelectedGenre
              selectedGenre={ selectedGenre }
              onSelectedGenreChange={ onSelectedGenreChange }
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
