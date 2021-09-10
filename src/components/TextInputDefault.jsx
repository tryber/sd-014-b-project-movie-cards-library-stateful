import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInputDefault extends Component {
  render() {
    const { name, inputId, labelId, value, handleChange, description, type } = this.props;
    return (
      <label htmlFor={ inputId } data-testid={ labelId }>
        { description }
        <input
          name={ name }
          data-testid={ inputId }
          value={ value }
          onChange={ handleChange }
          type={ type }
        />
      </label>
    );
  }
}

TextInputDefault.propTypes = {
  name: PropTypes.string,
  inputId: PropTypes.string,
  labelId: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  description: PropTypes.string,
  type: PropTypes.string,
}.isRequired;

export default TextInputDefault;
