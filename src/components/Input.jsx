import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { label, type, value, onChange, data } = this.props;
    return (
      <label htmlFor={ `${value}-input` } data-testid={ `${data}-input-label` }>
        { label }
        <input
          type="text"
          value={ value }
          onChange={ onChange }
          data-testid={ `${data}-input` }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
};

export default Input;
