// 1) Criando o SearchBar

import React from 'react';
import PropTypes from 'prop-types';

// 1 - Crie um componente chamado <SearchBar />

export default class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;

    return (
    // 2 - Renderize um formulário dentro de <SearchBar />
      <form data-testid="search-bar-form">
        {/* 3 - Renderize um input do tipo texto dentro do form */}
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto
          <input
            data-testid="text-input"
            type="text"
            onChange={ onSearchTextChange }
            value={ searchText }
          />
        </label>
        {/* 4 - Renderize um input do tipo checkbox */}
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            name="bookmarkedOnly"
          />
        </label>
        {/* 5 - Renderize um select */}
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

SearchBar.propTypes = {
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
