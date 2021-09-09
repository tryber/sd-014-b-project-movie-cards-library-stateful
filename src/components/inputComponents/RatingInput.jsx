import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="ratingInput" data-testid="rating-input-label">
        Avaliação
        <input
          name="ratingInput"
          type="number"
          value={ Number(value) }
          data-testid="rating-input"
          onChange={ onChange }
          min="0"
          max="5"
          step="0.1"
        />
      </label>
    );
  }
}

Rating.defaultProps = {
  value: 0,
};

Rating.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default Rating;
