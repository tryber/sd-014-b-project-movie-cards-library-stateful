import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputRating extends Component {
  render() {
    const { value5, onChange } = this.props;

    return (
      <label htmlFor="movie-rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="imagePath"
          type="number"
          value={ value5 }
          onChange={ onChange }
          data-testid="rating-input"
          id="movie-rating"
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  value5: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputRating;
