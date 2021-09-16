import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            value={ rating }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Avaliacao.propTypes = {
  onChange: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Avaliacao;
