import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          id="rating-input"
          name="rating"
          type="number"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
}.isRequered;

export default Rating;
