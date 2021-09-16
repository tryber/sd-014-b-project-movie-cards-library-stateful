import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingAddMovie extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="121" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          value={ value }
          data-testid="rating-input"
          onChange={ handleChange }
          name="rating"
          id="rating-input"
        />
      </label>
    );
  }
}
RatingAddMovie.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default RatingAddMovie;
