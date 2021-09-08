import React from 'react';
import PropTypes from 'prop-types';

class RatingNumber extends React.Component {
  render() {
    const { value, myFunction } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating"
          type="number"
          value={ value }
          data-testid="rating-input"
          onChange={ myFunction }
        />
      </label>
    );
  }
}

RatingNumber.propTypes = {
  value: PropTypes.number.isRequired,
  myFunction: PropTypes.func.isRequired,
};

export default RatingNumber;
