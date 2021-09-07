import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchText extends Component {
  render() {
    const { searchText,
      onSearchTextChange } = this.props;
    return (
      <div>
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="searchText"
            name="searchText"
            data-testid="text-input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
      </div>
    );
  }
}

SearchText.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.isRequired,
};

export default SearchText;
