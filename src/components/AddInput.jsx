import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddInput extends Component {
  render() {
    const { dfValue, onChange } = this.props;
    return (
      <label htmlFor="searchText" data-testid="text-input-label">
        <input
          data-testid="text-input"
          value={ dfValue }
          id="searchText"
          onChange={ onChange }
        />
        Inclui o texto:
      </label>
    );
  }
}

AddInput.propTypes = {
  dfValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
