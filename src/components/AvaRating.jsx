import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AvaRating extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating-input"
          data-testid="rating-input"
          name="rating"
          type="number"
          value={ value }
          onChange={ onChange }
          required
        />
      </label>
    );
  }
}

AvaRating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AvaRating;
