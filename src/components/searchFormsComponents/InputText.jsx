import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="input-text" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          className="input-text-forms"
          id="input-text"
          name="searchText"
          value={ value }
          onChange={ onChange }
          data-testid="text-input"
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
