import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating-input"
          value={ rating }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default RatingInput;
