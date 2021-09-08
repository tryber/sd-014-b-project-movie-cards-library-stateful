import React from 'react';
import PropType from 'prop-types';

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

Rating.PropType = {
  value: PropType.string.isRequired,
  handleChange: PropType.func.isRequired,
};

export default Rating;
