import React from 'react';
import PropTypes from 'prop-types';

class RatingMovie extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="image-input">
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

RatingMovie.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RatingMovie;
