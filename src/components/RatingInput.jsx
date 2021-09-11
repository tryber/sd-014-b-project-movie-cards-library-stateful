import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingInput extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <section className="field">
        <label
          className="label"
          htmlFor="rating-input"
          data-testid="rating-input-label"
        >
          Avaliação
          <input
            className="input is-rounded rating-input"
            type="number"
            name="rating"
            id="rating-input"
            value={ value }
            onChange={ onChange }
            data-testid="rating-input"
          />
        </label>
      </section>
    );
  }
}

RatingInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RatingInput;
