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
      onSelectedGenreChange
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="name">Inclui o texto:</label>
        <input type="text" value={ searchText } onChange={ onSearchTextChange }
        name="name" data-testid="text-input" />

        <label data-testid="checkbox-input-label" htmlFor="fav">Mostrar somente favoritos</label>
        <input type="checkbox" checked={ bookmarkedOnly } onChange={ onBookmarkedChange }
        name="fav" data-testid="checkbox-input" />
        
        <label data-testid="select-input-label" htmlFor="genre">Filtrar por gênero</label>
        <select value={ selectedGenre } onChange={ onSelectedGenreChange }
        name="genre" data-testid="select-input">
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
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
export default SearchBar;
