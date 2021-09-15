import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputRating extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        <p>Avaliação</p>
        <input
          name="rating"
          id="rating"
          type="number"
          data-testid="rating-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputRating;
