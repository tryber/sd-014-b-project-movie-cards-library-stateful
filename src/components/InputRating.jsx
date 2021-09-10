import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputRating extends Component {
  render() {
    const { description, rating, handleChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        { description }
        <input
          type="number"
          name="rating"
          id="rating-input"
          data-testid="rating-input"
          value={ rating }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  description: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputRating;
