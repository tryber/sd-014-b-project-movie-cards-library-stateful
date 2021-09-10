// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
import SelectSearchBar from './SelectSearchBar';

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
      <form className="row p-3" data-testid="search-bar-form">
        <label className="form-label" htmlFor="search" data-testid="text-input-label">
          Inclui o texto:
          <input
            className="form-control"
            id="search"
            name="searchText"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <div className="form-check m-3">
          <label
            className="form-check-label"
            htmlFor="checkbox-search"
            data-testid="checkbox-input-label"
          >
            <input
              className="form-check-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
              name="bookmarkedOnly"
              id="checkbox-search"
              type="checkbox"
            />
            Mostrar somente favoritos
          </label>
        </div>
        <SelectSearchBar
          value={ selectedGenre }
          handleChange={ onSelectedGenreChange }
        />
      </form>
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
