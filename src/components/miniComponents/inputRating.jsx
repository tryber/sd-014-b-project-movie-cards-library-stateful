import React, { Component } from 'react';
import PropTypes from 'prop-types';

class inputRating extends Component {
  render() {
    const { onChange, rating } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input-label" name="rating">
        Avaliação
        <input
          data-testid="rating-input"
          value={ rating }
          onChange={ onChange }
          name="rating"
          type="number"
        />
      </label>
    );
  }
}

inputRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default inputRating;
