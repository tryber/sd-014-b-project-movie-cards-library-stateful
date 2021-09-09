import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          name="rating"
          type="number"
          value={ value }
          onChange={ handleChange }
        />
      </label>);
  }
}

RatingInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.isRequired,
};

export default RatingInput;
