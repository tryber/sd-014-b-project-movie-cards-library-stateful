import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { value, func, input } = this.props;
    const { id, dataTestId, type, text } = input;
    return (
      <label htmlFor={ id } data-testid={ `${dataTestId}-label` }>
        { text }
        <input
          onChange={ func }
          type={ type }
          id={ id }
          value={ value }
          data-testid={ dataTestId }
        />
      </label>
    );
  }
}

Input.propTypes = {
  input: PropTypes.shape({
    type: PropTypes.string,
    id: PropTypes.string,
    text: PropTypes.string,
    dataTestId: PropTypes.string,
  }).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  func: PropTypes.func.isRequired,
};

export default Input;
