import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { rating, change } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ change }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  change: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};

export default InputRating;
