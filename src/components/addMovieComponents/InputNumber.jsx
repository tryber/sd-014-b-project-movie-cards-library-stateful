import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputNumber extends Component {
  render() {
    const { initValue, change } = this.props;
    return (
      <label htmlFor="film-rating-form" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ initValue }
          min={ 0 }
          max={ 10 }
          step={ 0.05 }
          id="film-rating-form"
          onChange={ change }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  initValue: PropTypes.number.isRequired,
  change: PropTypes.func.isRequired,
};

export default InputNumber;
