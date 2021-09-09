import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="MovieRating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ value }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Rating.propType = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Rating;
