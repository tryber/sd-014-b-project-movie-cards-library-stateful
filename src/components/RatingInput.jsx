import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ rating }
            onChange={ handleChange }
            data-testid="rating-input"
          />
        </label>
      </div>
    );
  }
}

RatingInput.propTypes = {
  rating: PropTypes.number,
  handleChange: PropTypes.func.isRequired,
}.isRequired;

export default RatingInput;
