import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <label
        htmlFor="rating-label"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          id="rating-label"
          data-testid="rating-input"
          type="number"
          value={ rating }
          onChange={ rating }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default InputRating;
