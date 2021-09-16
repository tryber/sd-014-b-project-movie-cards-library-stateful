import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <label
        htmlFor="Avaliação"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          onChange={ onChange }
          value={ rating }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  rating: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputRating;
