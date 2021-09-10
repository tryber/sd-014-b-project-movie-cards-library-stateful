import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class RatingComponent extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}
RatingComponent.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default RatingComponent;
