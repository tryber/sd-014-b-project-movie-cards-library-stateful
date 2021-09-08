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
Method 'render' has too many lines (51). Maximum allowed is 50.eslintmax-lines-per-function --> selectedGenre não cabe
*/

import React from 'react';
import PropTypes from 'prop-types';
import SelectedGenre from './SelectedGenre';

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
      <div>
        <form className="form" data-testid="search-bar-form">
          <fieldset>
            <p>teste</p>
            <label htmlFor="searchText" data-testid="text-input-label">
              Inclui o texto
              <input
                data-testid="text-input"
                id="searchText"
                name="searchText"
                value={ searchText }
                type="text"
                onChange={ onSearchTextChange }
              />
            </label>

            <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
              Mostrar somente favoritos
              <input
                data-testid="checkbox-input"
                id="bookmarkedOnly"
                name="bookmarkedOnly"
                value={ bookmarkedOnly }
                type="checkbox"
                onChange={ onBookmarkedChange }
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
