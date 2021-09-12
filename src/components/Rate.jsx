import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rate extends Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <div>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            type="number"
            value={ rating }
            data-testid="rating-input"
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Rate.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Rate;
