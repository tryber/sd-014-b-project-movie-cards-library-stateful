import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { rating, onChange } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  onChange: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};

export default InputRating;
