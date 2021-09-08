// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
import Select from './SearchBar Components/select';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <div>
        <h2>SearchBar</h2>
        <form data-testid="search-bar-form">
          <label htmlFor="input" data-testid="text-input-label">
            Inclui o texto
            <input
              name="input"
              placeholder="Searchbar maravilhoso"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
          <br />
          <label htmlFor="checkbox" data-testid="select-input-label">
            Mostrar somente favoritos
            <input
              name="checkbox"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
          <Select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          />
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
