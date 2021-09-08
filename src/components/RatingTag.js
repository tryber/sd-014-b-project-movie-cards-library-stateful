import React from 'react';
import PropTypes from 'prop-types';

export default class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <label htmlFor="rating-input-label" data-testid="rating-input-label">
        Avaliação
        <input
          value={ rating }
          data-testid="rating-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Rating.defaultProps = {
  rating: '0',
};

Rating.propTypes = {
  rating: PropTypes.number,
};
