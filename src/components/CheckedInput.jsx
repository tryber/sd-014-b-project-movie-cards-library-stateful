import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckedInput extends Component {
  render() {
    const { onChange, checked } = this.props;
    return (
      <div>
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos:
          <input
            type="checkbox"
            onChange={ onChange }
            data-testid="checkbox-input"
            checked={ checked }
          />
        </label>
      </div>
    );
  }
}

CheckedInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};
