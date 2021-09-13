import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <section className="col">
        <label className="mb-3" htmlFor="input-rating" data-testid="rating-input-label">
          Avaliação
          <input
            className="form-control"
            data-testid="rating-input"
            type="number"
            id="input-rating"
            name="rating"
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </section>
    );
  }
}

RatingInput.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RatingInput;
