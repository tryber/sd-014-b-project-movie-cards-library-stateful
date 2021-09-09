import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { filme: { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="texto-um" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="texto-um"
            data-testid="text-input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="check-um" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="check-um"
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor="select-um" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="select-um"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
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

// SearchBar.propTypes = {
//   filme: PropTypes.shape({
//     searchText: PropTypes.string,
//     onSearchTextChange: PropTypes.func,
//     bookmarkedOnly: PropTypes.bool,
//     onBookmarkedChange: PropTypes.func,
//     selectedGenre: PropTypes.string,
//     onSelectedGenreChange: PropTypes.func,
//   }).isRequired,
// };

export default SearchBar;
