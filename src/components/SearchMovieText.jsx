import React from 'react';
import PropTypes from 'prop-types';

class SearchMovieText extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div className="mb-3">
        <label
          className="form-label"
          data-testid="text-input-label"
          htmlFor="text-input-label"
        >
          Inclui o texto:
        </label>
        <input
          className="form-control"
          id="text-input-label"
          type="text"
          name="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </div>
    );
  }
}

SearchMovieText.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchMovieText;
