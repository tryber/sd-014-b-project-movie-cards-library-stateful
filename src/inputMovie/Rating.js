import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Rating extends Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          value={ rating }
          type="number"
          name="rating"
          data-testid="rating-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

Rating.defaultProps = {
  rating: 0,
};