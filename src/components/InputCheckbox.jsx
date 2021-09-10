import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputImagePath extends Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
        <p>Mostrar somente favoritos</p>
        <input
          type="checkbox"
          name="bookmarkedOnly"
          checked={ checked }
          onChange={ onChange }
          data-testid="checkbox-input"
          id="checkbox-input"
        />
      </label>
    );
  }
}

InputImagePath.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
