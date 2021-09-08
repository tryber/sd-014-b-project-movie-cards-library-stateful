import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputNumber extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          name="rating"
          id="rating"
          type="number"
          value={ value }
          onChange={ onChange }
          required
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputNumber;
