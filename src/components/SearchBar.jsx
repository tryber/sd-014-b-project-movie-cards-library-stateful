import PropTypes from 'prop-types';
import React from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="inputText" data-testid="text-input-label">
          Inclui o texto:
          <input id="inputText" type="text" data-testid="text-input" onChange={ this.props.onSearchTextChange } value={ this.props.searchText } />
        </label>
        <label htmlFor="inputCheckbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input data-testid="checkbox-input" type="checkbox" id="inputCheckbox" onChange={ this.props.onBookmarkedChange } checked={ this.props.bookmarkedOnly } />
        </label>
        <label data-testid="select-input-label">
          Filtrar por gênero
          <select data-testid="select-input" onChange={ this.props.onSelectedGenreChange} value={ this.props.selectedGenre }>
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

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;
