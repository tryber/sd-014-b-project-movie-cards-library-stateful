import React from 'react';
import PropTypes from 'prop-types';

class SerchBar extends React.Component {
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
        <label htmlFor="incluirTexto" data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            onChange={ onSearchTextChange }
            value={ searchText }
          />
        </label>

        <label htmlFor="mostrar-favoritos" data-testid="checkbox-input-label">
          Mostrar somente favoritos:
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
            onChange={ onBookmarkedChange }
          />
        </label>

        <label htmlFor="filtro-genero" data-testid="select-input-label">
          Filtrar por gênero:
          <select
            data-testid="select-input"
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
          >

            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SerchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SerchBar;
