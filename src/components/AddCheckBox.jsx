import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddCheckBox extends Component {
  render() {
    const { dfValue, onChange } = this.props;
    return (
      <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
        <input
          data-testid="checkbox-input"
          id="bookmarkedOnly"
          onChange={ onChange }
          checked={ dfValue }
        />
        Mostrar somente favoritos
      </label>
    );
  }
}

AddCheckBox.propTypes = {
  dfValue: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
