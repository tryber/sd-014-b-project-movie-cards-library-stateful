import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RatingInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            name="rating"
            type="number"
            value={ value }
            onChange={ onChange }
            data-testid="rating-input"
          />
        </label>
      </div>
    );
  }
}

RatingInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
