import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputRating extends Component {
  render() {
    const { value, funcCallback } = this.props;
    return (
      <label htmlFor="title" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          data-testid="rating-input"
          type="number"
          value={ value }
          id="rating"
          onChange={ funcCallback }
        />
      </label>
    );
  }
}
InputRating.propTypes = {
  value: PropTypes.string.isRequired,
  funcCallback: PropTypes.func.isRequired,
};

export default InputRating;
