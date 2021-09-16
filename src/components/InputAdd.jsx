import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputAdd extends Component {
  render() {
    const { name, dataTestId, value, type, handleChange, label } = this.props;
    return (
      <section>
        <label
          data-testid={ `${dataTestId}-label` }
          htmlFor={ name }
        >
          { label }
        </label>
        <input
          id={ name }
          name={ name }
          type={ type }
          data-testid={ dataTestId }
          value={ value }
          onChange={ handleChange }
        />
      </section>
    );
  }
}

InputAdd.propTypes = {
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}.isRequired;

export default InputAdd;
