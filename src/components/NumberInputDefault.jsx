import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumberInputDefault extends Component {
  render() {
    const { name, inputId, labelId, value, handleChange, description } = this.props;
    return (
      <label htmlFor={ inputId } data-testid={ labelId }>
        { description }
        <input
          name={ name }
          data-testid={ inputId }
          value={ value }
          onChange={ handleChange }
          type="number"
        />
      </label>
    );
  }
}

NumberInputDefault.propTypes = {
  name: PropTypes.string,
  inputId: PropTypes.string,
  labelId: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  description: PropTypes.string,
  type: PropTypes.string,
}.isRequired;

export default NumberInputDefault;
