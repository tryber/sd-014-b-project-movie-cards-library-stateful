import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextTag extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <label htmlFor="text-input-label" data-testid="text-input-label">
          Inclui o texto:
          <input
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

TextTag.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};
