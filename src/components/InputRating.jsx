import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputRating extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        <p>Avaliação</p>
        <input
          id="rating-input"
          name="rating"
          value={ value }
          onChange={ onChange }
          type="number"
          data-testid="rating-input"
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
