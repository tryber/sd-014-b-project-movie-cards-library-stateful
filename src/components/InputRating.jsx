import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputRating extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="ratingFormAdd" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          value={ value }
          name="rating"
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputRating;
