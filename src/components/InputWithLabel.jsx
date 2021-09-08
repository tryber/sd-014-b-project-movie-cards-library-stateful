import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputWithLabel extends Component {
  render() {
    const { label, type, name, value, onChange, dataTestid } = this.props;

    return (
      <label htmlFor={ name } data-testid={ `${dataTestid}-label` }>
        { label }
        <input
          type={ type }
          name={ name }
          id={ dataTestid }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestid }
        />
      </label>
    );
  }
}

InputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default InputWithLabel;
