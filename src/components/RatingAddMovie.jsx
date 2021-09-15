import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingAddMovie extends Component {
  render() {
    const { ratingValue, handleChange } = this.props;
    return (
      <label htmlFor="ratingAddMovie" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          id="ratingAddMovie"
          data-testid="rating-input"
          onChange={ handleChange }
          value={ ratingValue }
        />
      </label>
    );
  }
}

RatingAddMovie.propTypes = {
  ratingValue: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RatingAddMovie;
