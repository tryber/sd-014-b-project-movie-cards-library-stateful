import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputRating extends Component {
  render() {
    const { value5, onChange } = this.props;

    return (
      <label htmlFor="movie-rating" data-testid="rating-input-label">
        <p>Avaliação</p>
        <input
          name="rating"
          id="rating"
          type="number"
          data-testid="rating-input"
          value={ value5 }
          onChange={ onChange }
          required
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
