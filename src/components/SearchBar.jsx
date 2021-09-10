import React from 'react';
import PropTypes from 'prop-types';

class SerchBar extends React.Component {
  render() {
    const { searchText,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
      bookmarkedOnly } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="incluirTexto" data-testid="text-input-label">
          Inclui o texto:
          <input
            onChange={ onSearchTextChange }
            data-testid="text-input"
            value={ searchText }
          />
        </label>

        <label htmlFor="mostrar-favoritos" data-testid="checkbox-input-label">
          Mostrar somente favoritos:
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>

        <label htmlFor="filtro-genero" data-testid="select-input-label">
          Filtrar por gênero:
          <select
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
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
  searchText: PropTypes.string,
  selectedGenre: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
}.isRequired;

export default SerchBar;
