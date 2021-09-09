import React from 'react';
import PropTypes from 'prop-types';

class RatingNewMovie extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        <p>Avaliação</p>
        <input
          name="rating"
          type="number"
          value={ value }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingNewMovie.propTypes = PropTypes.shape({
  value: PropTypes.number,
  handleChange: PropTypes.func,
}).isRequired;

export default RatingNewMovie;
