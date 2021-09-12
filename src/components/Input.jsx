import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { textLabel, type, id, value, dataTestId, onChange } = this.props;

    return (
      <label htmlFor={ id } data-testid={ `${dataTestId}-label` }>
        { textLabel }
        <input
          type={ type }
          id={ id }
          name={ id }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestId }
        />
      </label>
    );
  }
}

Input.propTypes = {
  textLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
