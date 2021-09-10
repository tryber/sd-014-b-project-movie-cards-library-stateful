import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label className="form-label" htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          className="form-control"
          id="rating"
          name="rating"
          value={ rating }
          type="number"
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputNumber;
