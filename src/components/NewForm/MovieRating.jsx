import React from 'react';
import PropTypes from 'prop-types';

class MovieRating extends React.Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <label htmlFor="ratingInput" data-testid="ratingInputLabel">
        Sinopse
        <textarea
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ onChange }
        />
      </label>
    );
  }
}

MovieRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MovieRating;
