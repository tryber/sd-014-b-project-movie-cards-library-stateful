import React from 'react';
import PropTypes from 'prop-types';

class AddRating extends React.Component {
  render() {
    const { handleChange, value } = this.props; // props também podem receber funçoes
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          name="storyline"
          type="number"
          id="storyline-input"
          data-testid="rating-input-label"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddRating.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default AddRating;
