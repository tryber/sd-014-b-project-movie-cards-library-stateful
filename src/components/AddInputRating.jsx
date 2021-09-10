import React from 'react';
import PropTypes from 'prop-types';

class AddInputRating extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddInputRating.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddInputRating;
