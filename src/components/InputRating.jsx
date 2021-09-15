import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          value={ value }
          data-testid="rating-input"
          onChange={ handleChange }
          name="rating"
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;
export default InputRating;
