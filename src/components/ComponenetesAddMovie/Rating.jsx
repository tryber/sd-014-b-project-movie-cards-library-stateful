import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating, func } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          data-testid="rating-input"
          name="rating"
          type="number"
          value={ rating }
          onChange={ func }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default Rating;
