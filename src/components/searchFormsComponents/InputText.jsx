import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="input-text" data-testid="text-input-label">
        Inclui o texto:
        <input
          id="input-text"
          data-testid="text-input"
          value={ value }
          onChange={ onChange }
          type="text"
        />
      </label>
    );
  }
}

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
