import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <form data-testid="search-bar-form" className="header-container">
        <label
          data-testid="text-input-label"
          className="header-label"
          htmlFor="find-text"
        >
          Inclui o texto:
          <input
            data-testid="text-input"
            className="header-input"
            id="find-text"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>

        <label
          className="header-label"
          htmlFor="show-only-favorites"
        >
          <input
            className="input-checkbox"
            type="checkbox"
            name="show-only-favorites"
            id="show-only-favorites"
          />
          Mostrar somente favoritos
        </label>
        <label className="header-label" htmlFor="filter-genre">
          Filtrar por gênero:
          <select className="header-input" id="filter-genre">
            <option value="">Filtrar por gênero</option>
            {/* {movies
              .map(({ genre }, index) => (
                <option
                  key={ index + 1 }
                  value={ genre }
                >
                  { genre }
                </option>))} */}
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  // movies: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
