import PropTypes from 'prop-types';
import React from 'react';

class AddRating extends React.Component {
  render() {
    const { rating, inputChange } = this.props;
    return (
      <label htmlFor="ratingAddMovie" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="ratingAddMovie"
          value={ rating }
          data-testid="rating-input"
          onChange={ inputChange }
        />
      </label>
    );
  }
}

AddRating.propTypes = {
  rating: PropTypes.number,
  inputChange: PropTypes.func,
}.isRequired;

export default AddRating;
