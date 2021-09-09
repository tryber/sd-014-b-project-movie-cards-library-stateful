import React from 'react';
import PropTypes from 'prop-types';

class RaingInput extends React.Component {
  render() {
    const { rating, atualiza } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          id="rating"
          name="rating"
          value={ rating }
          type="number"
          onChange={ atualiza }
        />
      </label>
    );
  }
}

RaingInput.propTypes = {
  rating: PropTypes.number.isRequired,
  atualiza: PropTypes.func.isRequired,
};

export default RaingInput;
