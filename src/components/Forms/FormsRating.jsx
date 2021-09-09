import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormsRating extends Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          min="0"
          max="5"
          step="0.1"
          value={ rating }
          onChange={ onChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

FormsRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default FormsRating;
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number
