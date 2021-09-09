import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddRating extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating-input-label" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddRating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
