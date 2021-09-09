import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Avaliator extends Component {
  render() {
    const { value, handleMovie } = this.props;

    return (
      <label htmlFor="control4" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          onChange={ handleMovie }
          value={ value }
        />
      </label>
    );
  }
}

Avaliator.propTypes = {
  value: PropTypes.number.isRequired,
  handleMovie: PropTypes.func.isRequired,
};

export default Avaliator;
