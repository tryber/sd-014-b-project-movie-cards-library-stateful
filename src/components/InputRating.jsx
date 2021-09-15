import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputRating extends Component {
  render() {
    const { rating, onChange } = this.props;

    return (
      <label htmlFor="movie-rating" data-testid="rating-input-label">
        <p>Avaliação</p>
        <input
          name="rating"
          id="rating"
          type="number"
          data-testid="rating-input"
          value={ rating }
          onChange={ onChange }
          required
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputRating;
