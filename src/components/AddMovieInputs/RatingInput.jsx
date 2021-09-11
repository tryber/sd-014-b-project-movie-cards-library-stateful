import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { rating, inputChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating-input"
          value={ rating }
          data-testid="rating-input"
          onChange={ inputChange }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  rating: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
};

export default RatingInput;
