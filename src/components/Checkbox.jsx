import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const { textLabel, type, id, checked, onChange, dataTestId, testLabel } = this.props;
    return (
      <label htmlFor={ id } data-testid={ testLabel }>
        { textLabel }
        <input
          type={ type }
          id={ id }
          name={ id }
          checked={ checked }
          onChange={ onChange }
          data-testid={ dataTestId }
        />
      </label>
    );
  }
}

Checkbox.propTypes = {
  textLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
  testLabel: PropTypes.string.isRequired,
};

export default Checkbox;
