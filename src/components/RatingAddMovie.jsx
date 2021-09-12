import React from 'react';
import PropTypes from 'prop-types';

class RatingAddMovie extends React.Component {
  render() {
    const { value, addMovie } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          onChange={ addMovie }
          name="rating"
          value={ value }
          id="rating-input"
        />
      </label>
    );
  }
}

RatingAddMovie.propTypes = {
  value: PropTypes.string,
  addMovie: PropTypes.func,
}.isRequired;

export default RatingAddMovie;
