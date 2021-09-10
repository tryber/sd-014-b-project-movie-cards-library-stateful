import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumberInput extends Component {
  render() {
    const { initialState, onChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          value={ initialState }
          onChange={ (event) => {
            onChange(event);
          } }
        />
      </label>
    );
  }
}

NumberInput.propTypes = {
  initialState: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberInput;
