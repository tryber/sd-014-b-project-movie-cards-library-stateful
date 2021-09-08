import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { input, value, func } = this.props;
    return (
      <label htmlFor={ input.id } data-testid={ `${input.dataTestId}-label` }>
        { input.text }
        <input
          onChange={ func }
          type={ input.type }
          id={ input.id }
          value={ value }
          data-testid={ input.dataTestId }
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
