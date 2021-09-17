import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      type,
      onChange,
      value,
      testidLabel,
      testidInput,
      id,
      label,
    } = this.props;

    return (
      <label htmlFor={ id } data-testid={ testidLabel }>
        { label }
        <input
          data-testid={ testidInput }
          type={ type }
          onChange={ onChange }
          value={ value }
          id={ id }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  testidLabel: PropTypes.string,
  testidInput: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
}.isRequired;

export default Input;
