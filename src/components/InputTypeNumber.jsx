import React from 'react';
import PropTypes from 'prop-types';

class InputTypeNumber extends React.Component {
  render() {
    const { rating, handleInputChange } = this.props;

    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          data-testid="rating-input"
          type="number"
          value={ rating }
          onChange={ handleInputChange }
        />
      </label>
    );
  }
}

InputTypeNumber.propTypes = {
  rating: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default InputTypeNumber;
