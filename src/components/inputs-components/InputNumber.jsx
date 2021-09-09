import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        <p>Avaliação</p>
        <input
          id="rating-input"
          name="rating"
          value={ value }
          onChange={ onChange }
          type="number"
          data-testid="rating-input"
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
