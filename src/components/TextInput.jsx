import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  render() {
    const { type, handleClick, data, label } = this.props;
    return (
      <label data-testid={ `${data}-label` } htmlFor={ type }>
        { label }
        <input
          type="text"
          name={ type }
          onChange={ handleClick }
          data-testid={ data }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default TextInput;
