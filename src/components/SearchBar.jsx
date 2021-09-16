// implement SearchBar component here
/*
1 - Crie um componente chamado <SearchBar />
2 - Renderize um formulário dentro de <SearchBar />
3 - Renderize um input do tipo texto dentro do formulário em <SearchBar />
4 - Renderize um input do tipo checkbox dentro do formulário em <SearchBar />
5 - Renderize um select dentro do formulário em <SearchBar />
*/
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            onChange={ onSearchTextChange }
            data-testid="text-input"
            value={ searchText }
            id="text-input"
          />
        </label>
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
            name="checkbox-input"
            id="checkbox-input"
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            name="select-input"
            id="select-input"
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

// Re-Verificar e re-estudar no quesito 20
SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchText: '',
  selectedGenre: '',
};
export default SearchBar;
