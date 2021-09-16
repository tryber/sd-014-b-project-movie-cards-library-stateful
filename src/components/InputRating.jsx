import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <section>
        <article>
          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input
              data-testid="rating-input"
              name="rating"
              value={ rating }
              onChange={ handleChange }
              type="number"
            />
          </label>
        </article>
      </section>
    );
  }
}

InputRating.propTypes = {
  rating: PropTypes.number,
  handleChange: PropTypes.func.isRequired }.isRequired;

export default InputRating;