import React from 'react';
import PropTypes from 'prop-types';

class RatingMovie extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
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

RatingMovie.defaultProps = {
  value: 0,
};

RatingMovie.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number,
};

export default RatingMovie;
