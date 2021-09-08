import React from 'react';
import PropTypes from 'prop-types';

class RatingNumber extends React.Component {
  render() {
    const { rating, myFunction } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating"
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ myFunction }
        />
      </label>
    );
  }
}

RatingNumber.propTypes = {
  rating: PropTypes.number.isRequired,
  myFunction: PropTypes.func.isRequired,
};

export default RatingNumber;
