import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputMovieRating extends Component {
  render() {
    const { value, funcaoAtualizaPai } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          data-testid="rating-input"
          type="number"
          value={ value }
          id="rating"
          onChange={ funcaoAtualizaPai }
        />
      </label>
    );
  }
}

InputMovieRating.propTypes = {
  value: PropTypes.number.isRequired,
  funcaoAtualizaPai: PropTypes.func.isRequired,
};
export default InputMovieRating;
