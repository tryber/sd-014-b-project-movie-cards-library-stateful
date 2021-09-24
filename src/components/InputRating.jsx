import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="text" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          onChange={ handleChange }
          value={ rating }
          nome="rating"
          id="rating"
        />
      </label>
    );
  }
}

InputRating.propTypes = PropTypes.shape({
  value: PropTypes.string,
  handleChance: PropTypes.func,
}).isRequired;

export default InputRating;
