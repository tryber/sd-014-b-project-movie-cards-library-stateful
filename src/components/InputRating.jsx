import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputRating extends Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="inputRating">
        Avaliação
        <input
          data-testid="rating-input"
          name="rating"
          id="inputRating"
          type="number"
          value={ rating }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  rating: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputRating;
