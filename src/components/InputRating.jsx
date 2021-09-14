import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {

  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          value={ rating }
          handleChange={ handleChange }
          data-testid="rating-input"
          type="number"
        />
      </label>

    );
  }
}

InputRating.propTypes = {
  rating: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;

export default InputRating;
