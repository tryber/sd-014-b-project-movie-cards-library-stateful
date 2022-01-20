import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { name, dataTestid, type, inputType, funcChangingValue } = this.props;
    return (
      <input
        name={ name }
        data-testid={ dataTestid }
        type={ type }
        value={ inputType }
        onChange={ funcChangingValue }
      />
    );
  }
}

Input.propTypes = PropTypes.shape({
  name: PropTypes.string,
  dataTestid: PropTypes.string,
  type: PropTypes.string,
  inputType: PropTypes.string,
  funcChangingValue: PropTypes.func,
}).isRequired;
export default Input;
