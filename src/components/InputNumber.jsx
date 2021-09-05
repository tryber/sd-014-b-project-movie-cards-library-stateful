import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { rating, handleChange } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  handleChange: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};

export default InputNumber;
