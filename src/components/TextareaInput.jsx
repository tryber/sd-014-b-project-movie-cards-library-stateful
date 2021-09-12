import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextareaInput extends Component {
  render() {
    const { type, handleClick, data, label } = this.props;
    return (
      <label data-testid={ `${data}-label` } htmlFor={ type }>
        { label }
        <textarea
          type="textarea"
          id="stoyline"
          name={ type }
          onChange={ handleClick }
          data-testid={ data }
        />
      </label>
    );
  }
}

TextareaInput.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default TextareaInput;
