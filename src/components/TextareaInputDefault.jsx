import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextareaInputDefault extends Component {
  render() {
    const { name, inputId, labelId, value, handleChange, description } = this.props;
    return (
      <label htmlFor={ inputId } data-testid={ labelId }>
        { description }
        <textarea
          name={ name }
          data-testid={ inputId }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TextareaInputDefault.propTypes = {
  name: PropTypes.string,
  inputId: PropTypes.string,
  labelId: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  description: PropTypes.string,
  type: PropTypes.string,
}.isRequired;

export default TextareaInputDefault;
