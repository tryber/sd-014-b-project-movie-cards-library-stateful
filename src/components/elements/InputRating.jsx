import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { handleChange, state } = this.props;

    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          value={ state }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.number.isRequired,
};

export default InputRating;
