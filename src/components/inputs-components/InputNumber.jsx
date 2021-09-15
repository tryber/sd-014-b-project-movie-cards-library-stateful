import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        <p>Avaliação</p>
        <input
          id="rating"
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
